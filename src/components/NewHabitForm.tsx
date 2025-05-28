import { useState } from "react"
import type { NewHabitFormProps } from "../interfaces"
import { ColorPicker } from "./ColorPicker";

export const NewHabitForm = ({ onAddHabit }: NewHabitFormProps) => {
    const [habitName, setHabitName] = useState("");
    const [selectedColor, setSelectedColor] = useState<string | null>(null);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (!habitName.trim() || !selectedColor) return;

        onAddHabit({id: Date.now(), name: habitName, color: selectedColor, checkedDays: Array(7).fill(false)});
        setHabitName("");
        setSelectedColor(null);
    }

    return (
        <form onSubmit={handleSubmit} className="w-full flex flex-col items-center gap-3 sm:gap-5 p-3">
            <input className="w-full border-2 p-1 font-patrick" type="text" placeholder="New habit" value={habitName} onChange={(e) => setHabitName(e.target.value)} />
            <div className="flex flex-wrap justify-between w-full gap-5">
                <ColorPicker selectedColor={selectedColor} onSelect={setSelectedColor} />
                <button type="submit" className="border-2 rounded-md px-5 py-1 text-sm font-patrick cursor-pointer">Add +</button>
            </div>
        </form>
    )
}