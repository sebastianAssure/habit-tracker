import type { HabitProps } from "./habit";

export interface NewHabitFormProps {
    onAddHabit: (habit: HabitProps) => void;
}