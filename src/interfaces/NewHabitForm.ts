import type { HabitProps } from "./Habit";

export interface NewHabitFormProps {
    onAddHabit: (habit: HabitProps) => void;
}