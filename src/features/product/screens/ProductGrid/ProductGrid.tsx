"use client";
import { useForm } from "react-hook-form";
import { generateUUID, cn } from "@/utils";
import { useGetProducts, ProductCard } from "@/features/product";

type SearchForm = {
  search: string;
};

export const ProductGrid = () => {
  const { register, watch, reset } = useForm<SearchForm>({
    defaultValues: { search: "" },
  });

  const search = watch("search");

  const { data: products = [], isLoading } = useGetProducts({
    search: search || "",
  });

  return (
    <div className='w-full h-full flex flex-col items-center justify-center p-4 sm:p-8 gap-8'>
      <div
        className='flex flex-col w-full gap-4 group'
        aria-label='Formulario de búsqueda de productos'
      >
        <div className='relative w-full'>
          <input
            type='text'
            {...register("search")}
            placeholder='Buscar productos...'
            className='w-full p-2 border-b border-primary focus:outline-none placeholder:text-placeholder peer pr-8'
          />
          {search && (
            <button
              type='button'
              onClick={() => reset()}
              className='absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 focus:outline-none focus:text-gray-600 transition-colors cursor-pointer'
              aria-label='Limpiar búsqueda'
            >
              <svg
                width='16'
                height='16'
                viewBox='0 0 24 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
                className='w-4 h-4'
              >
                <path
                  d='M18 6L6 18M6 6L18 18'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
            </button>
          )}
        </div>
        <span
          className={cn(
            "col-span-full text-secondary mb-4 peer-focus:opacity-0",
            {
              "opacity-0": products.length === 0,
            }
          )}
        >
          {products.length} Results
        </span>
      </div>

      <div
        className='grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 w-full'
        aria-label='Lista de productos'
      >
        {isLoading ? (
          <div className='col-span-full flex items-center justify-center'>
            <span className='col-span-full text-center text-secondary font-light mb-4'>
              Cargando...
            </span>
          </div>
        ) : (
          products.map((product) => (
            <ProductCard key={generateUUID()} product={product} />
          ))
        )}
      </div>
    </div>
  );
};
