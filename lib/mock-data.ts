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
    colors: ["#3F584C", "#141414", "#8B3A42"],
    sizes: ["XS", "S", "M", "L", "XL"],
    image: "https://cdn.shopify.com/s/files/1/1367/5201/files/Adapt_Solid_Leggings_GS_Sprint_green_B7B1Q_EDJT_01_1080x.jpg",
    hoverImage: "https://cdn.shopify.com/s/files/1/1367/5201/files/Adapt_Solid_Leggings_GS_Sprint_green_B7B1Q_EDJT_01_1200x.jpg",
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
    colors: ["#3F584C", "#141414", "#8B3A42"],
    sizes: ["XS", "S", "M", "L"],
    image: "https://cdn.shopify.com/s/files/1/1367/5201/files/Adapt_Solid_Sports_Bra_Gs_Sprint_Green_B7C4M_EDJT_01_1080x.jpg",
    hoverImage: "https://cdn.shopify.com/s/files/1/1367/5201/files/Adapt_Solid_Sports_Bra_Gs_Sprint_Green_B7C4M_EDJT_01_1200x.jpg",
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
    colors: ["#5D493D", "#1E1E1E", "#6E6D68"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    image: "https://cdn.shopify.com/s/files/1/1367/5201/files/ConditioningClubWashedT_ShirtGSTrailBrownGSVanillaBeigeWASHA4C5N_NDRT_0252_3840x.jpg",
    hoverImage: "https://cdn.shopify.com/s/files/1/1367/5201/files/ConditioningClubWashedLongSleeveT_ShirtGSTrailBrownGSVanillaBeigeWASHA5B9N_NDRT_0084.jpg",
    badge: "Hybrid Training",
    isNew: true,
  },
  {
    id: "prod-4",
    name: "Adapt Solid Seamless Shorts",
    category: "Women's Workout Clothes",
    collection: "Adapt Solid",
    price: 45,
    fit: "Seamless Knit",
    colors: ["#3F584C", "#141414", "#8B3A42"],
    sizes: ["XS", "S", "M", "L"],
    image: "https://cdn.shopify.com/s/files/1/1367/5201/files/Adapt_Solid_Shorts_Gs_Sprint_Green_B7C3M_EDJT_01_1080x.jpg",
    hoverImage: "https://cdn.shopify.com/s/files/1/1367/5201/files/Adapt_Solid_Shorts_GS_Sprint_green_B7B4C_EDJT_1_3840x.jpg",
    badge: "New in: Adapt",
    isNew: true,
  },
  {
    id: "prod-5",
    name: "Conditioning Club Oversized T-Shirt",
    category: "Men's Gym Clothes",
    collection: "Conditioning Club",
    price: 40,
    fit: "Boxy Oversized",
    colors: ["#FFFFFF", "#1E1E1E", "#3A3835"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    image: "https://cdn.shopify.com/s/files/1/1367/5201/files/images-ConditioningClubOversizedT_ShirtGSWhiteA2B5Y_WB57_0460_e020ef1d-b06c-4c29-aa42-c96c5173173e_3840x.jpg",
    hoverImage: "https://cdn.shopify.com/s/files/1/1367/5201/files/images-ConditioningClubOversizedT_ShirtGSWhiteA2B5Y_WB57_0470_d74b6b4b-d126-4b47-bba4-4a6eceb1fb95.jpg",
    badge: "Bestseller",
    isNew: true,
  },
  {
    id: "prod-6",
    name: "Adapt Solid Halter Neck Tank",
    category: "Women's Workout Clothes",
    collection: "Adapt Solid",
    price: 36,
    fit: "Slim Fit",
    colors: ["#3F584C", "#141414"],
    sizes: ["XS", "S", "M", "L"],
    image: "https://cdn.shopify.com/s/files/1/1367/5201/files/Adapt_Solid_Halter_Neck_Tank_Gs_Sprint_Green_B7C3S_EDJT_01_1080x.jpg",
    hoverImage: "https://cdn.shopify.com/s/files/1/1367/5201/files/Adapt_Solid_Halterneck_Top_GS_Sprint_green_B7B9M_EDJT_1_3840x.jpg",
    badge: "New in: Adapt",
    isNew: true,
  },
  {
    id: "prod-7",
    name: "Conditioning Club Washed Tank",
    category: "Men's Gym Clothes",
    collection: "Conditioning Club",
    price: 34,
    fit: "Drop Arm Tank",
    colors: ["#1E1E1E", "#5D493D"],
    sizes: ["S", "M", "L", "XL"],
    image: "https://cdn.shopify.com/s/files/1/1367/5201/files/images-ConditioningClubWashedTankGSBlackGSBlackWASHA4C3Z_BDQV_0271_V1_3840x.jpg",
    hoverImage: "https://cdn.shopify.com/s/files/1/1367/5201/files/images-ConditioningClubWashedT_ShirtGSBlackGSBlackWASHA4C5N_BDQV_0331_V1_3840x.jpg",
    badge: "Heavyweight Cotton",
    isNew: false,
  },
  {
    id: "prod-8",
    name: "Adapt Solid Seamless Knit Jacket",
    category: "Women's Workout Clothes",
    collection: "Adapt Solid",
    price: 60,
    fit: "Form-Fitting Full Zip",
    colors: ["#3F584C", "#141414"],
    sizes: ["XS", "S", "M", "L", "XL"],
    image: "https://cdn.shopify.com/s/files/1/1367/5201/files/Adapt_Solid_Jacket_GS_Sprint_green_B7C1J_EDJT_1_3840x.jpg",
    hoverImage: "https://cdn.shopify.com/s/files/1/1367/5201/files/Adapt_Solid_Zip_Up_Top_GS_Sprint_green_B7B9L_EDJT_1_3840x.jpg",
    badge: "New In",
    isNew: true,
  },
];
