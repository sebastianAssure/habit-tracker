export interface HabitProps {
    name: string;
    color: string;
}

export interface NewHabitFormProps {
    onAddHabit: (habit: HabitProps) => void;
}

export interface DayCheckBoxProps {
    checkedDays: boolean[];
    setCheckedDays: (days: boolean[]) => void;
};

export interface ProgressBarProps {
    completed: number;
    total: number;
};