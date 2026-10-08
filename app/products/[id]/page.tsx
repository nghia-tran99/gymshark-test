import React from "react";
import { notFound } from "next/navigation";
import { MOCK_PRODUCTS } from "@/lib/mock-data";
import { ProductDetailView } from "@/components/product/product-detail-view";
import type { Metadata } from "next";

interface ProductPageProps {
  params: Promise<{
    id: string;
  }>;
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { id } = await params;
  const product = MOCK_PRODUCTS.find((p) => p.id === id);

  if (!product) {
    return {
      title: "Product Not Found | Gymshark",
    };
  }

  return {
    title: `${product.name} | Gymshark`,
    description: `Shop ${product.name} (${product.fit}) - $${product.price}. High performance athletic wear.`,
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params;
  const product = MOCK_PRODUCTS.find((p) => p.id === id);

  if (!product) {
    notFound();
  }

  return <ProductDetailView product={product} />;
}
