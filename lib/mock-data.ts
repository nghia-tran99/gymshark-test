export interface Product {
  id: string;
  name: string;
  category: string;
  collection: string;
  price: number;
  originalPrice?: number;
  fit: string;
  colors: string[];
  sizes: string[];
  image: string;
  hoverImage: string;
  badge?: string;
  isNew?: boolean;
}

export const MOCK_PRODUCTS: Product[] = [
  {
    id: "prod-1",
    name: "Adapt Solid Seamless Leggings",
    category: "Women's Workout Clothes",
    collection: "Adapt Solid",
    price: 55,
    originalPrice: 65,
    fit: "High Waisted",
    colors: ["#141414", "#4a5d4e", "#8b3a42"],
    sizes: ["XS", "S", "M", "L", "XL"],
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=800&q=80",
    hoverImage: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=800&q=80",
    badge: "New in: Adapt",
    isNew: true,
  },
  {
    id: "prod-2",
    name: "Adapt Solid Seamless Sports Bra",
    category: "Women's Workout Clothes",
    collection: "Adapt Solid",
    price: 38,
    fit: "Medium Support",
    colors: ["#141414", "#4a5d4e", "#8b3a42"],
    sizes: ["XS", "S", "M", "L"],
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=800&q=80",
    hoverImage: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=800&q=80",
    badge: "New In",
    isNew: true,
  },
  {
    id: "prod-3",
    name: "Conditioning Club Washed T-Shirt",
    category: "Men's Gym Clothes",
    collection: "Conditioning Club",
    price: 42,
    originalPrice: 50,
    fit: "Oversized Fit",
    colors: ["#1e1e1e", "#3a3835", "#5c5b59"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    image: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?auto=format&fit=crop&w=800&q=80",
    hoverImage: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=800&q=80",
    badge: "Hybrid Training",
    isNew: true,
  },
  {
    id: "prod-4",
    name: "Conditioning Club Heavyweight Hoodie",
    category: "Men's Gym Clothes",
    collection: "Conditioning Club",
    price: 68,
    fit: "Boxy Oversized",
    colors: ["#141414", "#3d3b37"],
    sizes: ["S", "M", "L", "XL"],
    image: "https://images.unsplash.com/photo-1556906781-9a412961c28c?auto=format&fit=crop&w=800&q=80",
    hoverImage: "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=800&q=80",
    badge: "Bestseller",
    isNew: false,
  },
  {
    id: "prod-5",
    name: "CottonMove™ Relaxed Zip Jacket",
    category: "Women's Workout Clothes",
    collection: "CottonMove",
    price: 60,
    fit: "Relaxed Fit",
    colors: ["#e5e3df", "#1f1f1f"],
    sizes: ["XS", "S", "M", "L"],
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80",
    hoverImage: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=800&q=80",
    badge: "Trending",
    isNew: true,
  },
  {
    id: "prod-6",
    name: "Power Stringer Drop Arm Tank",
    category: "Men's Gym Clothes",
    collection: "Power Lifting",
    price: 32,
    originalPrice: 38,
    fit: "Athletic Cut",
    colors: ["#0b0b0b", "#991b1b", "#ffffff"],
    sizes: ["S", "M", "L", "XL"],
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80",
    hoverImage: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?auto=format&fit=crop&w=800&q=80",
    badge: "Lifting",
    isNew: false,
  },
  {
    id: "prod-7",
    name: "Lifting Straps & Grip Pads",
    category: "Accessories",
    collection: "Lifting Essentials",
    price: 22,
    fit: "One Size",
    colors: ["#000000"],
    sizes: ["OS"],
    image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80",
    hoverImage: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?auto=format&fit=crop&w=800&q=80",
    badge: "Essentials",
    isNew: false,
  },
  {
    id: "prod-8",
    name: "Vital Seamless 2.0 1/4 Zip Pullover",
    category: "Men's Gym Clothes",
    collection: "Vital Seamless",
    price: 48,
    fit: "Slim Fit",
    colors: ["#1e293b", "#0f172a"],
    sizes: ["S", "M", "L", "XL"],
    image: "https://images.unsplash.com/photo-1584865288642-42078afe6942?auto=format&fit=crop&w=800&q=80",
    hoverImage: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?auto=format&fit=crop&w=800&q=80",
    badge: "Classic",
    isNew: false,
  },
];
