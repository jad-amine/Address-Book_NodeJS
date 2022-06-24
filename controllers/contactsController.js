const Contact = require("../models/Contact");

const getContacts = async (req, res) => {
  const contacts = await Contact.find();
  res.json({ contacts: contacts });
};

const addContact = async (req, res) => {
  const contact = new Contact(req.body);
  await contact.save().then((result) => {
    return res.json({ result });
  });
};

module.exports = { getContacts, addContact };
