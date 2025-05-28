import type { HabitCardProps } from "../interfaces"
import { DayCheckbox } from "./DayCheckbox"
import { ProgressBar } from "./ProgressBar"
import { GiAlliedStar } from "react-icons/gi";
import { FiEdit } from "react-icons/fi";


export const HabitCard = ({ habit, onEditHabit, onDeleteHabit, onToggleDay }: HabitCardProps) => {
    const completedCount = habit.checkedDays.filter(Boolean).length;

    return (
        <div className="max-w-[420px] w-full group flex flex-wrap items-center pt-2">
            <div className={`flex w-full ${habit.color} justify-between px-2 sm:px-4 py-1 border-2 rounded-md`}>
                <h1 className="text-base sm:text-lg lg:text-xl font-semibold font-patrick">{habit.name}
                    {completedCount == 7 && <GiAlliedStar className="inline-block text-black ml-2 text-xl" /> } 
                </h1>
                <div className="flex justify-end items-center gap-4">
                    <FiEdit className="visible md:invisible md:group-hover:visible cursor-pointer"
                    onClick={() => onEditHabit(habit)}
                    />
                    <span className="visible md:invisible md:group-hover:visible cursor-pointer" onClick={()=>onDeleteHabit(habit.id)}>X</span>
                </div>
            </div>
            <div className="w-full border- border-b-2 border-l-2 border-r-2 rounded-b-md">
                <DayCheckbox checkedDays={habit.checkedDays} onChangeDay={(dayIndex)=> onToggleDay(habit.id, dayIndex)}></DayCheckbox>
                <ProgressBar completed={completedCount} total={7}></ProgressBar>
            </div>
        </div>
    )
}