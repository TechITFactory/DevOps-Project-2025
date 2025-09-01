require("dotenv").config();

module.exports = {
  PORT: process.env.PORT || 4002,
  DB_HOST: process.env.DB_HOST || "db",
  DB_USER: process.env.DB_USER || "postgres",
  DB_PASS: process.env.DB_PASS || "postgres",
  DB_NAME: process.env.DB_NAME || "orders_db",
  USER_SERVICE_URL: process.env.USER_SERVICE_URL || "http://localhost:4000",
  PRODUCT_SERVICE_URL: process.env.PRODUCT_SERVICE_URL || "http://localhost:4001"
};
