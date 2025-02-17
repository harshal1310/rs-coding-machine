const express = require("express");
const cors = require("cors");
require("dotenv").config();
const sequelize = require("./config/database");
const activityRoutes = require("./routes/activity.routes");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api", activityRoutes);

const PORT = process.env.PORT || 5000;

// Sync Database & Start Server
sequelize.sync().then(() => {
  app.listen(PORT, () => console.log(` Server running on port ${PORT}`));
});

