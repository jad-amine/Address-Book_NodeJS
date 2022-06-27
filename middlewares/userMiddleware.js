const bcrypt = require("bcrypt");
const User = require("../models/User");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

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
    // req.dataFromMiddleware = token;
    // res.locals = token;
    // next();
  } catch (err) {
    console.log(err);
  }
};

const authUser = (req, res, next) => {
  console.log(req.body);

  let tokenHeaderKey = process.env.TOKEN_HEADER_KEY;
  let jwtSecretKey1 = process.env.JWT_SECRET_KEY;

  try {
    const token = req.header(tokenHeaderKey);

    const verified = jwt.verify(token, jwtSecretKey1);
    if (verified) {
      return res.send("Successfully Verified");
    } else {
      // Access Denied
      return res.status(401).send(error);
    }
  } catch (error) {
    // Access Denied
    return res.status(401).send(error);
  }

  let jwtSecretKey = process.env.JWT_SECRET_KEY;
  let data = {
    time: Date(),
    userId: 12,
  };

  const token = jwt.sign(data, jwtSecretKey);

  res.send(token);

  User.findOne({ name: req.body.name })
    .then((result) => {
      result
        ? res.json(result)
        : res.status(401).json({ message: "not found" });
    })
    .catch((err) => res.status(500).json({ message: "Server error" }));
};

module.exports = { login, authUser };
