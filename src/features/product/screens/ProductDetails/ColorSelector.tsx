import { ColorOption } from "@/features/product";
import { cn } from "@/utils";

export interface ColorSelectorProps {
  colorOptions: ColorOption[];
  selectedColor?: string;
  onColorChange: (color: ColorOption) => void;
}
export const ColorSelector = ({
  colorOptions,
  selectedColor,
  onColorChange,
}: ColorSelectorProps) => {
  return (
    <div className='flex flex-col gap-4'>
      <h3 className='text-sm mb-4 uppercase tracking-wide'>
        COLOR. <span className='uppercase'>Pick your favourite</span>
      </h3>
      <div className='flex gap-3'>
        {colorOptions.map((color: ColorOption) => (
          <button
            data-testid={`color-option-${color.name}`}
            key={color.name}
            onClick={() => onColorChange(color)}
            className={cn(
              "w-[24px] h-[24px] border-2 transition-all cursor-pointer p-[2px]",
              {
                "border-primary ": selectedColor === color.name,
                "border-gray-300 hover:border-primary":
                  selectedColor !== color.name,
              }
            )}
            aria-label={`Select ${color.name} color`}
          >
            <div
              className='w-full h-full'
              style={{ backgroundColor: color.hexCode }}
              aria-hidden='true'
            />
          </button>
        ))}
      </div>
      <span className='text-xs uppercase tracking-wide min-h-[15px]'>
        {selectedColor}
      </span>
    </div>
  );
};
