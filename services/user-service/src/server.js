const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors"); 
const { sequelize } = require("./models/user");
const authRoutes = require("./routes/auth");
const profileRoutes = require("./routes/profile");
const config = require("./config");

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use("/auth", authRoutes);
app.use("/user", profileRoutes);

sequelize.sync().then(() => {
  app.listen(config.PORT, () => {
    console.log(`User Service running on port ${config.PORT}`);
  });
});

