require("dotenv").config();

module.exports = {
  PORT: process.env.PORT || 4001,
  DB_HOST: process.env.DB_HOST || "db",
  DB_USER: process.env.DB_USER || "postgres",
  DB_PASS: process.env.DB_PASS || "postgres",
  DB_NAME: process.env.DB_NAME || "products_db"
};
