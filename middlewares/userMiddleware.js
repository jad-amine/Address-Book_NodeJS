const bcrypt = require("bcrypt");
const User = require("../models/User");
const jwt = require("jsonwebtoken");
require("dotenv").config();

// Login User
const login = async (req, res, next) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) res.json({ message: "Invalid Credentials" });

    // for Sign up:
    // const salt = await bcrypt.genSalt(10);
    // const hashPassword = await bcrypt.hash(req.body.password, salt);
    const validPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!validPassword) res.json({ message: "Invalid Credentials" });
    const token = jwt.sign(
      { _id: user._id, name: user.name, email: user.email },
      process.env.JWT_SECRET_KEY
    );

    res.json({ message: "Success", token: token });
    // to send data between middlewares
    // req.dataFromMiddleware = token;
    // res.locals = token;
    // next();
  } catch (err) {
    console.log(err);
  }
};

// Verify token
const authUser = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    console.log(token);
    const verified = jwt.verify(token, process.env.JWT_SECRET_KEY);
    if (verified) {
      next();
    } else {
      // Access Denied
      return res.send("unauthenticated");
    }
  } catch (error) {
    // Access Denied
    return res.send("error");
  }
};

module.exports = { login, authUser };
