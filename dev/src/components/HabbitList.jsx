const HabitList = ({ habits, onMarkComplete }) => (
    <div className="grid gap-4 grid-cols-1 md:grid-cols-3">
      {habits.map((habit) => (
        <HabitCard key={habit.id} habit={habit} onMarkComplete={onMarkComplete} />
      ))}
    </div>
  );

  
  export default HabitList;