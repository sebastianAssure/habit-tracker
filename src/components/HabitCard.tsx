import type { HabitCardProps } from "../interfaces/types"
import { DayCheckbox } from "./DayCheckbox"
import { ProgressBar } from "./ProgressBar"

export const HabitCard = ({ habit, onDeleteHabit, onToggleDay }: HabitCardProps) => {
    const completedCount = habit.checkedDays.filter(Boolean).length;

    return (
        <div className="group flex flex-col w-100 h-45 items-center py-3">
            <div className={`flex w-full ${habit.color} justify-between px-2 border-2 rounded-md`}>
                <h1>{habit.name}
                    {completedCount == 7 ? <span className="pl-2">Estrella</span> : ""} 
                </h1>
                <span className="invisible group-hover:visible cursor-pointer" onClick={()=>onDeleteHabit(habit.id)}>X</span>
            </div>
            <div className="w-full border-b-2 border-l-2 border-r-2 rounded-b-md">
                <DayCheckbox checkedDays={habit.checkedDays} onToggleDay={(dayIndex)=> onToggleDay(habit.id, dayIndex)}></DayCheckbox>
                <ProgressBar completed={completedCount} total={7}></ProgressBar>
            </div>
        </div>
    )
}