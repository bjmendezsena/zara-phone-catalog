import Image from "next/image";
import { FC } from "react";
import { formatCurrency } from "@/utils";
import { CartItem } from "@/features/cart";

export interface ProductCartItemProps {
  item: CartItem;
  onRemove: (productId: string) => void;
}

export const ProductCartItem: FC<ProductCartItemProps> = ({
  item,
  onRemove,
}) => {
  return (
    <div className='flex w-full h-[364px]'>
      <div className='flex space-x-8'>
        <div className='h-full w-[262px] p-2 flex items-center justify-center rounded-md overflow-hidden'>
          <Image
            src={item.imageUrl}
            alt={`${item.brand} ${item.name}`}
            width={100}
            height={100}
            className='w-full h-[90%] object-cover'
            priority
          />
        </div>

        <div className='flex flex-col gap-4 pt-[20%] py-[65px] h-full'>
          <div className='flex flex-col'>
            <span>
              {item.brand} {item.name}
            </span>
            <span>
              {item.storage} | {item.color}
            </span>
          </div>
          <span>{formatCurrency(item.price)}</span>
          <span
            onClick={() => onRemove(item.productId)}
            className='text-red-500 hover:text-red-700 cursor-pointer transition-colors duration-200'
            aria-label={`Remove ${item.name} from cart`}
            data-testid='remove-cart-item'
          >
            Eliminar
          </span>
        </div>
      </div>
    </div>
  );
};
