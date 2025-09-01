const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize(
  process.env.DB_NAME || "orders_db",
  process.env.DB_USER || "postgres",
  process.env.DB_PASS || "postgres",
  {
    host: process.env.DB_HOST || "db",
    dialect: "postgres",
  }
);

const Order = sequelize.define("Order", {
  userId: { type: DataTypes.INTEGER, allowNull: false },
  items: { type: DataTypes.TEXT, allowNull: false }, // store as JSON string
});

module.exports = { sequelize, Order };
