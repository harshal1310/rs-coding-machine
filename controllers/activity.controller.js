const { Op } = require("sequelize");
const Activity = require("../models/activity.model");

// Fetch activities for days 14-21
exports.getActivities = async (req, res) => {
  try {
    const activities = await Activity.findAll({
      where: { day: { [Op.between]: [14, 21] } },
    });
    res.json(activities);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Mark an activity as completed
exports.markComplete = async (req, res) => {
  try {
    const { id } = req.params;
    const activity = await Activity.findByPk(id);

    if (!activity) return res.status(404).json({ error: "Activity not found" });

    activity.isCompleted = true;
    await activity.save();

    res.json({ message: "Activity marked as completed" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

