const User = require("../models/User");

const sayHi = (req, res) => {
  console.log("from controller");
  res.json({ message: "from userController" });
};

module.exports = { sayHi };
