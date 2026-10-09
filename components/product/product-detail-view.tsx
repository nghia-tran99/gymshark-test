"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Product } from "@/lib/mock-data";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/cart-context";
import { ChevronRight, ChevronDown, Truck, ShieldCheck, RefreshCw } from "lucide-react";

interface ProductDetailViewProps {
  product: Product;
}

export function ProductDetailView({ product }: ProductDetailViewProps) {
  const { addItem, openCart } = useCart();
  const [selectedSize, setSelectedSize] = useState<string>(product.sizes[0]);
  const [activeImage, setActiveImage] = useState<string>(product.image);
  const [isAdded, setIsAdded] = useState(false);
  const [openAccordion, setOpenAccordion] = useState<string | null>("description");

  const toggleAccordion = (section: string) => {
    setOpenAccordion(openAccordion === section ? null : section);
  };

  const handleAddToCart = () => {
    setIsAdded(true);
    addItem(product, selectedSize);
    openCart();
    setTimeout(() => setIsAdded(false), 2000);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col gap-10">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-xs font-semibold text-neutral-400 uppercase tracking-wider">
        <Link href="/" className="hover:text-white transition-colors">
          Home
        </Link>
        <ChevronRight className="w-3.5 h-3.5 text-neutral-600" />
        <Link
          href={`/collections/${product.category.toLowerCase().includes("women") ? "women" : "men"}`}
          className="hover:text-white transition-colors"
        >
          {product.category}
        </Link>
        <ChevronRight className="w-3.5 h-3.5 text-neutral-600" />
        <span className="text-white truncate max-w-xs">{product.name}</span>
      </nav>

      {/* Main 2-Column Product Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
        {/* Left: Gallery (7 Cols) */}
        <div className="lg:col-span-7 flex flex-col-reverse md:flex-row gap-4">
          {/* Thumbnail Strip */}
          <div className="flex md:flex-col gap-3 shrink-0">
            {[product.image, product.hoverImage].map((imgUrl, idx) => (
              <button
                key={idx}
                onClick={() => setActiveImage(imgUrl)}
                className={`relative w-20 h-24 rounded-lg overflow-hidden border-2 transition-all ${
                  activeImage === imgUrl
                    ? "border-white"
                    : "border-transparent opacity-60 hover:opacity-100"
                }`}
              >
                <Image
                  src={imgUrl}
                  alt={`${product.name} thumb ${idx + 1}`}
                  fill
                  className="object-cover"
                />
              </button>
            ))}
          </div>

          {/* Main Hero Shot */}
          <div className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden bg-neutral-900 border border-white/10 shadow-2xl">
            <Image
              src={activeImage}
              alt={product.name}
              fill
              priority
              className="object-cover"
            />
            {product.badge && (
              <div className="absolute top-4 left-4 bg-white text-black text-xs font-black uppercase tracking-widest px-3 py-1.5 rounded-sm shadow-md">
                {product.badge}
              </div>
            )}
          </div>
        </div>

        {/* Right: Buy Box & Specs (5 Cols) */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          {/* Header */}
          <div className="flex flex-col gap-2 border-b border-white/10 pb-6">
            <div className="flex items-center justify-between text-xs text-neutral-400">
              <span className="uppercase tracking-wider font-semibold">{product.category}</span>
              <span className="font-bold text-neutral-300 bg-white/10 px-2 py-0.5 rounded text-[11px]">
                {product.fit}
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-white leading-tight">
              {product.name}
            </h1>

            <div className="flex items-center gap-3 pt-1">
              <span className="text-2xl font-black text-white">€{product.price}</span>
              {product.originalPrice && (
                <span className="text-base text-neutral-500 line-through">
                  €{product.originalPrice}
                </span>
              )}
            </div>
          </div>

          {/* Color Indicator */}
          <div className="flex flex-col gap-2">
            <span className="text-xs font-bold uppercase tracking-wider text-neutral-300">
              Select Color
            </span>
            <div className="flex items-center gap-2">
              {product.colors.map((color, idx) => (
                <button
                  key={idx}
                  className="w-7 h-7 rounded-full border-2 border-white/40 hover:scale-110 transition-transform focus:outline-none focus:ring-2 focus:ring-white"
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>
          </div>

          {/* Size Picker */}
          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-neutral-300">
                Select Size: <span className="text-white font-extrabold">{selectedSize}</span>
              </span>
              <button className="text-[11px] font-bold text-neutral-400 underline hover:text-white">
                Size Guide
              </button>
            </div>

            <div className="grid grid-cols-5 gap-2">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`py-3 rounded-lg font-bold text-xs transition-all uppercase ${
                    selectedSize === size
                      ? "bg-white text-black shadow-lg scale-100"
                      : "bg-gymshark-surface text-neutral-200 hover:bg-neutral-800 border border-white/5"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Action Button */}
          <div className="flex flex-col gap-3 pt-2">
            <Button
              size="lg"
              onClick={handleAddToCart}
              className="w-full py-4 text-xs font-black tracking-widest uppercase"
            >
              {isAdded ? "Added To Bag ✓" : `Add to Bag · €${product.price}`}
            </Button>
          </div>

          {/* Trust Guarantees */}
          <div className="grid grid-cols-1 gap-2.5 bg-gymshark-dark p-4 rounded-xl border border-white/5 text-xs text-neutral-300">
            <div className="flex items-center gap-3">
              <Truck className="w-4 h-4 text-neutral-400 shrink-0" />
              <span>Free standard delivery on orders over €50</span>
            </div>
            <div className="flex items-center gap-3">
              <RefreshCw className="w-4 h-4 text-neutral-400 shrink-0" />
              <span>Free 30-day online returns</span>
            </div>
            <div className="flex items-center gap-3">
              <ShieldCheck className="w-4 h-4 text-neutral-400 shrink-0" />
              <span>100% Secure Checkout powered by Vercel Edge</span>
            </div>
          </div>

          {/* Collapsible Accordions */}
          <div className="flex flex-col border-t border-white/10 divide-y divide-white/10 text-xs">
            {/* Description Accordion */}
            <div>
              <button
                onClick={() => toggleAccordion("description")}
                className="w-full py-4 flex items-center justify-between font-bold uppercase tracking-wider text-white hover:text-neutral-300 text-left"
              >
                <span>Description & Fit</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    openAccordion === "description" ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openAccordion === "description" && (
                <div className="pb-4 text-neutral-400 leading-relaxed flex flex-col gap-2">
                  <p>
                    Engineered with proprietary seamless knit technology to reduce chafing during
                    high-volume conditioning sessions. Sweat-wicking yarns keep you cool through
                    every set.
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-neutral-300">
                    <li>{product.fit} silhouette tailored for active movement</li>
                    <li>Reinforced ribbing around cuffs and collar</li>
                    <li>Screen-printed Gymshark shark fin branding</li>
                  </ul>
                </div>
              )}
            </div>

            {/* Materials Accordion */}
            <div>
              <button
                onClick={() => toggleAccordion("materials")}
                className="w-full py-4 flex items-center justify-between font-bold uppercase tracking-wider text-white hover:text-neutral-300 text-left"
              >
                <span>Materials & Care</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    openAccordion === "materials" ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openAccordion === "materials" && (
                <div className="pb-4 text-neutral-400 leading-relaxed flex flex-col gap-2">
                  <p>88% Nylon, 12% Elastane.</p>
                  <p>Machine wash cold with similar colors. Do not bleach or iron prints.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
