import type { DayCheckBoxProps } from "../interfaces/types";

export const DayCheckbox = ({checkedDays, onChangeDay}: DayCheckBoxProps) => {
    const days = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];

    return (
        <div className="w-full grid grid-cols-7 gap-2 px-2 py-4">
            {days.map((day, index) => (
                <div key={index} className="flex flex-col items-center gap-1 text-sm font-medium font-patrick">
                    <label>{day}</label>
                    <input className="cursor-pointer" type="checkbox" checked={checkedDays[index]} onChange={() => onChangeDay(index)} />
                </div>
            ))}
        </div>
    );
};