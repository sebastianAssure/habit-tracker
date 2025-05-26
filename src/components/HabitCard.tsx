import type { Habit } from "../interfaces/types"
import { DayCheckbox } from "./DayCheckbox"
import { ProgressBar } from "./ProgressBar"

export const HabitCard = ({habit}: { habit: Habit}) => {
    return (
        <div className="flex flex-col w-100 h-45 items-center py-3">
            <div className={`flex w-full ${habit.color} justify-between px-2 border-2 rounded-md`}>
                <h1>{habit.name}</h1>
                <a href="">X</a>
            </div>
            <div className="w-full border-b-2 border-l-2 border-r-2 rounded-b-md">
                <DayCheckbox></DayCheckbox>
                <ProgressBar></ProgressBar>
            </div>
        </div>
    )
}