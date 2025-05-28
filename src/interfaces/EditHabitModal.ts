import type { HabitProps } from "./Habit";

export interface EditHabitModalProps {
  habit: HabitProps;
  onClose: () => void;
  onSave: (habit: HabitProps) => void;
}