export interface HabitProps {
    id: number;
    name: string;
    color: string;
    checkedDays: boolean[]; 
}

export interface HabitCardProps {
    habit: HabitProps;
    onDeleteHabit: (id: number) => void;
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