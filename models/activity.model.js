const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Activity = sequelize.define("Activity", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, allowNull: false },
  day: { type: DataTypes.INTEGER, allowNull: false },
  isCompleted: { type: DataTypes.BOOLEAN, defaultValue: false },
});

module.exports = Activity;

