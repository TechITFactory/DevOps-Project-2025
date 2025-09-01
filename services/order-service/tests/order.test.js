const request = require("supertest");
const express = require("express");
const bodyParser = require("body-parser");
const { sequelize, Order } = require("../src/models/order");
const orderRoutes = require("../src/routes/orders");

const app = express();
app.use(bodyParser.json());
app.use("/orders", orderRoutes);

beforeAll(async () => {
  await sequelize.sync({ force: true });
});

describe("Order API", () => {
  test("should create an order", async () => {
    const res = await request(app).post("/orders").send({
      userId: 1,
      productId: 1,
      quantity: 2,
      price: 100
    });
    expect(res.statusCode).toBe(200);
    expect(res.body.quantity).toBe(2);
  });
});
