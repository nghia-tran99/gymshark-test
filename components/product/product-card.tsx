"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Product } from "@/lib/mock-data";
import { Button } from "@/components/ui/button";

interface ProductCardProps {
  product: Product;
  onAddToCart?: (product: Product, size: string) => void;
}

export function ProductCard({ product, onAddToCart }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [selectedSize, setSelectedSize] = useState<string>(product.sizes[0]);
  const [isAdded, setIsAdded] = useState(false);

  const handleAdd = () => {
    setIsAdded(true);
    if (onAddToCart) {
      onAddToCart(product, selectedSize);
    }
    setTimeout(() => setIsAdded(false), 1500);
  };

  return (
    <div
      className="group flex flex-col bg-gymshark-dark rounded-xl overflow-hidden border border-white/5 hover:border-white/20 transition-all duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <div className="relative aspect-[3/4] w-full bg-neutral-900 overflow-hidden">
        <Link href={`/products/${product.id}`} className="block w-full h-full">
          <Image
            src={isHovered ? product.hoverImage : product.image}
            alt={product.name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
        </Link>

        {/* Top Badges */}
        {product.badge && (
          <div className="absolute top-3 left-3 bg-white text-black text-[10px] font-extrabold uppercase tracking-widest px-2.5 py-1 rounded-sm shadow-md pointer-events-none">
            {product.badge}
          </div>
        )}

        {/* Quick Size Overlay on Hover */}
        <div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col gap-2">
          <div className="flex justify-center gap-1.5 flex-wrap">
            {product.sizes.map((size) => (
              <button
                key={size}
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setSelectedSize(size);
                }}
                className={`text-[10px] font-bold px-2 py-1 rounded transition-colors ${
                  selectedSize === size
                    ? "bg-white text-black"
                    : "bg-white/20 text-white hover:bg-white/40"
                }`}
              >
                {size}
              </button>
            ))}
          </div>

          <Button
            size="sm"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              handleAdd();
            }}
            className="w-full text-[10px] py-2"
          >
            {isAdded ? "Added to Bag ✓" : `Quick Add (${selectedSize})`}
          </Button>
        </div>
      </div>

      {/* Meta Content */}
      <div className="p-4 flex flex-col flex-1 justify-between gap-3">
        <div>
          <div className="flex items-center justify-between text-xs text-neutral-400 mb-1">
            <span>{product.category}</span>
            <span className="text-[11px] font-medium text-neutral-500">{product.fit}</span>
          </div>

          <Link href={`/products/${product.id}`} className="block">
            <h3 className="font-bold text-white text-sm tracking-tight line-clamp-1 group-hover:text-neutral-200">
              {product.name}
            </h3>
          </Link>
        </div>

        <div className="flex items-center justify-between pt-1 border-t border-white/5">
          <div className="flex items-center gap-2">
            <span className="font-bold text-white text-sm">${product.price}</span>
            {product.originalPrice && (
              <span className="text-xs text-neutral-500 line-through">
                ${product.originalPrice}
              </span>
            )}
          </div>

          {/* Color Dots */}
          <div className="flex items-center gap-1">
            {product.colors.map((color, idx) => (
              <span
                key={idx}
                className="w-2.5 h-2.5 rounded-full border border-white/20"
                style={{ backgroundColor: color }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
