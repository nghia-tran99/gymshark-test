"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Product } from "@/lib/mock-data";
import { useCart } from "@/context/cart-context";

interface ProductCardProps {
  product: Product;
  onAddToCart?: (product: Product, size: string) => void;
}

export function ProductCard({ product, onAddToCart }: ProductCardProps) {
  const { addItem, openCart } = useCart();
  const [isHovered, setIsHovered] = useState(false);
  const [selectedSize, setSelectedSize] = useState<string>(product.sizes[0]);
  const [isAdded, setIsAdded] = useState(false);

  const handleAdd = () => {
    setIsAdded(true);
    if (onAddToCart) {
      onAddToCart(product, selectedSize);
    } else {
      addItem(product, selectedSize);
      openCart();
    }
    setTimeout(() => setIsAdded(false), 1500);
  };

  return (
    <div
      className="group flex flex-col bg-white rounded-lg overflow-hidden transition-all duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <div className="relative aspect-[3/4] w-full bg-[#F5F5F5] overflow-hidden rounded-lg">
        <Link href={`/products/${product.id}`} className="block w-full h-full">
          <Image
            src={isHovered ? product.hoverImage : product.image}
            alt={product.name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-103"
          />
        </Link>

        {/* Official Gymshark Badge */}
        {product.badge && (
          <div className="absolute top-2.5 left-2.5 bg-black text-white text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-xs shadow-sm pointer-events-none">
            {product.badge}
          </div>
        )}

        {/* Quick Size Overlay on Hover */}
        <div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-white/95 via-white/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex flex-col gap-2">
          <div className="flex justify-center gap-1 flex-wrap">
            {product.sizes.map((size) => (
              <button
                key={size}
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setSelectedSize(size);
                }}
                className={`text-[10px] font-bold px-2 py-1 rounded-sm transition-colors uppercase ${
                  selectedSize === size
                    ? "bg-black text-white"
                    : "bg-white text-black border border-neutral-300 hover:border-black"
                }`}
              >
                {size}
              </button>
            ))}
          </div>

          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              handleAdd();
            }}
            className="w-full bg-black text-white hover:bg-neutral-800 text-[10px] font-black uppercase tracking-wider py-2.5 rounded-full transition-colors shadow-sm"
          >
            {isAdded ? "Added to Bag ✓" : `Quick Add (${selectedSize})`}
          </button>
        </div>
      </div>

      {/* Meta Content */}
      <div className="pt-3 pb-1 flex flex-col gap-1.5">
        <div className="flex items-center justify-between text-[11px] text-neutral-500">
          <span>{product.category}</span>
          <span className="font-medium text-neutral-600">{product.fit}</span>
        </div>

        <Link href={`/products/${product.id}`} className="block">
          <h3 className="font-bold text-black text-xs sm:text-sm tracking-tight line-clamp-1 group-hover:text-neutral-700 transition-colors">
            {product.name}
          </h3>
        </Link>

        <div className="flex items-center justify-between pt-0.5">
          <div className="flex items-center gap-2">
            <span className="font-black text-black text-xs sm:text-sm">€{product.price}</span>
            {product.originalPrice && (
              <span className="text-xs text-neutral-400 line-through">
                €{product.originalPrice}
              </span>
            )}
          </div>

          {/* Color Indicators */}
          <div className="flex items-center gap-1">
            {product.colors.map((color, idx) => (
              <span
                key={idx}
                className="w-2.5 h-2.5 rounded-full border border-neutral-300"
                style={{ backgroundColor: color }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
