export interface Habit {
    name: string;
    color: string;
}

export interface NewHabitFormProps {
    onAddHabit: (habit: Habit) => void;
}