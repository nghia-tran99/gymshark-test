export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  originalPrice?: number;
  fit: string;
  colors: string[];
  sizes: string[];
  image: string;
  hoverImage: string;
  badge?: string;
}

export const MOCK_PRODUCTS: Product[] = [
  {
    id: "prod-1",
    name: "Vital Seamless 2.0 T-Shirt",
    category: "Men's Conditioning",
    price: 38,
    originalPrice: 48,
    fit: "Slim Fit",
    colors: ["#1c1c1e", "#3a3a3c", "#48484a"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    image: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?auto=format&fit=crop&w=800&q=80",
    hoverImage: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=800&q=80",
    badge: "Bestseller",
  },
  {
    id: "prod-2",
    name: "Apex Seamless High-Waisted Leggings",
    category: "Women's Lifting",
    price: 64,
    fit: "High Support",
    colors: ["#0b0b0b", "#6366f1", "#059669"],
    sizes: ["XS", "S", "M", "L"],
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=800&q=80",
    hoverImage: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=800&q=80",
    badge: "Trending",
  },
  {
    id: "prod-3",
    name: "Oversized Power Graphic Hoodie",
    category: "Unisex Streetwear",
    price: 58,
    fit: "Oversized Fit",
    colors: ["#141414", "#d1d5db"],
    sizes: ["S", "M", "L", "XL"],
    image: "https://images.unsplash.com/photo-1556906781-9a412961c28c?auto=format&fit=crop&w=800&q=80",
    hoverImage: "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=800&q=80",
    badge: "New Release",
  },
];
