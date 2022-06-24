const express = require("express");
const contactsController = require("../controllers/contactsController");

const router = express.Router();

router.get("/", contactsController.getContacts);

router.post("/", contactsController.addContact);

module.exports = router;
