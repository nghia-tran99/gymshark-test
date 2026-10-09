"use client";

import React, { useState } from "react";
import Link from "next/link";
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
      {/* 1. EU Top Announcement Bar */}
      <div className="bg-neutral-900 border-b border-white/10 text-center py-2 px-4 text-[11px] font-bold tracking-wider uppercase text-neutral-300 flex items-center justify-center gap-2">
        <span>⚡ Free Standard Delivery Over €50</span>
        <span className="text-neutral-500">·</span>
        <span>Free 30-Day Returns</span>
        <span className="text-neutral-500 hidden sm:inline">·</span>
        <span className="text-white hidden sm:inline">Official EU Store (€)</span>
      </div>

      {/* 2. Global Navigation Header */}
      <header className="sticky top-0 z-40 bg-gymshark-black/95 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          {/* Left: Mobile Menu Trigger & Logo */}
          <div className="flex items-center gap-6">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-neutral-300 hover:text-white p-1"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>

            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-7 h-7 bg-white text-black flex items-center justify-center font-black rounded-sm group-hover:bg-neutral-200 transition-colors">
                ▲
              </div>
              <span className="font-black text-xl tracking-tighter uppercase text-white">
                GYMSHARK
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8 text-xs font-bold uppercase tracking-wider text-neutral-300">
              <Link href="/collections/women" className="hover:text-white transition-colors">
                Women
              </Link>
              <Link href="/collections/men" className="hover:text-white transition-colors">
                Men
              </Link>
              <Link href="/collections/accessories" className="hover:text-white transition-colors">
                Accessories
              </Link>
              <Link
                href="/collections/all"
                className="text-red-500 hover:text-red-400 transition-colors flex items-center gap-1"
              >
                <span>New Drops</span>
              </Link>
            </nav>
          </div>

          {/* Right: Actions */}
          <div className="flex items-center gap-3 sm:gap-4 text-neutral-300">
            {/* Search Toggle */}
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="hover:text-white transition-colors p-1.5"
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* Account Icon */}
            <button
              className="hover:text-white transition-colors p-1.5 hidden sm:block"
              aria-label="Account"
            >
              <User className="w-5 h-5" />
            </button>

            {/* Bag Button with Dynamic Count */}
            <button
              onClick={openCart}
              className="hover:text-white transition-colors p-1.5 relative group"
              aria-label="Open Shopping Bag"
            >
              <ShoppingBag className="w-5 h-5 group-hover:scale-105 transition-transform" />
              <span className="absolute -top-1 -right-1 bg-white text-black text-[10px] font-black rounded-full w-4 h-4 flex items-center justify-center transition-transform group-hover:scale-110">
                {totalItems}
              </span>
            </button>
          </div>
        </div>

        {/* Expandable Search Bar */}
        {searchOpen && (
          <div className="border-t border-white/10 bg-neutral-950 px-4 py-3 animate-in fade-in slide-in-from-top-2 duration-200">
            <form onSubmit={handleSearchSubmit} className="max-w-2xl mx-auto flex items-center gap-2">
              <Search className="w-4 h-4 text-neutral-500 shrink-0" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search products, collections, fits (e.g. Adapt, Conditioning, Leggings)..."
                className="bg-transparent border-none text-xs text-white placeholder-neutral-500 focus:outline-none w-full py-1"
                autoFocus
              />
              <button
                type="submit"
                className="text-xs font-bold text-white bg-white/10 hover:bg-white/20 px-3 py-1 rounded transition-colors"
              >
                Search
              </button>
              <button
                type="button"
                onClick={() => setSearchOpen(false)}
                className="text-neutral-500 hover:text-white p-1"
              >
                <X className="w-4 h-4" />
              </button>
            </form>
          </div>
        )}

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-white/10 bg-gymshark-dark px-6 py-6 flex flex-col gap-4 animate-in slide-in-from-top-4 duration-200">
            <Link
              href="/collections/women"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-black uppercase tracking-wider text-white flex items-center justify-between py-2 border-b border-white/5"
            >
              <span>Women</span>
              <ArrowRight className="w-4 h-4 text-neutral-500" />
            </Link>
            <Link
              href="/collections/men"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-black uppercase tracking-wider text-white flex items-center justify-between py-2 border-b border-white/5"
            >
              <span>Men</span>
              <ArrowRight className="w-4 h-4 text-neutral-500" />
            </Link>
            <Link
              href="/collections/accessories"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-black uppercase tracking-wider text-white flex items-center justify-between py-2 border-b border-white/5"
            >
              <span>Accessories</span>
              <ArrowRight className="w-4 h-4 text-neutral-500" />
            </Link>
            <Link
              href="/collections/all"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-black uppercase tracking-wider text-red-400 flex items-center justify-between py-2"
            >
              <span>All Drops</span>
              <ArrowRight className="w-4 h-4 text-red-400" />
            </Link>
          </div>
        )}
      </header>
    </>
  );
}
