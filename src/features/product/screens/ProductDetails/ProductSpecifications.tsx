import { FC } from "react";
import { IProductDetails } from "@/features/product";
import { cn } from "@/utils";

export interface ProductSpecificationsProps {
  product?: IProductDetails;
}

export const ProductSpecifications: FC<ProductSpecificationsProps> = ({
  product,
}) => {
  if (!product) {
    return null;
  }

  const { brand, name, description, specs } = product;

  const specifications = [
    { label: "BRAND", value: brand },
    { label: "NAME", value: name },
    { label: "DESCRIPTION", value: description },
    { label: "SCREEN", value: specs.screen },
    { label: "RESOLUTION", value: specs.resolution },
    { label: "PROCESSOR", value: specs.processor },
    { label: "MAIN CAMERA", value: specs.mainCamera },
    { label: "SELFIE CAMERA", value: specs.selfieCamera },
    { label: "BATTERY", value: specs.battery },
    { label: "OS", value: specs.os },
    { label: "SCREEN REFRESH RATE", value: specs.screenRefreshRate },
  ];

  return (
    <div className='mt-4 xl:px-[360px] px-4'>
      <h2 className='text-xl font-light text-primary mb-8 uppercase tracking-wide'>
        SPECIFICATIONS
      </h2>

      <div className='space-y-1'>
        {specifications.map((spec) => (
          <div
            key={spec.label}
            className={cn(
              "grid grid-cols-2  gap-4 py-4 border-b border-primary first:border-t"
            )}
          >
            <div className='text-sm uppercase tracking-wide font-medium'>
              {spec.label}
            </div>
            <div className='text-sm'>{spec.value}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
