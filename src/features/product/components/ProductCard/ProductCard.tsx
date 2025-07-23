import Link from "next/link";
import Image from "next/image";
import { IProductItem } from "@/features/product";
import { formatCurrency } from "@/utils";

interface ProductCardProps {
  product: IProductItem;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <Link
      href={`/product/${product.id}`}
      aria-label={`Ver detalles del producto ${product.brand} ${product.name}`}
      className='w-full h-full max-h-[344px] flex items-center justify-center text-center transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 border-1 flex-col relative overflow-hidden group'
      data-testid='product-card'
    >
      <div className='absolute inset-0 bg-primary transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out' />

      <div className='relative z-10 w-full h-full flex flex-col'>
        <div
          className='flex-1 flex items-center justify-center p-4'
          aria-label={`Imagen del producto ${product.brand} ${product.name}`}
        >
          <div className='w-full max-w-[150px] h-full max-h-[200px] flex items-center justify-center'>
            <Image
              src={product.imageUrl}
              alt={`${product.brand} ${product.name}`}
              width={200}
              height={200}
              className='w-full h-full object-contain group-hover:brightness-110 transition-all duration-300'
              priority
            />
          </div>
        </div>

        <div className='flex-shrink-0 w-full flex justify-between items-end px-4 py-3'>
          <div className='flex flex-col space-y-1 items-start'>
            <span className='text-xs text-secondary font-light group-hover:text-white transition-colors duration-300 uppercase tracking-wide'>
              {product.brand}
            </span>
            <span className='text-sm text-primary font-light group-hover:text-white transition-colors duration-300 leading-tight'>
              {product.name}
            </span>
          </div>
          <span className='text-sm text-primary font-medium group-hover:text-white transition-colors duration-300'>
            {formatCurrency(product.basePrice)}
          </span>
        </div>
      </div>
    </Link>
  );
};
