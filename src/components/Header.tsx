import type { HeaderProps } from "../interfaces/types"

export const Header = ({onReset}: HeaderProps) => {
    return (
        <div className="w-full flex flex-wrap justify-between p-3 gap-3">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-patrick">Habit Tracker</h1>
            <button className="border-2 rounded-md px-5 text-sm sm:text-md lg:text-lg font-patrick cursor-pointer" onClick={onReset}>Reset</button>
        </div>
    )
}