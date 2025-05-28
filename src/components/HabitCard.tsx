import type { HabitCardProps } from "../interfaces/types"
import { DayCheckbox } from "./DayCheckbox"
import { ProgressBar } from "./ProgressBar"
import { GiAlliedStar } from "react-icons/gi";


export const HabitCard = ({ habit, onDeleteHabit, onToggleDay }: HabitCardProps) => {
    const completedCount = habit.checkedDays.filter(Boolean).length;

    return (
        <div className="w-full px-1 group flex flex-col h-auto items-center m-2">
            <div className={`flex w-full ${habit.color} justify-between px-2 py-1 border-2 rounded-md`}>
                <h1 className="text-xl font-semibold">{habit.name}
                    {completedCount == 7 && <GiAlliedStar className="inline-block text-black ml-2 text-xl¿" /> } 
                </h1>
                <span className="invisible group-hover:visible cursor-pointer" onClick={()=>onDeleteHabit(habit.id)}>X</span>
            </div>
            <div className="w-full border- border-b-2 border-l-2 border-r-2 rounded-b-md">
                <DayCheckbox checkedDays={habit.checkedDays} onToggleDay={(dayIndex)=> onToggleDay(habit.id, dayIndex)}></DayCheckbox>
                <ProgressBar completed={completedCount} total={7}></ProgressBar>
            </div>
        </div>
    )
}