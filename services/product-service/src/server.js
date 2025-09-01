const express = require("express");
const bodyParser = require("body-parser");
const { sequelize } = require("./models/product");
const productRoutes = require("./routes/products");
const config = require("./config");

const app = express();
app.use(bodyParser.json());
app.use("/products", productRoutes);

sequelize.sync().then(() => {
  app.listen(config.PORT, () => {
    console.log(`Product Service running on port ${config.PORT}`);
  });
});
