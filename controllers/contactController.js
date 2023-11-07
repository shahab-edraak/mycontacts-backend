// @desc Get contacts
// @route GET /api/contacts
// @access public
const getContacts = (req, res) => {
  res.status(200).json({ message: "get all contacts" });
};

// @desc Get contact
// @route GET /api/contacts/:id
// @access public
const getContact = (req, res) => {
  res.status(200).json({ message: `Get contact for ${req.params.id}` });
};

// @desc Create New contact
// @route POST /api/contacts
// @access public
const createContact = (req, res) => {
  res.status(200).json({ message: "Create Contact" });
};

// @desc Update contact
// @route PUT /api/contacts/:id
// @access public
const updateContact = (req, res) => {
  res.status(200).json({ message: `Update contact for ${req.params.id}` });
};

// @desc Delete contact
// @route DELETE /api/contacts/:id
// @access public
const deleteContact = (req, res) => {
  res.status(200).json({ message: `Delete contact for ${req.params.id}` });
};

module.exports = {
  getContacts,
  getContact,
  createContact,
  updateContact,
  deleteContact,
};