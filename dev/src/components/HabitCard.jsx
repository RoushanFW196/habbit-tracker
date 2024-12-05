const HabitCard = ({ habit, onMarkComplete }) => (
    <div className="p-4 border rounded shadow">
      <h3 className="text-lg font-bold">{habit.name}</h3>
      <p>Streak: {habit.streak} days</p>
      <button
        onClick={() => onMarkComplete(habit.id)}
        className={`px-3 py-1 mt-2 ${
          habit.isComplete ? "bg-green-500" : "bg-gray-300"
        } rounded`}
      >
        {habit.isComplete ? "Completed" : "Mark as Complete"}
      </button>
    </div>
  );

  
  export default HabitCard;