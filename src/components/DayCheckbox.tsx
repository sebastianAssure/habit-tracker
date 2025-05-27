import type { DayCheckBoxProps } from "../interfaces/types";

export const DayCheckbox = ({checkedDays, setCheckedDays}: DayCheckBoxProps) => {
    const days = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];

    const toggleDay = (index: number) => {
        const updated = [...checkedDays];
        updated[index] = !updated[index];
        setCheckedDays(updated);
    }

    return (
        <div className="w-full grid grid-cols-7 gap-2 px-2 py-4">
            {days.map((day, index) => (
                <div key={index} className="flex flex-col items-center gap-1">
                    <p className="text-sm">{day}</p>
                    <input className="cursor-pointer" type="checkbox" checked={checkedDays[index]} onChange={() => toggleDay(index)} />
                </div>
            ))}
        </div>
    );
};