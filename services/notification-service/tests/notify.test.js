const request = require("supertest");
const express = require("express");
const bodyParser = require("body-parser");
const notifyRoutes = require("../src/routes/notify");

const app = express();
app.use(bodyParser.json());
app.use("/notify", notifyRoutes);

describe("Notification API", () => {
  test("should simulate push notification", async () => {
    const res = await request(app).post("/notify/push").send({
      token: "dummy-token",
      message: "Hello!"
    });
    expect(res.statusCode).toBe(200);
    expect(res.body.status).toBe("Push simulated");
  });
});
