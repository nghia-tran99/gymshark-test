"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { Product } from "@/lib/mock-data";

export interface CartItem {
  id: string; // product.id + size
  product: Product;
  size: string;
  quantity: number;
}

interface CartContextType {
  items: CartItem[];
  isOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  addItem: (product: Product, size: string) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, delta: number) => void;
  totalPrice: number;
  totalItems: number;
  freeShippingThreshold: number;
  amountUntilFreeShipping: number;
  shippingProgress: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  const freeShippingThreshold = 50; // €50 on Gymshark EU

  // Hydrate from localStorage
  useEffect(() => {
    setIsMounted(true);
    try {
      const saved = localStorage.getItem("gymshark_cart");
      if (saved) {
        setItems(JSON.parse(saved));
      }
    } catch {
      // ignore
    }
  }, []);

  // Save to localStorage
  useEffect(() => {
    if (isMounted) {
      try {
        localStorage.setItem("gymshark_cart", JSON.stringify(items));
      } catch {
        // ignore
      }
    }
  }, [items, isMounted]);

  const openCart = () => setIsOpen(true);
  const closeCart = () => setIsOpen(false);

  const addItem = (product: Product, size: string) => {
    const itemId = `${product.id}-${size}`;
    setItems((prev) => {
      const existing = prev.find((item) => item.id === itemId);
      if (existing) {
        return prev.map((item) =>
          item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { id: itemId, product, size, quantity: 1 }];
    });
    setIsOpen(true);
  };

  const removeItem = (id: string) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  const updateQuantity = (id: string, delta: number) => {
    setItems((prev) =>
      prev
        .map((item) => {
          if (item.id === id) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const totalPrice = items.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);

  const amountUntilFreeShipping = Math.max(0, freeShippingThreshold - totalPrice);
  const shippingProgress = Math.min(
    100,
    Math.round((totalPrice / freeShippingThreshold) * 100)
  );

  return (
    <CartContext.Provider
      value={{
        items,
        isOpen,
        openCart,
        closeCart,
        addItem,
        removeItem,
        updateQuantity,
        totalPrice,
        totalItems,
        freeShippingThreshold,
        amountUntilFreeShipping,
        shippingProgress,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
