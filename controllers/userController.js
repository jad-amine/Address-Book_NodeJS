const sayHi = (req, res) => {
  res.json({ message: "from userController" });
};

module.exports = { sayHi };
