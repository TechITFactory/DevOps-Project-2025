const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { sequelize, Order } = require("./models/order");
const jwt = require("jsonwebtoken");

const app = express();
app.use(cors());   // ✅ allow frontend
app.use(bodyParser.json());

// Middleware: verify JWT
function auth(req, res, next) {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) return res.status(401).json({ error: "Unauthorized" });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET || "supersecret");
    req.user = decoded;
    next();
  } catch {
    res.status(401).json({ error: "Invalid token" });
  }
}

// Create Order
app.post("/orders", auth, async (req, res) => {
  try {
    const { items } = req.body;
    if (!items || !Array.isArray(items)) {
      return res.status(400).json({ error: "Invalid items" });
    }
    const order = await Order.create({
      userId: req.user.id,
      items: JSON.stringify(items),
    });
    res.json(order);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get User Orders
app.get("/orders", auth, async (req, res) => {
  try {
    const orders = await Order.findAll({ where: { userId: req.user.id } });
    res.json(orders);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

sequelize.sync().then(() => {
  app.listen(4002, () => console.log("✅ Order Service running on port 4002"));
});
