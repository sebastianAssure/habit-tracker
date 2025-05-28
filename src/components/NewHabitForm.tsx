import { useState } from "react"
import type { NewHabitFormProps } from "../interfaces/types"
import { colors } from "../utils/colors";

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
        <form onSubmit={handleSubmit} className="w-full flex flex-col items-center gap-3 p-3">
            <input className="w-full max-w-[600px] border-2 p-1" type="text" placeholder="New habit" value={habitName} onChange={(e) => setHabitName(e.target.value)} />
            <div className="flex flex-wrap justify-between w-full gap-5">
                <div className="flex flex-wrap justify-center cursor-pointer gap-4">
                    {colors.map((c) => (
                        <div key={c.class} className={`w-8 h-8 rounded-full hover:ring-2 ring-offset-1 cursor-pointer ${c.class} ${selectedColor === c.class ? "ring-2" : ""}`} onClick={() => setSelectedColor(c.class)} ></div>
                    ))}
                </div>
                <button type="submit" className="border-2 rounded-md px-5 py-1 text-sm cursor-pointer">Add +</button>
            </div>
        </form>
    )
}