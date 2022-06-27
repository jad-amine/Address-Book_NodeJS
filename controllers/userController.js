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

//  =============== bycrypt hashing ==================
// const saltRounds = 10;
// const user = new User(req.body);

// bcrypt.hash(user.password, saltRounds, async function (err, hash) {
//   user.password = hash;
//   await user.save().then((result) => {
//     res.json({ result });
//   }).catch((err) => {
//     console.log(err);
//     res.status(401).send({message: 'Duplicate user'})
//   })
// });
