import React from 'react'

const Dashboard = () => {
  return (
    <div className="p-4 bg-gray-100 min-h-screen">
    <h1 className="text-3xl font-bold text-center mb-6">Your Habits</h1>
    <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mb-4">
      Add Habit
    </button>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {habits.map((habit) => (
        <div key={habit.id} className="bg-white p-4 rounded shadow">
          <h2 className="text-xl font-bold">{habit.name}</h2>
          <p className="text-gray-500">Streak: {habit.streak} days</p>
          <button 
            className="mt-2 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
            onClick={() => markComplete(habit.id)}
          >
            Mark Complete
          </button>
        </div>
      ))}
    </div>
  </div>
  
  )
}

export default Dashboard