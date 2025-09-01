const request = require("supertest");
const express = require("express");
const bodyParser = require("body-parser");
const { sequelize, Product } = require("../src/models/product");
const productRoutes = require("../src/routes/products");

const app = express();
app.use(bodyParser.json());
app.use("/products", productRoutes);

beforeAll(async () => {
  await sequelize.sync({ force: true });
});

describe("Product API", () => {
  test("should create a product", async () => {
    const res = await request(app).post("/products").send({
      name: "Laptop",
      description: "Powerful gaming laptop",
      price: 1500,
      stock: 5
    });
    expect(res.statusCode).toBe(200);
    expect(res.body.name).toBe("Laptop");
  });
});
