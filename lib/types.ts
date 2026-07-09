export interface Product {
  id: string;
  slug: string;
  name: string;
  category: string;
  gender: "Masculine" | "Feminine" | "Unisex";
  family: string;
  price: number;
  compareAtPrice: number | null;
  size: string;
  rating: number;
  reviewCount: number;
  bestseller: boolean;
  new: boolean;
  shortDescription: string;
  inspiredBy: string;
  story: string;
  notes: {
    top: string[];
    middle: string[];
    base: string[];
  };
  images: string[];
  longevity: string;
  sillage: string;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  product: string;
  quote: string;
}

export interface FAQ {
  q: string;
  a: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}
