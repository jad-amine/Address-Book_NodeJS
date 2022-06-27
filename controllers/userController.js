const User = require("../models/User");
const bcrypt = require("bcrypt");

const sayHi = async (req, res) => {
  res
    .status(200)
    .send({
      message: "Request passed the jwt auth middleware",
      token: req.dataFromMiddleware,
    });

    // OR: res.locals.token
};

module.exports = { sayHi };