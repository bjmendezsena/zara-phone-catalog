import { StorageOption } from "@/features/product";
import { cn } from "@/utils";

export interface StorageSelectorProps {
  selectedCapacity?: string;
  onStorageChange: (storage: StorageOption) => void;
  storageOptions: StorageOption[];
}

export const StorageSelector = ({
  storageOptions,
  onStorageChange,
  selectedCapacity: selectedCapacity,
}: StorageSelectorProps) => {
  return (
    <div>
      <h3 className='text-sm  mb-4 uppercase tracking-wide'>
        STORAGE <span className='uppercase'>How much space do you need?</span>
      </h3>
      <div className='flex divide-x-4'>
        {storageOptions.map((storage: StorageOption, index: number) => (
          <button
            key={storage.capacity}
            onClick={() => onStorageChange(storage)}
            data-testid={`storage-option-${storage.capacity}`}
            className={cn(
              "cursor-pointer px-6 py-3 border text-sm transition-colors border-gray-300 border-r-transparent text-secondary hover:border-primary hover:border-r",
              {
                "border-r-gray-300": index === storageOptions.length - 1,
                "border-primary bg-primary text-white":
                  selectedCapacity === storage.capacity,
              }
            )}
            aria-label={`Select ${storage.capacity} storage`}
          >
            {storage.capacity}
          </button>
        ))}
      </div>
    </div>
  );
};
