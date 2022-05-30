const fs = require("fs/promises");
const path = require("path");
const { v4 } = require("uuid");
const contactsPath = path.join(__dirname, "db/contacts.json");

const listContacts = async () => {
  const data = await fs.readFile(contactsPath);
  const contacts = JSON.parse(data);
  if (!contacts) {
    return null;
  }
  return contacts;
};

const updateContacts = async (contacts) => {
  await fs.writeFile(contactsPath, JSON.stringify(contacts));
};

const getContactById = async (contactId) => {
  const contacts = await listContacts();
  const result = contacts.find((item) => item.id === contactId);
  if (!result) {
    return null;
  }
  return result;
};

const removeContact = async (contactId) => {
  const contacts = await listContacts();
  const idx = contacts.findIndex((contact) => contact.id === contactId);
  if (idx === -1) {
    return null;
  }
  const newContacts = contacts.filter((_, index) => index !== idx);
  updateContacts(newContacts);
  return contacts[idx];
};

const addContact = async (name, email, phone) => {
  const contacts = await listContacts();
  const newContact = { id: v4(), name, email, phone };
  if (!newContact) {
    return null;
  }
  contacts.push(newContact);
  updateContacts(contacts);
  return newContact;
};

module.exports = { listContacts, getContactById, removeContact, addContact };
