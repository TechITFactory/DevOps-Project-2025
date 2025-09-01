const express = require("express");
const jwt = require("jsonwebtoken");
const { User } = require("../models/user");
const config = require("../config");

const router = express.Router();

function authMiddleware(req, res, next) {
  const header = req.headers["authorization"];
  if (!header) return res.status(401).json({ error: "Missing token" });

  const token = header.split(" ")[1];
  try {
    const decoded = jwt.verify(token, config.JWT_SECRET);
    req.userId = decoded.id;
    next();
  } catch (err) {
    res.status(403).json({ error: "Invalid token" });
  }
}

router.get("/profile", authMiddleware, async (req, res) => {
  const user = await User.findByPk(req.userId, { attributes: ["id", "username"] });
  res.json(user);
});

module.exports = router;
