import React from 'react'

const HabbitForm = () => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
    <div className="bg-white p-6 rounded-lg w-96 shadow-lg">
      <h2 className="text-xl font-bold mb-4">Add New Habit</h2>
      <input 
        type="text" 
        placeholder="Habit Name" 
        className="w-full p-2 mb-4 border border-gray-300 rounded"
      />
      <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
        Save Habit
      </button>
    </div>
  </div>
  
  )
}

export default HabbitForm