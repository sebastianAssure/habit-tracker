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

  const handleResetHabits = () => {
    const resetHabits = habits.map(habit => ({...habit, checkedDays: Array(7).fill(false)}));
    setHabits(resetHabits);
    localStorage.setItem("habits", JSON.stringify(resetHabits));
  }

  const handleToggleDay = (habitId: number, dayIndex: number) => {
    const updatedHabits = habits.map(habit => {
      if (habit.id === habitId) {
        const updatedDays = [...habit.checkedDays];
        updatedDays[dayIndex] = !updatedDays[dayIndex];
        return { ...habit, checkedDays: updatedDays };
      }
      return habit;
    });

    setHabits(updatedHabits);
    localStorage.setItem("habits", JSON.stringify(updatedHabits));
  };

  return (
    <main className="flex flex-col items-center min-h-screen">
      <Header onReset={handleResetHabits}/>
      <NewHabitForm onAddHabit={handleAddHabit} />
      {habits.map((habit) => (
        <HabitCard key={habit.id} habit={habit} onToggleDay={handleToggleDay} onDeleteHabit={handleDeleteHabit}/>
      ))}
    </main>
  );
}

export default App;
