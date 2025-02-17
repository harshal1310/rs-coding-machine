require("dotenv").config();
const { Sequelize } = require("sequelize");

// PostgreSQL Connection
const sequelize = new Sequelize(
  process.env.DB_NAME, 
  process.env.DB_USER, 
  process.env.DB_PASS, 
  {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: "postgres",
    logging: false, // Disable logging for cleaner console output
  }
);

// Test connection
sequelize
  .authenticate()
  .then(() => console.log(" Database connected successfully"))
  .catch((err) => console.error("Database connection error:", err));

module.exports = sequelize;

