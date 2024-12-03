const mongoose = require("mongoose");

const HabitSchema = new mongoose.Schema({
    name: { type: String, required: true },
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    streak: { type: Number, default: 0 },
    history: [{ date: String, completed: Boolean }], // Tracks daily completion
});

module.exports = mongoose.model("Habit", HabitSchema);
