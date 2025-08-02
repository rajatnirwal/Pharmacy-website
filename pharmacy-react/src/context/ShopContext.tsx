import React, { createContext, useState, useEffect, ReactNode } from 'react';
import { products as productData } from '../assets/assets2'; // Adjust path as needed

// ------------------
// ✅ Type Definitions
// ------------------

export interface Product {
  _id: string;
  name: string;
  image: string[];
  price?: number;
  discountPrice?: number;
  originalPrice?: number;
  offer?: string;
  bestseller?: boolean;
  category: string[];
  sizes?: string[];
  description?: string;
  subCategory?: string;
}

export interface CartItems {
  [key: string]: number;
}

interface ShopContextType {
  products: Product[];
  cartItems: CartItems;
  currency: string;
  addToCart: (productId: string, size?: string | null) => void;
  removeFromCart: (productId: string, size?: string | null) => void;
  clearCart: () => void;
}

// ------------------
// ✅ Create Context
// ------------------

export const ShopContext = createContext<ShopContextType>({} as ShopContextType);

// ------------------
// ✅ Provider Component
// ------------------

const ShopContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [cartItems, setCartItems] = useState<CartItems>({});
  const [currency] = useState<string>('₹');

  // Load products on mount
  useEffect(() => {
    setProducts(productData);

    const savedCart = localStorage.getItem('cartItems');
    if (savedCart) {
      setCartItems(JSON.parse(savedCart));
    }
  }, []);

  // Save cart to localStorage when changed
  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  // Add to Cart
  const addToCart = (productId: string, size?: string | null) => {
    const key = size ? `${productId}-${size}` : productId;
    setCartItems((prev) => ({
      ...prev,
      [key]: prev[key] ? prev[key] + 1 : 1,
    }));
  };

  // Remove from Cart
  const removeFromCart = (productId: string, size?: string | null) => {
    const key = size ? `${productId}-${size}` : productId;
    setCartItems((prev) => {
      const updated = { ...prev };
      if (updated[key]) {
        updated[key] -= 1;
        if (updated[key] <= 0) delete updated[key];
      }
      return updated;
    });
  };

  const clearCart = () => {
    setCartItems({});
  };

  return (
    <ShopContext.Provider
      value={{
        products,
        cartItems,
        currency,
        addToCart,
        removeFromCart,
        clearCart,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;