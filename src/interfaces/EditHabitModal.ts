import type { HabitProps } from "./habit";

export interface EditHabitModalProps {
  habit: HabitProps;
  onClose: () => void;
  onSave: (habit: HabitProps) => void;
}