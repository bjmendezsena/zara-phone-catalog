"use client";
import { useMemo } from "react";
import Link from "next/link";
import { formatCurrency } from "@/utils";
import { useCartContext, ProductCartItem } from "@/features/cart";

const CartRoute = () => {
  const { items, removeItem } = useCartContext();

  const totalItems = useMemo(() => {
    return items.reduce((total, item) => total + (item.quantity || 1), 0);
  }, [items]);

  const totalPrice = useMemo(() => {
    return items.reduce(
      (total, item) => total + item.price * (item.quantity || 1),
      0
    );
  }, [items]);

  if (items.length === 0) {
    return (
      <div className='flex flex-col items-center justify-center min-h-screen p-4'>
        <h1 className='text-2xl font-light text-primary mb-4 uppercase tracking-wide'>
          Your cart is empty
        </h1>
        <p className='text-secondary'>Add some products to get started</p>
      </div>
    );
  }

  return (
    <div className='flex flex-col h-screen'>
      {/* Header */}
      <div className='flex-shrink-0 p-4 md:p-6 '>
        <h1 className='text-2xl font-light text-primary uppercase tracking-wide'>
          Cart ({totalItems})
        </h1>
      </div>

      {/* Scrollable cart items */}
      <div className='flex-1 overflow-y-auto pb-32'>
        <div className='space-y-4'>
          {items.map((item, index) => (
            <ProductCartItem
              key={`${item.productId}-${item.color}-${item.storage}-${index}`}
              item={item}
              onRemove={() => removeItem(item.productId)}
            />
          ))}
        </div>
      </div>

      {/* Sticky footer with buttons */}
      <div className='fixed bottom-0 left-0 right-0 bg-white p-2 pb-6 z-50'>
        <div className=''>
          {/* Total */}
          <div className='flex justify-between items-center mb-2 md:hidden'>
            <span className='text-lg uppercase tracking-wide'>TOTAL</span>
            <span className='text-lg '>{formatCurrency(totalPrice)}</span>
          </div>

          <div className='flex flex-row gap-2 sm:gap-4'>
            <Link
              href={"/"}
              className='text-center flex-1 py-3 cursor-pointer border border-gray-300 text-sm uppercase tracking-wide text-secondary hover:border-primary hover:text-primary transition-colors'
            >
              CONTINUE SHOPPING
            </Link>
            <div className='flex gap-6 justify-center items-center mb-2 flex-1'>
              <span className='text-lg font-medium uppercase tracking-wide'>
                TOTAL
              </span>
              <span className='text-lg font-medium'>
                {formatCurrency(totalPrice)}
              </span>
            </div>
            <button className='flex-1 py-3  bg-primary text-white text-sm uppercase tracking-wide cursor-pointer'>
              PAY
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartRoute;
