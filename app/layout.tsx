import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";
import { CartProvider } from "@/context/cart-context";
import { CartDrawer } from "@/components/cart/cart-drawer";
import { Navbar } from "@/components/navigation/navbar";

export const metadata: Metadata = {
  title: "Gymshark Official Store - Gym Clothes & Workout Clothes",
  description:
    "Shop Gymshark's official athletic wear, gym clothes, seamless leggings, and oversized conditioning tees. Free delivery over €50.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-white text-black min-h-screen flex flex-col antialiased">
        <CartProvider>
          {/* Global Light Header & Revolving Announcement */}
          <Navbar />

          {/* Slide-over Cart Drawer */}
          <CartDrawer />

          {/* Main View */}
          <main className="flex-1 bg-white">{children}</main>

          {/* Official Gymshark EU Light Multi-Column Footer */}
          <footer className="bg-[#F5F5F5] border-t border-neutral-200 mt-20 text-neutral-600">
            {/* Top Footer Columns */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 grid grid-cols-2 md:grid-cols-4 gap-8 text-xs">
              <div className="flex flex-col gap-3">
                <h4 className="font-black text-black uppercase tracking-wider text-xs">Help & Support</h4>
                <Link href="#" className="hover:text-black transition-colors">FAQ & Contact Us</Link>
                <Link href="#" className="hover:text-black transition-colors">Delivery Information</Link>
                <Link href="#" className="hover:text-black transition-colors">Returns & Refunds</Link>
                <Link href="#" className="hover:text-black transition-colors">Track My Order</Link>
              </div>

              <div className="flex flex-col gap-3">
                <h4 className="font-black text-black uppercase tracking-wider text-xs">My Account</h4>
                <Link href="#" className="hover:text-black transition-colors">Sign In / Register</Link>
                <Link href="#" className="hover:text-black transition-colors">Order History</Link>
                <Link href="#" className="hover:text-black transition-colors">Wishlist</Link>
                <Link href="#" className="hover:text-black transition-colors">Student Discount (10% Off)</Link>
              </div>

              <div className="flex flex-col gap-3">
                <h4 className="font-black text-black uppercase tracking-wider text-xs">Pages & Guides</h4>
                <Link href="#" className="hover:text-black transition-colors">Leggings Guide</Link>
                <Link href="#" className="hover:text-black transition-colors">Sports Bra Guide</Link>
                <Link href="#" className="hover:text-black transition-colors">Gymshark Running Hub</Link>
                <Link href="#" className="hover:text-black transition-colors">Conditioning Club</Link>
              </div>

              <div className="flex flex-col gap-3">
                <h4 className="font-black text-black uppercase tracking-wider text-xs">About Gymshark</h4>
                <Link href="#" className="hover:text-black transition-colors">About Us</Link>
                <Link href="#" className="hover:text-black transition-colors">Sustainability & Ethics</Link>
                <Link href="#" className="hover:text-black transition-colors">Careers</Link>
                <Link href="#" className="hover:text-black transition-colors">Gymshark Central</Link>
              </div>
            </div>

            {/* Bottom Bar with Payment Badges & Legal */}
            <div className="border-t border-neutral-200 py-8 px-4 sm:px-6 lg:px-8">
              <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-[11px] text-neutral-500">
                {/* Brand & Copyright */}
                <div className="flex items-center gap-2">
                  <span className="font-black text-black tracking-tight uppercase">GYMSHARK</span>
                  <span>·</span>
                  <span>
                    © {new Date().getFullYear()} Gymshark Limited. All rights reserved. Official EU Clone.
                  </span>
                </div>

                {/* Accepted Payment Badges */}
                <div className="flex items-center gap-2 flex-wrap justify-center">
                  <span className="bg-white border border-neutral-300 text-black px-2.5 py-1 rounded-sm text-[10px] font-bold shadow-2xs">
                    Apple Pay
                  </span>
                  <span className="bg-white border border-neutral-300 text-black px-2.5 py-1 rounded-sm text-[10px] font-bold shadow-2xs">
                    Klarna
                  </span>
                  <span className="bg-white border border-neutral-300 text-black px-2.5 py-1 rounded-sm text-[10px] font-bold shadow-2xs">
                    PayPal
                  </span>
                  <span className="bg-white border border-neutral-300 text-black px-2.5 py-1 rounded-sm text-[10px] font-bold shadow-2xs">
                    Visa
                  </span>
                  <span className="bg-white border border-neutral-300 text-black px-2.5 py-1 rounded-sm text-[10px] font-bold shadow-2xs">
                    Mastercard
                  </span>
                </div>
              </div>
            </div>
          </footer>
        </CartProvider>
      </body>
    </html>
  );
}
