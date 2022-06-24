const User = require("../models/User");

const sayHi = async (req, res) => {
  const user = new User({
    name: "jad",
    email: "jad@sef.com",
    password: "test1234",
  });

  await user
    .save()
    .then((result) => {
      console.log(result);
      res.json({ result });
    })
    .catch((err) => {
      console.log("db error", err);
    });
};

module.exports = { sayHi };
