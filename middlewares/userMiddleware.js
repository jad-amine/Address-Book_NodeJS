const bcrypt = require("bcrypt");
const User = require("../models/User");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

const login = (req, res, next) => {
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

module.exports = { login };
