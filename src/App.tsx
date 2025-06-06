import { useEffect, useState } from "react";
import { HabitCard } from "./components/HabitCard";
import { Header } from "./components/Header";
import { NewHabitForm } from "./components/NewHabitForm";
import type { HabitProps } from "./interfaces/types";
import { EditHabitModal } from "./components/EditHabitModal";
import { ConfirmDeleteModal } from "./components/ConfirmDeleteModal";

function App() {
  const [habits, setHabits] = useState<HabitProps[]>([]);
  const [editingHabit, setEditingHabit] = useState<HabitProps | null>(null);
  const [deletingHabit, setDeletingHabit] = useState<HabitProps | null>(null);


  useEffect(() => {
    const storedHabits = localStorage.getItem("habits");
    if (storedHabits) {
      setHabits(JSON.parse(storedHabits));
    }
  }, []);

  const saveAndSetHabits = (newHabits: HabitProps[]) => {
    setHabits(newHabits);
    localStorage.setItem("habits", JSON.stringify(newHabits));
  };

  const handleAddHabit = (habit: HabitProps) => {
    const updatedHabits = [...habits, habit];
    saveAndSetHabits(updatedHabits);
  };

  const handleDeleteHabit = (id: number) => {
    const updatedHabits = habits.filter((habit) => habit.id !== id);
    saveAndSetHabits(updatedHabits);
  };

  const handleEditHabit = (updatedHabit: HabitProps) => {
    const updated = habits.map((habit) =>
      habit.id === updatedHabit.id ? updatedHabit : habit
    );
    saveAndSetHabits(updated);
    setEditingHabit(null);
  };

  const handleResetHabits = () => {
    const resetHabits = habits.map((habit) => ({
      ...habit,
      checkedDays: Array(7).fill(false),
    }));
    saveAndSetHabits(resetHabits);
  };

  const handleToggleDay = (habitId: number, dayIndex: number) => {
    const updatedHabits = habits.map((habit) => {
      if (habit.id === habitId) {
        const updatedDays = [...habit.checkedDays];
        updatedDays[dayIndex] = !updatedDays[dayIndex];
        return { ...habit, checkedDays: updatedDays };
      }
      return habit;
    });

    saveAndSetHabits(updatedHabits);
  };

  return (
    <main className="flex flex-col w-full max-w-[900px] mx-auto px-4">
      <div className="sticky top-0 bg-white z-50 sm:static sm:p-0">
        <Header onReset={handleResetHabits} />
        <NewHabitForm onAddHabit={handleAddHabit} />
      </div>
      <div className="flex-1 overflow-y-auto mt-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 w-full pb-8">
          {habits.map((habit) => (
            <HabitCard
              key={habit.id}
              habit={habit}
              onEditHabit={(habit) => setEditingHabit(habit)}
              onToggleDay={handleToggleDay}
              onRequestDelete={(habit) => setDeletingHabit(habit)}
            />
          ))}
        </div>
      </div>
      {editingHabit && (
        <EditHabitModal
          habit={editingHabit}
          onClose={() => setEditingHabit(null)}
          onSave={handleEditHabit}
        />
      )}
      {deletingHabit && (
        <ConfirmDeleteModal
            habitName={deletingHabit.name}
            onCancel={() => setDeletingHabit(null)}
            onConfirm={() => {
            handleDeleteHabit(deletingHabit.id);
            setDeletingHabit(null);
            }}
        />
      )}
    </main>
  );
}

export default App;
