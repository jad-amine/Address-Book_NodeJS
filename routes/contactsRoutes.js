const express = require("express");
const contactsController = require("../controllers/contactsController");
const userMiddleware = require("../middlewares/userMiddleware");

const router = express.Router();

router.get("/", userMiddleware.authUser, contactsController.getContacts);

router.post("/",userMiddleware.authUser, contactsController.addContact);

module.exports = router;
