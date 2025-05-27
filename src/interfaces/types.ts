export interface HabitProps {
    id: number;
    name: string;
    color: string;
    checkedDays: boolean[]; 
}

export interface HabitCardProps {
    habit: HabitProps;
    onDeleteHabit: (id: number) => void;
    onToggleDay: (habitId: number, dayIndex: number) => void;
}

export interface HeaderProps {
    onReset: () => void;
}

export interface NewHabitFormProps {
    onAddHabit: (habit: HabitProps) => void;
}

export interface DayCheckBoxProps {
    checkedDays: boolean[];
    onToggleDay: (index: number) => void;
};

export interface ProgressBarProps {
    completed: number;
    total: number;
};