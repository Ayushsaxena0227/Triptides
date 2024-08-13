const express = require("express");
const router = express.Router();
const {
  registeruser,
  login,
  getUser,
} = require("../controllers/authController");
const { authMiddleware } = require("../middleware/authMiddleware"); // Correct Import

router.post("/register", registeruser);
router.post("/login", login);
router.get("/user", authMiddleware, getUser);

module.exports = router;
