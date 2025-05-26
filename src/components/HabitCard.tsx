import { DayCheckbox } from "./DayCheckbox"
import { ProgressBar } from "./ProgressBar"

export const HabitCard = () => {
    return (
        <div className="flex flex-col w-100 h-45 bg-amber-200 items-center py-3">
            <div className="flex w-full bg-red-400 justify-between px-2 border-2 rounded-md">
                <h1>Read</h1>
                <a href="">X</a>
            </div>
            <div className="w-full border-b-2 border-l-2 border-r-2 rounded-b-md">
                <DayCheckbox></DayCheckbox>
                <ProgressBar></ProgressBar>
            </div>
        </div>
    )
}