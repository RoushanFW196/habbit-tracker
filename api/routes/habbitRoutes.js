const express = require("express");
const Habit = require("../models/habit.model.js");

const router = express.Router();

// Create Habit
router.post("/", async (req, res) => {
    const { name, user } = req.body;
    try {
        const habit = new Habit({ name, user });
        await habit.save();
        res.status(201).json(habit);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Get Habits for User
router.get("/:userId", async (req, res) => {
    try {
        const habits = await Habit.find({ user: req.params.userId });
        res.status(200).json(habits);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
