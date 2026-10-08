import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MOCK_PRODUCTS } from "@/lib/mock-data";
import { ProductCard } from "@/components/product/product-card";
import { Button } from "@/components/ui/button";
import { Flame, ShieldCheck, Truck } from "lucide-react";

export default function HomePage() {
  return (
    <div className="flex flex-col gap-16">
      {/* 1. Hero Banner */}
      <section className="relative w-full h-[80vh] min-h-[550px] flex items-end pb-16 px-4 sm:px-8 overflow-hidden bg-neutral-900">
        <Image
          src="https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1800&q=85"
          alt="Gymshark Athlete Training"
          fill
          priority
          className="object-cover object-center opacity-65"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-gymshark-black via-black/30 to-transparent" />

        <div className="relative max-w-4xl z-10 flex flex-col gap-4">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase bg-white/10 backdrop-blur-md text-neutral-200 px-3 py-1.5 rounded-full w-fit border border-white/10">
            <Flame className="w-4 h-4 text-orange-400" />
            Seasonal Conditioning Drop
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tighter leading-none text-white">
            TRAIN WITHOUT LIMITS.
          </h1>

          <p className="text-sm sm:text-base text-neutral-300 max-w-xl">
            Engineered for high-intensity lifting and conditioning. Lightweight seamless fabrics built to withstand your heaviest sets.
          </p>

          <div className="flex items-center gap-3 pt-2">
            <Link href="/collections/women">
              <Button size="lg">Shop Women</Button>
            </Link>
            <Link href="/collections/men">
              <Button size="lg" variant="outline">Shop Men</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* 2. Brand Value Props */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 border-y border-white/10 py-8">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
              <Truck className="w-5 h-5 text-neutral-200" />
            </div>
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-white">Express Global Shipping</h4>
              <p className="text-xs text-neutral-400">Delivered directly from regional fulfillment hubs</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
              <ShieldCheck className="w-5 h-5 text-neutral-200" />
            </div>
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-white">Hassle-Free 30-Day Returns</h4>
              <p className="text-xs text-neutral-400">Instant label generation and store credit</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
              <Flame className="w-5 h-5 text-neutral-200" />
            </div>
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-white">Athlete Tested & Approved</h4>
              <p className="text-xs text-neutral-400">Tested across 10,000+ reps by elite lifters</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Product Catalog Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col gap-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-bold tracking-widest text-neutral-400 uppercase">
              Curated Essentials
            </span>
            <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-white mt-1">
              Trending In Conditioning
            </h2>
          </div>

          <Link
            href="/collections/all"
            className="text-xs font-bold uppercase tracking-wider text-neutral-300 hover:text-white underline underline-offset-4"
          >
            View All Products →
          </Link>
        </div>

        {/* 3-Column Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {MOCK_PRODUCTS.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* 4. Drop Notification Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="bg-gymshark-surface rounded-2xl border border-white/10 p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          <div className="max-w-xl">
            <span className="text-[11px] font-bold uppercase tracking-widest text-red-500">
              VIP Early Access
            </span>
            <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-white mt-1">
              Be First In Line for Black Friday Drops
            </h3>
            <p className="text-xs sm:text-sm text-neutral-400 mt-2">
              Sign up for direct SMS drops and secret discounts before public release.
            </p>
          </div>

          <div className="flex w-full md:w-auto items-center gap-2 max-w-md">
            <input
              type="email"
              placeholder="Enter your email address"
              className="bg-black/50 border border-white/20 rounded-full px-4 py-3 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-white w-full sm:w-64"
            />
            <Button size="md" className="shrink-0">
              Join Waitlist
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
