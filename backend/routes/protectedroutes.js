// routes/protectedRoutes.js
const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/authmiddleware");

router.get("/protected", authMiddleware, (req, res) => {
  res.json({ message: "Welcome to the protected route!", user: req.user });
});

module.exports = router;
