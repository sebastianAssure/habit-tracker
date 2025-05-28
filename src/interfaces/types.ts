export interface ColorPickerProps {
  selectedColor: string | null;
  onSelect: (color: string) => void;
}

export interface DayCheckBoxProps {
    checkedDays: boolean[];
    onChangeDay: (index: number) => void;
};

export interface EditHabitModalProps {
  habit: HabitProps;
  onClose: () => void;
  onSave: (habit: HabitProps) => void;
}

export interface HabitProps {
    id: number;
    name: string;
    color: string;
    checkedDays: boolean[]; 
}

export interface HabitCardProps {
    habit: HabitProps;
    onEditHabit: (habit: HabitProps) => void;
    onRequestDelete: (habit: HabitProps) => void;
    onToggleDay: (habitId: number, dayIndex: number) => void;
}

export interface HeaderProps {
    onReset: () => void;
}

export interface NewHabitFormProps {
    onAddHabit: (habit: HabitProps) => void;
}

export interface ProgressBarProps {
    completed: number;
    total: number;
};

export interface ConfirmDeleteModalProps {
    habitName: string;
    onCancel: () => void;
    onConfirm: () => void;
}