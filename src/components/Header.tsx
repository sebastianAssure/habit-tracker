import type { HeaderProps } from "../interfaces/types"

export const Header = ({onReset}: HeaderProps) => {
    return (
        <div className="w-full flex flex-wrap justify-between p-3 gap-5">
            <h1 className="text-4xl font-bold">Habit Tracker</h1>
            <button className="border-2 rounded-md px-6 text-md cursor-pointer" onClick={onReset}>Reset</button>
        </div>
    )
}