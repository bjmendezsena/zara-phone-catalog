import { useState, PropsWithChildren, FC, useEffect, useMemo } from "react";
import { createContext } from "@/utils";
import {
  getCartFromLocalStorage,
  addItemToCartInLocalStorage,
  removeItemFromCartInLocalStorage,
  CartItem,
} from "@/features/cart";

interface CartContextProps {
  items: CartItem[];
  addItem: (product: CartItem) => void;
  removeItem: (productId: string) => void;
  clearCart: () => void;
  totalItems: number;
}

const [Provider, useCartContext] = createContext<CartContextProps>();

const CartProvider: FC<PropsWithChildren> = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>([]);

  useEffect(() => {
    const storedCart = getCartFromLocalStorage();
    if (storedCart) {
      setItems(storedCart);
    }
  }, []);

  const addItem = (cartItem: CartItem) => {
    setItems((prevItems) => {
      const existingItemIndex = prevItems.findIndex(
        (item) => item.productId === cartItem.productId
      );
      if (existingItemIndex > -1) {
        const updatedItems = [...prevItems];
        updatedItems[existingItemIndex].quantity =
          (updatedItems[existingItemIndex].quantity || 0) + 1;
        return updatedItems;
      }
      return [...prevItems, { ...cartItem, quantity: 1 }];
    });
    addItemToCartInLocalStorage(cartItem);
  };

  const removeItem = (productId: string) => {
    setItems((prevItems) =>
      prevItems.filter((item) => item.productId !== productId)
    );

    removeItemFromCartInLocalStorage(productId);
  };

  const clearCart = () => {
    setItems([]);
  };

  const totalItems = useMemo(() => {
    return items.reduce((total, item) => total + (item.quantity || 1), 0);
  }, [items]);

  return (
    <Provider
      value={{
        totalItems,
        items,
        addItem,
        removeItem,
        clearCart,
      }}
    >
      {children}
    </Provider>
  );
};

export { CartProvider, useCartContext };
