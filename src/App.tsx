import { useEffect, useState } from "react";
import "./App.css";
import { HabitCard } from "./components/HabitCard";
import { Header } from "./components/Header";
import { NewHabitForm } from "./components/NewHabitForm";
import type { HabitProps } from "./interfaces/types";

function App() {
  const [habits, setHabits] = useState<HabitProps[]>([]);

  useEffect(() => {
    const storedHabits = localStorage.getItem("habits");
    if (storedHabits) {
      setHabits(JSON.parse(storedHabits));
    }
  }, []);

  const handleAddHabit = (habit: HabitProps) => {
    const updateHabits = [...habits, habit]
    setHabits(updateHabits);
    localStorage.setItem("habits", JSON.stringify(updateHabits));
  };

  const handleDeleteHabit = (id: number) => {
    const updatedHabits = habits.filter(habit => habit.id !== id);
    setHabits(updatedHabits);
    localStorage.setItem("habits", JSON.stringify(updatedHabits));
  }

  return (
    <main className="flex flex-col items-center min-h-screen">
      <Header/>
      <NewHabitForm onAddHabit={handleAddHabit} />
      {habits.map((habit) => (
        <HabitCard key={habit.id} habit={habit} onDelete={handleDeleteHabit}/>
      ))}
    </main>
  );
}

export default App;
