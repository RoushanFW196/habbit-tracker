import React from "react";

const WelComeUser = ({ totalHabits, completedToday, longestStreak }) => (
  <div className="flex gap-4 p-4">
  <h1>welcome back , user</h1>
  <p>{ new Date()}</p>
    <div className="bg-gray-100 p-4 rounded">
      <p>Total Habits</p>
      <h2>{totalHabits}</h2>
    </div>
    <div className="bg-gray-100 p-4 rounded">
      <p>Completed Today</p>
      <h2>{completedToday}</h2>
    </div>
    <div className="bg-gray-100 p-4 rounded">
      <p>Longest Streak</p>
      <h2>{longestStreak} days</h2>
    </div>
  </div>
);

export default WelComeUser;   
