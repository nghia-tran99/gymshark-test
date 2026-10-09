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
      <body className="bg-gymshark-black text-white min-h-screen flex flex-col antialiased">
        <CartProvider>
          {/* Global Header & Announcement */}
          <Navbar />

          {/* Slide-over Cart Drawer */}
          <CartDrawer />

          {/* Main View */}
          <main className="flex-1">{children}</main>

          {/* Official Gymshark EU Multi-Column Footer */}
          <footer className="bg-gymshark-dark border-t border-white/10 mt-20 text-neutral-400">
            {/* Top Footer Columns */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 grid grid-cols-2 md:grid-cols-4 gap-8 text-xs">
              <div className="flex flex-col gap-3">
                <h4 className="font-black text-white uppercase tracking-wider text-xs">Help & Support</h4>
                <Link href="#" className="hover:text-white transition-colors">FAQ & Contact Us</Link>
                <Link href="#" className="hover:text-white transition-colors">Delivery Information</Link>
                <Link href="#" className="hover:text-white transition-colors">Returns & Refunds</Link>
                <Link href="#" className="hover:text-white transition-colors">Track My Order</Link>
              </div>

              <div className="flex flex-col gap-3">
                <h4 className="font-black text-white uppercase tracking-wider text-xs">My Account</h4>
                <Link href="#" className="hover:text-white transition-colors">Sign In / Register</Link>
                <Link href="#" className="hover:text-white transition-colors">Order History</Link>
                <Link href="#" className="hover:text-white transition-colors">Wishlist</Link>
                <Link href="#" className="hover:text-white transition-colors">Student Discount (10% Off)</Link>
              </div>

              <div className="flex flex-col gap-3">
                <h4 className="font-black text-white uppercase tracking-wider text-xs">Pages & Guides</h4>
                <Link href="#" className="hover:text-white transition-colors">Leggings Guide</Link>
                <Link href="#" className="hover:text-white transition-colors">Sports Bra Guide</Link>
                <Link href="#" className="hover:text-white transition-colors">Gymshark Running Hub</Link>
                <Link href="#" className="hover:text-white transition-colors">Conditioning Club</Link>
              </div>

              <div className="flex flex-col gap-3">
                <h4 className="font-black text-white uppercase tracking-wider text-xs">About Gymshark</h4>
                <Link href="#" className="hover:text-white transition-colors">About Us</Link>
                <Link href="#" className="hover:text-white transition-colors">Sustainability & Ethics</Link>
                <Link href="#" className="hover:text-white transition-colors">Careers</Link>
                <Link href="#" className="hover:text-white transition-colors">Gymshark Central</Link>
              </div>
            </div>

            {/* Bottom Bar with Payment Badges & Legal */}
            <div className="border-t border-white/10 py-8 px-4 sm:px-6 lg:px-8">
              <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-[11px]">
                {/* Brand & Copyright */}
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-white text-black flex items-center justify-center font-black rounded-sm text-xs">
                    ▲
                  </div>
                  <span>
                    © {new Date().getFullYear()} Gymshark Limited. All rights reserved. Recreated for Web Studio.
                  </span>
                </div>

                {/* Accepted Payment Badges */}
                <div className="flex items-center gap-2 flex-wrap justify-center">
                  <span className="bg-white/10 text-white px-2.5 py-1 rounded text-[10px] font-bold">
                    Apple Pay
                  </span>
                  <span className="bg-white/10 text-white px-2.5 py-1 rounded text-[10px] font-bold">
                    Klarna
                  </span>
                  <span className="bg-white/10 text-white px-2.5 py-1 rounded text-[10px] font-bold">
                    PayPal
                  </span>
                  <span className="bg-white/10 text-white px-2.5 py-1 rounded text-[10px] font-bold">
                    Visa
                  </span>
                  <span className="bg-white/10 text-white px-2.5 py-1 rounded text-[10px] font-bold">
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
