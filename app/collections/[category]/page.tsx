import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MOCK_PRODUCTS } from "@/lib/mock-data";
import { ProductCard } from "@/components/product/product-card";
import { ChevronRight } from "lucide-react";

interface CategoryPageProps {
  params: Promise<{
    category: string;
  }>;
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { category } = await params;
  const decodedCategory = decodeURIComponent(category).toLowerCase();

  // Filter products matching category
  const filteredProducts = MOCK_PRODUCTS.filter((product) => {
    const prodCat = product.category.toLowerCase();
    if (decodedCategory === "men") {
      return prodCat.includes("men") && !prodCat.includes("women");
    }
    if (decodedCategory === "women") {
      return prodCat.includes("women");
    }
    if (decodedCategory === "all") {
      return true;
    }
    return prodCat.includes(decodedCategory);
  });

  const categoryTitles: Record<string, string> = {
    men: "Men's Athletic Wear & Gym Clothes",
    women: "Women's Workout Clothes & Leggings",
    all: "All Conditioning Essentials",
    accessories: "Gym Accessories & Lifting Gear",
  };

  const title =
    categoryTitles[decodedCategory] ||
    `${decodedCategory.charAt(0).toUpperCase() + decodedCategory.slice(1)} Collection`;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col gap-8">
      {/* Breadcrumb Navigation */}
      <nav className="flex items-center gap-2 text-xs font-semibold text-neutral-400 uppercase tracking-wider">
        <Link href="/" className="hover:text-white transition-colors">
          Home
        </Link>
        <ChevronRight className="w-3.5 h-3.5 text-neutral-600" />
        <span className="text-white">
          {decodedCategory.charAt(0).toUpperCase() + decodedCategory.slice(1)}
        </span>
      </nav>

      {/* Category Header */}
      <div className="border-b border-white/10 pb-6 flex flex-col gap-2">
        <h1 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-white">
          {title}
        </h1>
        <p className="text-xs sm:text-sm text-neutral-400">
          Showing {filteredProducts.length} high-performance style
          {filteredProducts.length === 1 ? "" : "s"} engineered for conditioning.
        </p>
      </div>

      {/* Product Grid or Empty State */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20 flex flex-col items-center gap-4 bg-gymshark-dark rounded-2xl border border-white/5">
          <p className="text-neutral-400 text-sm">
            No products found matching &ldquo;{decodedCategory}&rdquo;.
          </p>
          <Link
            href="/"
            className="text-xs font-bold uppercase tracking-wider bg-white text-black px-6 py-3 rounded-full hover:bg-neutral-200 transition-colors"
          >
            Return to Homepage
          </Link>
        </div>
      )}
    </div>
  );
}
