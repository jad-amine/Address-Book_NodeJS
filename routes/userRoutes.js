// EXPRESS ROUTER
const express = require("express");
const userMiddleware = require("../middlewares/userMiddleware");
const userController = require("../controllers/userController");

const router = express.Router();

router.get("/", userMiddleware.test, userController.sayHi);

module.exports = router;
