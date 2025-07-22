import { LocalStorageHelpers } from "@/helpers";
import { CartItem } from "@/features/cart";

const CART_KEY = "phone-catalog-cart";

export const saveCartToLocalStorage = (cart: CartItem[]) => {
  LocalStorageHelpers.setItem(CART_KEY, JSON.stringify(cart));
};

export const addItemToCartInLocalStorage = (cartItem: CartItem) => {
  const currentCart = getCartFromLocalStorage();
  const updatedCart = [...currentCart, cartItem];
  saveCartToLocalStorage(updatedCart);
};

export const removeItemFromCartInLocalStorage = (productId: string) => {
  const currentCart = getCartFromLocalStorage();
  const updatedCart = currentCart.filter(
    (item) => item.productId !== productId
  );
  saveCartToLocalStorage(updatedCart);
};

export const getCartFromLocalStorage = (): CartItem[] => {
  const cart = LocalStorageHelpers.getObject<CartItem[]>(CART_KEY);
  return cart || [];
};

export const clearCartFromLocalStorage = () => {
  LocalStorageHelpers.removeItem(CART_KEY);
};
