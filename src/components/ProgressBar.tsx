import type { ProgressBarProps } from "../interfaces";

export const ProgressBar = ({completed, total}: ProgressBarProps) => {
    const percentage = (completed / total) * 100;

    return (
        <div className="flex flex-wrap justify-around py-4 px-2 gap-2">
            <div className="w-40 bg-stone-200 border-1 block overflow-hidden h-6">
                <div className="h-full w-full rounded-none bg-green-500" style={{ width: `${percentage}%` }}></div>
            </div>
            <p className="font-patrick">{completed}/{total} days completed</p>
        </div>
    )
}