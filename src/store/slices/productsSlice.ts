import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  images: string[];
  category: string;
  spiceLevel: number;
  region: string;
  brand: string;
  ingredients: string[];
  nutritionalInfo: {
    calories: number;
    protein: number;
    carbs: number;
    fat: number;
    sodium: number;
  };
  rating: number;
  reviewCount: number;
  inStock: boolean;
  stockQuantity: number;
  sellerId: string;
  sellerName: string;
  tags: string[];
  sizes: Array<{ size: string; price: number; }>;
}

interface ProductsState {
  products: Product[];
  categories: string[];
  filters: {
    category: string;
    priceRange: [number, number];
    spiceLevel: number[];
    region: string;
    brand: string;
    inStock: boolean;
  };
  searchQuery: string;
  loading: boolean;
}

const initialState: ProductsState = {
  products: [],
  categories: ['Spicy', 'Sweet', 'Tangy', 'Fermented', 'Fruit-based', 'Traditional', 'Organic'],
  filters: {
    category: '',
    priceRange: [0, 1000],
    spiceLevel: [],
    region: '',
    brand: '',
    inStock: false,
  },
  searchQuery: '',
  loading: false,
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts: (state, action: PayloadAction<Product[]>) => {
      state.products = action.payload;
    },
    setFilters: (state, action: PayloadAction<Partial<typeof initialState.filters>>) => {
      state.filters = { ...state.filters, ...action.payload };
    },
    setSearchQuery: (state, action: PayloadAction<string>) => {
      state.searchQuery = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
  },
});

export const { setProducts, setFilters, setSearchQuery, setLoading } = productsSlice.actions;
export default productsSlice.reducer;