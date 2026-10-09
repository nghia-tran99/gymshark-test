"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/context/cart-context";
import { X, Trash2, Plus, Minus, Lock, ShoppingBag, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

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
        className="fixed inset-0 bg-black/75 backdrop-blur-sm transition-opacity duration-300"
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-gymshark-dark text-white shadow-2xl flex flex-col border-l border-white/10">
          {/* Header */}
          <div className="p-5 border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-white" />
              <h2 className="text-sm font-black uppercase tracking-wider">
                YOUR BAG ({totalItems})
              </h2>
            </div>
            <button
              onClick={closeCart}
              className="p-1.5 rounded-full hover:bg-white/10 text-neutral-400 hover:text-white transition-colors"
              aria-label="Close Bag"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Free Shipping Meter */}
          <div className="bg-neutral-900 p-4 border-b border-white/10 flex flex-col gap-2">
            <div className="flex items-center justify-between text-xs">
              {amountUntilFreeShipping > 0 ? (
                <span>
                  Add <strong className="text-white">€{amountUntilFreeShipping.toFixed(2)}</strong> more for <strong>FREE DELIVERY</strong>
                </span>
              ) : (
                <span className="text-emerald-400 font-bold flex items-center gap-1">
                  ✓ You have unlocked FREE STANDARD DELIVERY!
                </span>
              )}
              <span className="font-bold text-neutral-400">{shippingProgress}%</span>
            </div>

            {/* Progress Track */}
            <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden">
              <div
                className="bg-emerald-400 h-full transition-all duration-500 rounded-full"
                style={{ width: `${shippingProgress}%` }}
              />
            </div>
          </div>

          {/* Cart Item List */}
          <div className="flex-1 overflow-y-auto p-5 divide-y divide-white/10">
            {items.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center gap-4 py-16">
                <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                  <ShoppingBag className="w-8 h-8 text-neutral-500" />
                </div>
                <div>
                  <h3 className="font-bold text-base uppercase">Your bag is empty</h3>
                  <p className="text-xs text-neutral-400 mt-1 max-w-xs">
                    There are no conditioning items in your bag. Explore our latest drops to get started.
                  </p>
                </div>
                <Button size="sm" onClick={closeCart} className="mt-2">
                  Continue Shopping
                </Button>
              </div>
            ) : (
              items.map((item) => (
                <div key={item.id} className="py-4 first:pt-0 last:pb-0 flex gap-4">
                  {/* Thumbnail */}
                  <div className="relative w-20 h-24 rounded-lg overflow-hidden bg-neutral-900 border border-white/10 shrink-0">
                    <Image
                      src={item.product.image}
                      alt={item.product.name}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Details */}
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between gap-2">
                        <Link
                          href={`/products/${item.product.id}`}
                          onClick={closeCart}
                          className="font-bold text-xs hover:text-neutral-300 transition-colors line-clamp-1"
                        >
                          {item.product.name}
                        </Link>
                        <button
                          onClick={() => removeItem(item.id)}
                          className="text-neutral-500 hover:text-red-400 transition-colors p-1"
                          aria-label="Remove item"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      <div className="flex items-center gap-2 text-[11px] text-neutral-400 mt-0.5">
                        <span className="font-semibold text-neutral-300">Size: {item.size}</span>
                        <span>·</span>
                        <span>{item.product.fit}</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between mt-2 pt-2 border-t border-white/5">
                      {/* Stepper */}
                      <div className="flex items-center border border-white/20 rounded-full overflow-hidden">
                        <button
                          onClick={() => updateQuantity(item.id, -1)}
                          className="p-1.5 hover:bg-white/10 text-neutral-300 hover:text-white transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-2 text-xs font-bold select-none">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, 1)}
                          className="p-1.5 hover:bg-white/10 text-neutral-300 hover:text-white transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      {/* Line price */}
                      <span className="font-bold text-sm text-white">
                        €{(item.product.price * item.quantity).toFixed(2)}
                      </span>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer / Checkout */}
          {items.length > 0 && (
            <div className="p-5 border-t border-white/10 bg-neutral-900/80 flex flex-col gap-4">
              <div className="flex flex-col gap-1.5 text-xs">
                <div className="flex justify-between text-neutral-400">
                  <span>Subtotal</span>
                  <span className="font-semibold text-white">€{totalPrice.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-neutral-400">
                  <span>Estimated Shipping</span>
                  <span className="font-semibold text-white">
                    {amountUntilFreeShipping === 0 ? "FREE" : "€4.50"}
                  </span>
                </div>
                <div className="flex justify-between text-sm font-black pt-2 border-t border-white/10 text-white">
                  <span>Estimated Total</span>
                  <span>
                    €
                    {(
                      totalPrice + (amountUntilFreeShipping === 0 ? 0 : 4.5)
                    ).toFixed(2)}
                  </span>
                </div>
              </div>

              <Button size="lg" className="w-full flex items-center justify-center gap-2 py-4">
                <Lock className="w-4 h-4" />
                <span>Checkout Securely</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </Button>

              {/* Payment Trust Badges */}
              <div className="flex items-center justify-center gap-3 text-[10px] text-neutral-400 tracking-wider uppercase pt-1">
                <span>Apple Pay</span>
                <span>·</span>
                <span>Klarna</span>
                <span>·</span>
                <span>PayPal</span>
                <span>·</span>
                <span>Visa / MC</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
