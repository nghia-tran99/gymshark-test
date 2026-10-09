"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useCart } from "@/context/cart-context";
import { ShoppingBag, Search, User, Menu, X, ArrowRight } from "lucide-react";

export function Navbar() {
  const { totalItems, openCart } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.location.href = `/collections/all?q=${encodeURIComponent(searchQuery.trim())}`;
    }
  };

  return (
    <>
      {/* 1. Official Gymshark EU Top Announcement Bar */}
      <div className="bg-[#F5F5F5] border-b border-neutral-200 text-center py-2 px-4 text-[11px] font-bold tracking-wider uppercase text-neutral-800 flex items-center justify-center gap-2">
        <span className="flex items-center gap-1.5">
          <span className="text-gymshark-teal text-xs">⚡</span>
          <span>FREE STANDARD DELIVERY OVER €50</span>
        </span>
        <span className="text-neutral-400">·</span>
        <span>FREE 30-DAY RETURNS</span>
        <span className="text-neutral-400 hidden sm:inline">·</span>
        <span className="text-black font-black hidden sm:inline">OFFICIAL EU STORE (€)</span>
      </div>

      {/* 2. Global Clean Light Navigation Header */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          {/* Left: Mobile Menu & Official Wordmark Logo */}
          <div className="flex items-center gap-6">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-neutral-800 hover:text-black p-1"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>

            <Link href="/" className="flex items-center gap-2 group">
              {/* Official Gymshark Black Wordmark Logo */}
              <div className="relative h-5 w-28 sm:w-32">
                <Image
                  src="https://cdn.gymshark.com/images/branding/gs-logo-black-text-only-form.png"
                  alt="Gymshark Official Store"
                  fill
                  priority
                  className="object-contain object-left"
                />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8 text-xs font-bold uppercase tracking-wider text-neutral-700">
              <Link href="/collections/women" className="hover:text-black transition-colors">
                Women
              </Link>
              <Link href="/collections/men" className="hover:text-black transition-colors">
                Men
              </Link>
              <Link href="/collections/accessories" className="hover:text-black transition-colors">
                Accessories
              </Link>
              <Link
                href="/collections/all"
                className="text-red-600 hover:text-red-700 transition-colors flex items-center gap-1"
              >
                <span>New Drops</span>
              </Link>
            </nav>
          </div>

          {/* Right: Actions */}
          <div className="flex items-center gap-3 sm:gap-4 text-neutral-700">
            {/* Search Toggle */}
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="hover:text-black transition-colors p-1.5"
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* Account Icon */}
            <button
              className="hover:text-black transition-colors p-1.5 hidden sm:block"
              aria-label="Account"
            >
              <User className="w-5 h-5" />
            </button>

            {/* Bag Button with Dynamic Count */}
            <button
              onClick={openCart}
              className="hover:text-black transition-colors p-1.5 relative group"
              aria-label="Open Shopping Bag"
            >
              <ShoppingBag className="w-5 h-5 text-black group-hover:scale-105 transition-transform" />
              <span className="absolute -top-1 -right-1 bg-black text-white text-[10px] font-black rounded-full w-4 h-4 flex items-center justify-center transition-transform group-hover:scale-110">
                {totalItems}
              </span>
            </button>
          </div>
        </div>

        {/* Expandable Search Bar */}
        {searchOpen && (
          <div className="border-t border-neutral-200 bg-neutral-50 px-4 py-3 animate-in fade-in slide-in-from-top-2 duration-200">
            <form onSubmit={handleSearchSubmit} className="max-w-2xl mx-auto flex items-center gap-2">
              <Search className="w-4 h-4 text-neutral-400 shrink-0" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search products, collections, fits (e.g. Adapt, Conditioning, Leggings)..."
                className="bg-white border border-neutral-300 rounded-full px-4 py-1.5 text-xs text-black placeholder-neutral-400 focus:outline-none focus:border-black w-full"
                autoFocus
              />
              <button
                type="submit"
                className="text-xs font-bold text-white bg-black hover:bg-neutral-800 px-4 py-1.5 rounded-full transition-colors shrink-0"
              >
                Search
              </button>
              <button
                type="button"
                onClick={() => setSearchOpen(false)}
                className="text-neutral-500 hover:text-black p-1"
              >
                <X className="w-4 h-4" />
              </button>
            </form>
          </div>
        )}

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-neutral-200 bg-white px-6 py-6 flex flex-col gap-4 animate-in slide-in-from-top-4 duration-200 shadow-xl">
            <Link
              href="/collections/women"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-black uppercase tracking-wider text-black flex items-center justify-between py-2 border-b border-neutral-100"
            >
              <span>Women</span>
              <ArrowRight className="w-4 h-4 text-neutral-400" />
            </Link>
            <Link
              href="/collections/men"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-black uppercase tracking-wider text-black flex items-center justify-between py-2 border-b border-neutral-100"
            >
              <span>Men</span>
              <ArrowRight className="w-4 h-4 text-neutral-400" />
            </Link>
            <Link
              href="/collections/accessories"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-black uppercase tracking-wider text-black flex items-center justify-between py-2 border-b border-neutral-100"
            >
              <span>Accessories</span>
              <ArrowRight className="w-4 h-4 text-neutral-400" />
            </Link>
            <Link
              href="/collections/all"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-black uppercase tracking-wider text-red-600 flex items-center justify-between py-2"
            >
              <span>All Drops</span>
              <ArrowRight className="w-4 h-4 text-red-600" />
            </Link>
          </div>
        )}
      </header>
    </>
  );
}
