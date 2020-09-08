const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator/check");

const auth = require("../Middleware/auth");
const User = require("../models/User");
const Contact = require("../models/Contact");

// @route   GET api/contact
// @desc    Get all contacts
// @access  Private
router.get("/", auth, async (req, res) => {
  try {
    const contacts = await Contact.find({ user: req.user.id }).sort({
      date: -1,
    });
    res.json(contacts);
  } catch (err) {
    console.log(err);
    res.status(500).send("Server Error!");
  }
});

// @route   POST api/contact
// @desc    Add new contact
// @access  Private
router.post(
  "/",
  [auth, [check("name", "Name is required").not().isEmpty()]],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ msg: errors.array() });
    }

    const { name, email, phone, type } = req.body;

    try {
      const newContact = new Contact({
        name,
        email,
        phone,
        type,
        user: req.user.id,
      });

      const contact = await newContact.save();
      res.json(contact);
    } catch (err) {
      console.log(err.message);
      res.status(500).json({ msg: "Server ERROR!" });
    }
  }
);

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
