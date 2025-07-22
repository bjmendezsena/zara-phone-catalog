"use client";
import { useState, useEffect, useMemo, useCallback } from "react";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { ChevronLeft } from "lucide-react";
import { cn, formatCurrency, getValue } from "@/utils";
import {
  useGetProduct,
  ColorOption,
  StorageOption,
  ProductVariant,
} from "@/features/product";
import { useCartContext } from "@/features/cart";
import { StorageSelector } from "./StorageSelector";
import { ColorSelector } from "./ColorSelector";
import { ProductSpecifications } from "./ProductSpecifications";
import { SimilarProductItems } from "./SimilarProductItems";

export interface ProductDetailsProps {
  productId: string;
  variants?: ProductVariant;
}

export const ProductDetails = ({
  productId,
  variants,
}: ProductDetailsProps) => {
  const { data: product, isLoading, error } = useGetProduct(productId);
  const searchParams = useSearchParams();
  const router = useRouter();
  const { addItem } = useCartContext();

  const [selectedStorage, setSelectedStorage] = useState<string>(
    variants?.storage || ""
  );
  const [selectedColor, setSelectedColor] = useState<string>(
    variants?.color || ""
  );

  const {
    colorOptions = [],
    storageOptions = [],
    basePrice = 0,
    similarProducts = [],
  } = product || {};

  const priceLabel = useMemo(() => {
    if (!selectedStorage) return `From ${formatCurrency(basePrice)}`;
    const storageOption = storageOptions.find(
      (option) => option.capacity === selectedStorage
    );
    if (!storageOption) return `From ${formatCurrency(basePrice)}`;
    return formatCurrency(storageOption.price);
  }, [storageOptions, basePrice, selectedStorage]);

  const imageUrl = useMemo(() => {
    const selectedColorData = colorOptions.find(
      (color) => color.name === selectedColor
    );
    if (selectedColorData) return selectedColorData.imageUrl;

    if (colorOptions.length > 0) return getValue(colorOptions[0], "imageUrl");

    return "";
  }, [selectedColor, colorOptions]);

  const updateURLParams = useCallback(
    (colorName?: string, storageCapacity?: string) => {
      const params = new URLSearchParams(searchParams);

      if (colorName) {
        params.set("color", colorName);
      }
      if (storageCapacity) {
        params.set("storage", storageCapacity);
      }

      router.replace(`/product/${productId}?${params.toString()}`, {
        scroll: false,
      });
    },
    [router, productId, searchParams]
  );

  const handleColorSelect = useCallback(
    (color: ColorOption) => {
      setSelectedColor(color.name);
      updateURLParams(color.name, selectedStorage);
    },
    [setSelectedColor, updateURLParams, selectedStorage]
  );

  const handleBackNavigation = useCallback(() => {
    router.back();
  }, [router]);

  const handleChangeStorage = useCallback(
    (storage: StorageOption) => {
      setSelectedStorage(storage.capacity);
      updateURLParams(selectedColor, storage.capacity);
    },
    [setSelectedStorage, updateURLParams, selectedColor]
  );

  const getCurrentPrice = useCallback(() => {
    if (!selectedStorage || !storageOptions.length) return basePrice;
    const storageOption = storageOptions.find(
      (option) => option.capacity === selectedStorage
    );
    return storageOption?.price || basePrice;
  }, [selectedStorage, storageOptions, basePrice]);

  const getCurrentColor = useCallback(() => {
    const selectedColorData = colorOptions.find(
      (color) => color.name === selectedColor
    );
    return selectedColorData?.name || colorOptions[0]?.name || "";
  }, [selectedColor, colorOptions]);

  const getCurrentStorage = useCallback(() => {
    const selectedStorageData = storageOptions.find(
      (storage) => storage.capacity === selectedStorage
    );
    return selectedStorageData?.capacity || storageOptions[0]?.capacity || "";
  }, [selectedStorage, storageOptions]);

  const getCurrentImageUrl = useCallback(() => {
    const selectedColorData = colorOptions.find(
      (color) => color.name === selectedColor
    );
    return selectedColorData?.imageUrl || colorOptions[0]?.imageUrl || "";
  }, [selectedColor, colorOptions]);

  const handleAddToCart = useCallback(() => {
    const { brand = "", name = "", id = "" } = product || {};
    addItem({
      brand: brand,
      name: name,
      productId: id,
      color: getCurrentColor(),
      storage: getCurrentStorage(),
      price: getCurrentPrice(),
      imageUrl: getCurrentImageUrl() || "",
    });
  }, [
    product,
    getCurrentColor,
    getCurrentStorage,
    getCurrentPrice,
    getCurrentImageUrl,
  ]);

  const isAddToCartEnabled = selectedStorage && selectedColor;

  if (isLoading) {
    return (
      <div className='flex items-center justify-center min-h-screen'>
        <span className='text-secondary'>Loading...</span>
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className='flex items-center justify-center min-h-screen'>
        <span className='text-secondary'>Product not found</span>
      </div>
    );
  }

  return (
    <div className='flex flex-col py-4 gap-8 w-full'>
      <div className='mb-8 px-4'>
        <button
          onClick={handleBackNavigation}
          className='flex items-center space-x-2 text-secondary hover:text-primary transition-colors cursor-pointer'
          title={"Go to home"}
        >
          <ChevronLeft size={20} strokeWidth={0.75} />
          <span className='text-sm uppercase tracking-wide'>BACK</span>
        </button>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-16 xl:px-[360px]'>
        <div className='flex justify-center items-center'>
          <div className='w-[400px] h-[500px] flex items-center justify-center'>
            {imageUrl && (
              <Image
                src={imageUrl}
                alt={`${product.brand} ${product.name}`}
                width={400}
                height={500}
                className='w-full h-full object-contain'
                priority
              />
            )}
          </div>
        </div>

        <div className='space-y-8 px-4 md:px-14 lg:px-4'>
          <div>
            <h1 className='text-3xl font-light text-primary mb-2 uppercase tracking-wide'>
              {product.name}
            </h1>
            <p className='text-lg'>{priceLabel}</p>
          </div>
          <StorageSelector
            onStorageChange={handleChangeStorage}
            storageOptions={storageOptions}
            selectedCapacity={selectedStorage}
          />
          <ColorSelector
            selectedColor={selectedColor}
            colorOptions={colorOptions}
            onColorChange={handleColorSelect}
          />

          <div className='fixed border-none bottom-0 left-0 right-0 z-50 px-[16px] py-[20px] md:p-0 bg-white md:relative md:bottom-auto md:left-auto md:right-auto md:z-auto'>
            <button
              onClick={handleAddToCart}
              disabled={!isAddToCartEnabled}
              className={cn(
                "w-full py-4 text-sm uppercase tracking-wide transition-colors cursor-pointer",
                "mx-0 sm:mx-auto rounded-none sm:rounded",
                {
                  "bg-primary text-white": isAddToCartEnabled,
                  "bg-disabled text-text-disabled cursor-not-allowed":
                    !isAddToCartEnabled,
                }
              )}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>

      <ProductSpecifications product={product} />

      <SimilarProductItems products={similarProducts} />

      {/* Spacer to prevent footer overlap */}
      <div className='h-16 sm:h-[100px]' />
    </div>
  );
};
