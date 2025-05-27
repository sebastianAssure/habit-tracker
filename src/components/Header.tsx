import type { HeaderProps } from "../interfaces/types"

export const Header = ({onReset}: HeaderProps) => {
    return (
        <div className="flex justify-center p-5 gap-5 border-2">
            <h1 className="text-4xl font-bold">Habit Tracker</h1>
            <button className="border-2 rounded-md px-6 cursor-pointer" onClick={onReset}>Reset</button>
        </div>
    )
}