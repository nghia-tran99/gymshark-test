import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";
import { ShoppingBag, Search, User, Menu } from "lucide-react";

export const metadata: Metadata = {
  title: "Gymshark Clone | Athletic Wear & Conditioning",
  description: "High-performance athletic apparel built on Next.js 15 and deployed on Vercel.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-gymshark-black text-white min-h-screen flex flex-col antialiased">
        {/* Top Announcement Bar */}
        <div className="bg-neutral-900 border-b border-white/10 text-center py-2 px-4 text-[11px] font-semibold tracking-wider uppercase text-neutral-300">
          ⚡ Free Standard Shipping Over $75 · Free 30-Day Returns
        </div>

        {/* Global Navigation Header */}
        <header className="sticky top-0 z-50 bg-gymshark-black/95 backdrop-blur-md border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
            {/* Left: Mobile Menu & Logo */}
            <div className="flex items-center gap-6">
              <button className="md:hidden text-neutral-300 hover:text-white">
                <Menu className="w-5 h-5" />
              </button>

              <Link href="/" className="flex items-center gap-2 group">
                {/* Minimalist Shark Fin Icon */}
                <div className="w-7 h-7 bg-white text-black flex items-center justify-center font-black rounded-sm group-hover:bg-neutral-200 transition-colors">
                  ▲
                </div>
                <span className="font-black text-xl tracking-tighter uppercase">
                  GYMSHARK
                </span>
              </Link>

              {/* Desktop Nav Links */}
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
                <Link href="/collections/all" className="text-red-500 hover:text-red-400 transition-colors">
                  All Drops
                </Link>
              </nav>
            </div>

            {/* Right: Actions */}
            <div className="flex items-center gap-4 text-neutral-300">
              <button className="hover:text-white transition-colors p-1.5" aria-label="Search">
                <Search className="w-5 h-5" />
              </button>
              <button className="hover:text-white transition-colors p-1.5 hidden sm:block" aria-label="Account">
                <User className="w-5 h-5" />
              </button>
              <button className="hover:text-white transition-colors p-1.5 relative" aria-label="Bag">
                <ShoppingBag className="w-5 h-5" />
                <span className="absolute -top-1 -right-1 bg-white text-black text-[10px] font-black rounded-full w-4 h-4 flex items-center justify-center">
                  0
                </span>
              </button>
            </div>
          </div>
        </header>

        {/* Main Page Body */}
        <main className="flex-1">{children}</main>

        {/* Global Footer */}
        <footer className="bg-gymshark-dark border-t border-white/10 mt-20 py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-neutral-400">
            <div className="flex items-center gap-2">
              <span className="font-bold text-white uppercase tracking-wider">GYMSHARK TEST STORE</span>
              <span>· Built with Next.js 15 + Tailwind CSS</span>
            </div>
            <div className="flex gap-6 uppercase tracking-wider text-[11px]">
              <Link href="#" className="hover:text-white">Help & FAQs</Link>
              <Link href="#" className="hover:text-white">Delivery Information</Link>
              <Link href="#" className="hover:text-white">Returns Policy</Link>
            </div>
            <p className="text-[11px] text-neutral-500">
              © {new Date().getFullYear()} Gymshark Prototype on Vercel.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
