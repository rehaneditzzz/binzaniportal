const express = require("express");
const { signupUser, loginUser } = require("../controllers/authController");
const router = express.Router();

// Register user
router.post("/signup", signupUser);

// Login user
router.post("/login", loginUser);

module.exports = router;
