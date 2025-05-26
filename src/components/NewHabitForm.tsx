import { useState } from "react"
import type { NewHabitFormProps } from "../interfaces/types"
import { colors } from "../utils/colors";

export const NewHabitForm = ({ onAddHabit }: NewHabitFormProps) => {
    const [habitName, setHabitName] = useState("");
    const [selectedColor, setSelectedColor] = useState<string | null>(null);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (!habitName.trim() || !selectedColor) return;

        onAddHabit({name: habitName, color: selectedColor});
        setHabitName("");
        setSelectedColor(null);
    }

    return (
        <form onSubmit={handleSubmit} className="flex flex-col items-center gap-3 border-2 p-5">
            <input className="w-full border-2 rounded-sm px-2" type="text" placeholder="New habit" value={habitName} onChange={(e) => setHabitName(e.target.value)} />
            <div className="flex w-full gap-5">
                <div className="flex justify-center cursor-pointer gap-4">
                    {colors.map((c) => (
                        <div key={c.value} className={`w-8 h-8 rounded-full hover:ring-2 ring-offset-1 cursor-pointer ${c.class} ${selectedColor === c.value ? "ring-2" : ""}`} onClick={() => setSelectedColor(c.value)} ></div>
                    ))}
                </div>
                <button type="submit" className="border-2 rounded-md px-6 cursor-pointer">Add +</button>
            </div>
        </form>
    )
}