// EXPRESS ROUTER
const express = require("express");
const userMiddleware = require("../middlewares/userMiddleware");
const userController = require("../controllers/userController");

const router = express.Router();

router.post("/login", userMiddleware.login, userController.sayHi);

module.exports = router;
