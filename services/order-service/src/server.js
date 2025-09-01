const express = require("express");
const bodyParser = require("body-parser");
const { sequelize } = require("./models/order");
const orderRoutes = require("./routes/orders");
const config = require("./config");

const app = express();
app.use(bodyParser.json());
app.use("/orders", orderRoutes);

sequelize.sync().then(() => {
  app.listen(config.PORT, () => {
    console.log(`Order Service running on port ${config.PORT}`);
  });
});
