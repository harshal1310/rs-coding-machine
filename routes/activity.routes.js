const express = require("express");
const { getActivities, markComplete } = require("../controllers/activity.controller");

const router = express.Router();

router.get("/activities", getActivities);      // Get activities for days 14-21
router.patch("/activities/:id", markComplete); // Mark activity as completed
//router.post("/activities", createActivity);    
module.exports = router;

