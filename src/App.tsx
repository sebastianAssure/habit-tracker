import { useState } from "react";
import "./App.css";
import { HabitCard } from "./components/HabitCard";
import { Header } from "./components/Header";
import { NewHabitForm } from "./components/NewHabitForm";
import type { Habit } from "./interfaces/types";

function App() {
  const [habits, setHabits] = useState<Habit[]>([]);

  const handleAddHabit = (habit: Habit) => {
    console.log(habit);
    setHabits((prev) => [...prev, habit]);
  };

  return (
    <main className="flex flex-col items-center min-h-screen">
      <Header/>
      <NewHabitForm onAddHabit={handleAddHabit} />
      {habits.map((habit, index) => (
        <HabitCard key={index} habit={habit}/>
      ))}
    </main>
  );
}

export default App;
