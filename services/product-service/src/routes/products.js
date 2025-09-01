const express = require("express");
const { Product } = require("../models/product");

const router = express.Router();

// Create product
router.post("/", async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.json(product);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Get all products
router.get("/", async (req, res) => {
  const products = await Product.findAll();
  res.json(products);
});

// Get one product
router.get("/:id", async (req, res) => {
  const product = await Product.findByPk(req.params.id);
  if (!product) return res.status(404).json({ error: "Not found" });
  res.json(product);
});

// Update product
router.put("/:id", async (req, res) => {
  const product = await Product.findByPk(req.params.id);
  if (!product) return res.status(404).json({ error: "Not found" });
  await product.update(req.body);
  res.json(product);
});

// Delete product
router.delete("/:id", async (req, res) => {
  const product = await Product.findByPk(req.params.id);
  if (!product) return res.status(404).json({ error: "Not found" });
  await product.destroy();
  res.json({ message: "Deleted" });
});

module.exports = router;
