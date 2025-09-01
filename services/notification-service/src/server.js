const express = require("express");
const bodyParser = require("body-parser");
const notifyRoutes = require("./routes/notify");
const config = require("./config");

const app = express();
app.use(bodyParser.json());
app.use("/notify", notifyRoutes);

app.listen(config.PORT, () => {
  console.log(`Notification Service running on port ${config.PORT}`);
});
