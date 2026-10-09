"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/context/cart-context";
import { X, Trash2, Plus, Minus, Lock, ShoppingBag, ArrowRight } from "lucide-react";

export function CartDrawer() {
  const {
    items,
    isOpen,
    closeCart,
    removeItem,
    updateQuantity,
    totalPrice,
    totalItems,
    amountUntilFreeShipping,
    shippingProgress,
  } = useCart();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        onClick={closeCart}
        className="fixed inset-0 bg-black/50 backdrop-blur-xs transition-opacity duration-300"
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white text-black shadow-2xl flex flex-col border-l border-neutral-200">
          {/* Header */}
          <div className="p-5 border-b border-neutral-200 flex items-center justify-between bg-white">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-black" />
              <h2 className="text-sm font-black uppercase tracking-wider text-black">
                YOUR BAG ({totalItems})
              </h2>
            </div>
            <button
              onClick={closeCart}
              className="p-1.5 rounded-full hover:bg-neutral-100 text-neutral-500 hover:text-black transition-colors"
              aria-label="Close Bag"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Free Shipping Meter (Gymshark Teal Accent) */}
          <div className="bg-[#F5F5F5] p-4 border-b border-neutral-200 flex flex-col gap-2">
            <div className="flex items-center justify-between text-xs">
              {amountUntilFreeShipping > 0 ? (
                <span className="text-neutral-800">
                  Add <strong className="text-black font-extrabold">€{amountUntilFreeShipping}</strong> more for{" "}
                  <strong className="text-black uppercase font-black">Free Standard Delivery</strong>
                </span>
              ) : (
                <span className="text-[#008269] font-black flex items-center gap-1.5">
                  <span>🎉</span> You&apos;ve unlocked Free Standard Delivery!
                </span>
              )}
              <span className="text-[11px] font-bold text-neutral-500">{shippingProgress}%</span>
            </div>

            {/* Progress Bar Track */}
            <div className="w-full bg-neutral-300 rounded-full h-2 overflow-hidden">
              <div
                className="bg-[#42B296] h-full transition-all duration-500 ease-out rounded-full"
                style={{ width: `${shippingProgress}%` }}
              />
            </div>
          </div>

          {/* Cart Item List */}
          <div className="flex-1 overflow-y-auto p-5 flex flex-col gap-4 divide-y divide-neutral-100">
            {items.length === 0 ? (
              <div className="flex-1 flex flex-col items-center justify-center text-center gap-4 py-16 text-neutral-500">
                <ShoppingBag className="w-12 h-12 text-neutral-300" />
                <div className="flex flex-col gap-1">
                  <h3 className="text-base font-black uppercase text-black">Your bag is empty</h3>
                  <p className="text-xs text-neutral-500">Explore new lifting sets and conditioning drops.</p>
                </div>
                <button
                  onClick={closeCart}
                  className="bg-black text-white text-xs font-black uppercase tracking-wider px-6 py-3 rounded-full hover:bg-neutral-800 transition-colors mt-2"
                >
                  Start Shopping
                </button>
              </div>
            ) : (
              items.map((item) => (
                <div key={item.id} className="pt-4 first:pt-0 flex gap-4">
                  {/* Product Thumbnail */}
                  <div className="relative w-20 h-24 bg-neutral-100 rounded-lg overflow-hidden shrink-0 border border-neutral-200">
                    <Image
                      src={item.product.image}
                      alt={item.product.name}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Item Details */}
                  <div className="flex flex-col justify-between flex-1 min-w-0">
                    <div className="flex justify-between items-start gap-2">
                      <div>
                        <h4 className="text-xs font-bold text-black line-clamp-1">
                          {item.product.name}
                        </h4>
                        <div className="flex items-center gap-2 text-[11px] text-neutral-500 mt-0.5">
                          <span>Size: <strong className="text-black uppercase">{item.size}</strong></span>
                          <span>·</span>
                          <span>{item.product.fit}</span>
                        </div>
                      </div>

                      <button
                        onClick={() => removeItem(item.id)}
                        className="text-neutral-400 hover:text-red-600 transition-colors p-1"
                        aria-label="Remove item"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    {/* Quantity Stepper & Price */}
                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center border border-neutral-300 rounded-full bg-white px-2 py-0.5 gap-2">
                        <button
                          onClick={() => updateQuantity(item.id, -1)}
                          className="text-neutral-600 hover:text-black p-0.5"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="text-xs font-black min-w-4 text-center text-black">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, 1)}
                          className="text-neutral-600 hover:text-black p-0.5"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      <div className="text-right">
                        <span className="text-xs font-black text-black">
                          €{item.product.price * item.quantity}
                        </span>
                        {item.quantity > 1 && (
                          <div className="text-[10px] text-neutral-500">
                            €{item.product.price} each
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer Checkout Summary */}
          {items.length > 0 && (
            <div className="p-5 border-t border-neutral-200 bg-[#F9F9F9] flex flex-col gap-4">
              <div className="flex flex-col gap-1.5 text-xs">
                <div className="flex justify-between text-neutral-600">
                  <span>Subtotal</span>
                  <span className="font-bold text-black">€{totalPrice}</span>
                </div>
                <div className="flex justify-between text-neutral-600">
                  <span>Estimated Delivery</span>
                  <span className="font-bold text-black">
                    {amountUntilFreeShipping === 0 ? "FREE" : "€4.99"}
                  </span>
                </div>
                <div className="flex justify-between text-sm font-black text-black pt-2 border-t border-neutral-200">
                  <span>Total</span>
                  <span>€{amountUntilFreeShipping === 0 ? totalPrice : totalPrice + 4.99}</span>
                </div>
              </div>

              {/* Checkout Action Button */}
              <button
                onClick={() => {
                  alert("Redirecting to Gymshark EU PCI-Compliant Checkout Simulation...");
                }}
                className="w-full bg-black text-white hover:bg-neutral-800 text-xs font-black uppercase tracking-wider py-4 rounded-full flex items-center justify-center gap-2 transition-all shadow-md active:scale-98"
              >
                <Lock className="w-3.5 h-3.5" />
                <span>Checkout Securely · €{amountUntilFreeShipping === 0 ? totalPrice : totalPrice + 4.99}</span>
              </button>

              <p className="text-[10px] text-neutral-500 text-center flex items-center justify-center gap-1">
                <span>Free 30-Day Returns</span>
                <span>·</span>
                <span>Encrypted 256-bit Checkout</span>
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
