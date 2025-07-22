export interface IProductItem {
  id: string;
  brand: string;
  name: string;
  basePrice: number;
  imageUrl: string;
}

export interface IProductDetails {
  id: string;
  brand: string;
  name: string;
  description: string;
  basePrice: number;
  rating: number;
  specs: Specs;
  colorOptions: ColorOption[];
  storageOptions: StorageOption[];
  similarProducts: IProductItem[];
}

export interface ColorOption {
  name: string;
  hexCode: string;
  imageUrl: string;
}

export interface Specs {
  screen: string;
  resolution: string;
  processor: string;
  mainCamera: string;
  selfieCamera: string;
  battery: string;
  os: string;
  screenRefreshRate: string;
}

export interface StorageOption {
  capacity: string;
  price: number;
}

export type ProductVariant = {
  color?: string;
  storage?: string;
};
