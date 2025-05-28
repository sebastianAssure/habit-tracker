import type { ColorPickerProps } from "../interfaces/types";
import { colors } from "../utils/colors";

export const ColorPicker = ({ selectedColor, onSelect }: ColorPickerProps) => {
  return (
    <div className="flex flex-wrap justify-center gap-3">
      {colors.map((c) => (
        <div
          key={c.class}
          className={`w-8 h-8 rounded-full hover:ring-2 ring-offset-1 cursor-pointer ${c.class} ${selectedColor === c.class ? "ring-2" : ""}`}
          onClick={() => onSelect(c.class)}
        />
      ))}
    </div>
  );
};
