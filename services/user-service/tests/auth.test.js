const request = require("supertest");
const express = require("express");
const bodyParser = require("body-parser");
const { sequelize } = require("../src/models/user");
const authRoutes = require("../src/routes/auth");

const app = express();
app.use(bodyParser.json());
app.use("/auth", authRoutes);

beforeAll(async () => {
  await sequelize.sync({ force: true });
});

describe("Auth API", () => {
  test("should register a new user", async () => {
    const res = await request(app).post("/auth/register").send({
      username: "testuser",
      password: "password123"
    });
    expect(res.statusCode).toBe(200);
    expect(res.body.username).toBe("testuser");
  });

  test("should login a user", async () => {
    const res = await request(app).post("/auth/login").send({
      username: "testuser",
      password: "password123"
    });
    expect(res.statusCode).toBe(200);
    expect(res.body.token).toBeDefined();
  });
});
