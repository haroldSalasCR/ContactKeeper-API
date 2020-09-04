const express = require("express");
const router = express.Router();

// @route   GET api/contact
// @desc    Get all contacts
// @access  Private
router.get("/", (req, res) => {
  res.send("List of contacts");
});

// @route   POST api/contact
// @desc    Add new contact
// @access  Private
router.post("/", (req, res) => {
  res.send("Contact added");
});

// @route   PUT api/contact/:id
// @desc    Update a contact
// @access  Private
router.put("/", (req, res) => {
  res.send("Contact Updated");
});

// @route   DELETE api/contact/:id
// @desc    Delete a contact
// @access  Private
router.delete("/", (req, res) => {
  res.send("contact deleted");
});

module.exports = router;
