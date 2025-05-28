export interface ColorPickerProps {
  selectedColor: string | null;
  onSelect: (color: string) => void;
}
