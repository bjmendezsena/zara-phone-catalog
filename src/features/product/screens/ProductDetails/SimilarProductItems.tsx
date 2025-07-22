import { FC } from "react";
import { generateUUID } from "@/utils";
import { IProductItem, ProductCard } from "@/features/product";

export interface SimilarProductItemsProps {
  products: IProductItem[];
}

export const SimilarProductItems: FC<SimilarProductItemsProps> = ({
  products,
}) => {
  return (
    <div className='mt-16 xl:pl-[360px]'>
      <h2 className='text-xl font-light text-primary mb-8 uppercase tracking-wide pl-4 xl:pl-0'>
        SIMILAR ITEMS
      </h2>

      <div className='relative overflow-hidden'>
        <div
          className='flex  overflow-x-auto scrollbar-thin scrollbar-track-transparent scrollbar-thumb-primary pb-4 px-4 xl:pl-0 xl:pr-6'
          style={{
            scrollbarWidth: "thin",
            scrollbarColor: "var(--color-primary) transparent",
          }}
        >
          {products.map((product) => (
            <div
              key={generateUUID()}
              className='flex-shrink-0 w-[280px] sm:w-[320px] md:w-[240px] lg:w-[280px] xl:w-[320px]'
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
