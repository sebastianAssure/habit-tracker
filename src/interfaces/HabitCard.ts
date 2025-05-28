import type { HabitProps } from "./Habit";

export interface HabitCardProps {
    habit: HabitProps;
    onEditHabit: (habit: HabitProps) => void;
    onDeleteHabit: (id: number) => void;
    onToggleDay: (habitId: number, dayIndex: number) => void;
}