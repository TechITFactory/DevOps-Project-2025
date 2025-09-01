const express = require("express");
const axios = require("axios");
const { Order } = require("../models/order");
const config = require("../config");

const router = express.Router();

// Create an order
router.post("/", async (req, res) => {
  try {
    const { userId, productId, quantity, price } = req.body;

    // Check user exists
    await axios.get(`${config.USER_SERVICE_URL}/user/profile`, {
      headers: { "Authorization": req.headers["authorization"] }
    });

    // Check product exists
    const productRes = await axios.get(`${config.PRODUCT_SERVICE_URL}/products/${productId}`);
    if (!productRes.data) return res.status(404).json({ error: "Product not found" });

    const totalPrice = price * quantity;

    const order = await Order.create({ userId, productId, quantity, totalPrice, status: "CREATED" });
    res.json(order);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Get all orders
router.get("/", async (req, res) => {
  const orders = await Order.findAll();
  res.json(orders);
});

// Update order status
router.put("/:id", async (req, res) => {
  const order = await Order.findByPk(req.params.id);
  if (!order) return res.status(404).json({ error: "Not found" });
  await order.update({ status: req.body.status });
  res.json(order);
});

module.exports = router;
