import { useState } from "react";
import type { EditHabitModalProps } from "../interfaces/types";
import { ColorPicker } from "./ColorPicker";

export const EditHabitModal = ({ habit, onClose, onSave }: EditHabitModalProps) => {
  const [habitName, setHabitName] = useState(habit.name);
  const [selectedColor, setSelectedColor] = useState(habit.color);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!habitName.trim() || !selectedColor) return;
    onSave({ ...habit, name: habitName, color: selectedColor });
  };

  return (
    <div className="fixed inset-0 backdrop-blur-sm bg-white/10 flex items-center justify-center z-50">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-md border-2 w-80 flex flex-col gap-4">
        <h2 className="text-xl font-bold">Edit habit</h2>
        <input
          type="text"
          className="border-2 p-1"
          placeholder="Edit habit"
          value={habitName}
          onChange={(e) => setHabitName(e.target.value)}
        />
        <ColorPicker selectedColor={selectedColor} onSelect={setSelectedColor} />
        <div className="flex justify-between mt-3">
          <button type="button" onClick={onClose} className="border-2 text-red-600 px-2 py-1 rounded cursor-pointer">Cancel</button>
          <button type="submit" className="border-2 text-black px-2 py-1 rounded cursor-pointer">Save</button>
        </div>
      </form>
    </div>
  );
};
