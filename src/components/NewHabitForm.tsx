import { useState } from "react";
import type { NewHabitFormProps } from "../interfaces";
import { ColorPicker } from "./ColorPicker";

export const NewHabitForm = ({ onAddHabit }: NewHabitFormProps) => {
  const [habitName, setHabitName] = useState("");
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [errors, setErrors] = useState<{ name?: string; color?: string }>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors: { name?: string; color?: string } = {};
    if (!habitName.trim()) newErrors.name = "Please enter a habit name.";
    if (!selectedColor) newErrors.color = "Please select a color.";

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) return;

    if (!habitName.trim() || !selectedColor) return;

    onAddHabit({
      id: Date.now(),
      name: habitName,
      color: selectedColor,
      checkedDays: Array(7).fill(false),
    });
    
    setHabitName("");
    setSelectedColor(null);
    setErrors({});
  };

  return (
    <form onSubmit={handleSubmit} className="w-full flex flex-col gap-3 p-3 sm:gap-5">
      <div className="flex flex-col w-full">
        <input
          className={`w-full border-2 p-1 font-patrick rounded ${
            errors.name ? "border-red-600" : ""
          }`}
          type="text"
          placeholder="New habit"
          value={habitName}
          onChange={(e) => setHabitName(e.target.value)}
        />
        <p className={`${errors.name ? "flex text-red-600 text-sm min-h-[1rem] mt-1" : "hidden"}`}>
          {errors.name}
        </p>
      </div>

      <div className="flex justify-between items-center w-full">
        <ColorPicker
          selectedColor={selectedColor}
          onSelect={setSelectedColor}
        />
        <button
          type="submit"
          className="border-2 rounded-md px-5 py-1 text-sm font-patrick cursor-pointer"
        >
          Add +
        </button>
      </div>

      <p className={`${errors.name ? "flex text-red-600 text-sm min-h-[1rem] mt-1" : "hidden"}`}>
        {errors.color}
      </p>
    </form>
  );
};
