const Contact = require("../models/Contact");

const getContacts = async (req, res) => {
  const contacts = await Contact.find();
  res.json({ contacts: contacts });
};

const addContact = async (req, res) => {
  const contact = new Contact(req.body);
  try {
    await contact.save().then((result) => {
      return res.status(200).json({ result });
    });
  } catch (err) {
    console.log(err);
    return res.status(400).json({ message: 'Duplicate User' })
  }
};

module.exports = { getContacts, addContact };
