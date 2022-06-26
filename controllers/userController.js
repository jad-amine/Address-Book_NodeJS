const User = require("../models/User");
const bcrypt = require("bcrypt");

const sayHi = async (req, res) => {
  const saltRounds = 10;
  const user = new User(req.body);

  bcrypt.hash(user.password, saltRounds, async function (err, hash) {
    user.password = hash;
    await user.save().then((result) => {
      res.json({ result });
    }).catch((err) => {
      console.log(err);
      res.status(401).send({message: 'Duplicate user'})
    })
  });
};

module.exports = { sayHi };
