"use client";

import Link from "next/link";
import Image from "next/image";
import { useCartContext } from "@/features/cart";

export const Header = () => {
  const { totalItems } = useCartContext();

  return (
    <header className='sticky top-0 z-50 bg-white'>
      <div className='mx-auto px-4 sm:px-6 md:px-8 flex justify-between items-center h-16'>
        <div className='flex items-center'>
          <Link
            href='/'
            className='flex items-center space-x-2 text-black hover:opacity-80 transition-opacity focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 rounded-sm'
            aria-label='Ir al inicio - Zara Phone Catalog'
          >
            <Image
              src='/Logo.svg'
              alt='Zara Phone Catalog Logo'
              width={74}
              height={24}
              className='h-[34px] w-[74px]'
            />
          </Link>
        </div>

        <nav
          className='flex items-center space-x-4'
          aria-label='Navegación principal'
        >
          <Link
            href='/cart'
            className='relative flex items-center space-x-1 text-black hover:opacity-80 transition-opacity focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 rounded-sm p-2'
            aria-label='Ver carrito de compras'
          >
            <Image
              src='/Bag.svg'
              alt='Icono de carrito de compras'
              width={24}
              height={24}
              className='h-5 w-5'
            />
            <span className='text-sm' suppressHydrationWarning>
              {totalItems}
            </span>
          </Link>
        </nav>
      </div>
    </header>
  );
};
