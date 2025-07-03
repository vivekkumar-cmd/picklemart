import { Product } from '../store/slices/productsSlice';

export const mockProducts: Product[] = [
  {
    id: '1',
    name: 'Authentic Rajasthani Mango Pickle',
    description: 'Traditional homemade mango pickle from Rajasthan, made with fresh raw mangoes and aromatic spices. Perfect blend of tanginess and spice.',
    price: 299,
    originalPrice: 349,
    images: [
      'https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'Traditional',
    spiceLevel: 4,
    region: 'Rajasthan',
    brand: 'Dadi Maa\'s Kitchen',
    ingredients: ['Raw Mango', 'Mustard Oil', 'Red Chili', 'Turmeric', 'Fenugreek', 'Asafoetida'],
    nutritionalInfo: {
      calories: 45,
      protein: 1.2,
      carbs: 8.5,
      fat: 2.1,
      sodium: 890
    },
    rating: 4.8,
    reviewCount: 245,
    inStock: true,
    stockQuantity: 50,
    sellerId: 'seller1',
    sellerName: 'Dadi Maa\'s Kitchen',
    tags: ['traditional', 'homemade', 'spicy', 'mango'],
    sizes: [
      { size: '250g', price: 299 },
      { size: '500g', price: 549 },
      { size: '1kg', price: 999 }
    ]
  },
  {
    id: '2',
    name: 'Bengali Sweet & Sour Mixed Pickle',
    description: 'Delicious Bengali-style mixed vegetable pickle with the perfect balance of sweet and sour flavors. Made with seasonal vegetables.',
    price: 279,
    originalPrice: 329,
    images: [
      'https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'Sweet',
    spiceLevel: 2,
    region: 'West Bengal',
    brand: 'Ma\'s Special',
    ingredients: ['Mixed Vegetables', 'Jaggery', 'Mustard Seeds', 'Ginger', 'Green Chili', 'Turmeric'],
    nutritionalInfo: {
      calories: 38,
      protein: 0.8,
      carbs: 9.2,
      fat: 1.5,
      sodium: 650
    },
    rating: 4.6,
    reviewCount: 189,
    inStock: true,
    stockQuantity: 35,
    sellerId: 'seller2',
    sellerName: 'Ma\'s Special',
    tags: ['sweet', 'sour', 'bengali', 'mixed'],
    sizes: [
      { size: '300g', price: 279 },
      { size: '600g', price: 519 }
    ]
  },
  {
    id: '3',
    name: 'Fiery South Indian Lime Pickle',
    description: 'Authentic South Indian lime pickle bursting with flavors. Made with fresh limes, red chilies, and traditional South Indian spices.',
    price: 249,
    images: [
      'https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'Spicy',
    spiceLevel: 5,
    region: 'Tamil Nadu',
    brand: 'Amma\'s Recipe',
    ingredients: ['Fresh Lime', 'Red Chili Powder', 'Sesame Oil', 'Mustard Seeds', 'Curry Leaves', 'Salt'],
    nutritionalInfo: {
      calories: 42,
      protein: 1.0,
      carbs: 7.8,
      fat: 2.3,
      sodium: 920
    },
    rating: 4.9,
    reviewCount: 312,
    inStock: true,
    stockQuantity: 28,
    sellerId: 'seller3',
    sellerName: 'Amma\'s Recipe',
    tags: ['spicy', 'lime', 'south indian', 'traditional'],
    sizes: [
      { size: '200g', price: 249 },
      { size: '400g', price: 459 }
    ]
  },
  {
    id: '4',
    name: 'Organic Mixed Fruit Pickle',
    description: 'Premium organic mixed fruit pickle made with seasonal fruits. No artificial preservatives, completely natural and healthy.',
    price: 399,
    images: [
      'https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'Organic',
    spiceLevel: 3,
    region: 'Kerala',
    brand: 'Pure Organic',
    ingredients: ['Mixed Seasonal Fruits', 'Rock Salt', 'Organic Spices', 'Cold Pressed Oil'],
    nutritionalInfo: {
      calories: 52,
      protein: 1.5,
      carbs: 11.2,
      fat: 1.8,
      sodium: 480
    },
    rating: 4.7,
    reviewCount: 156,
    inStock: true,
    stockQuantity: 42,
    sellerId: 'seller4',
    sellerName: 'Pure Organic',
    tags: ['organic', 'healthy', 'mixed fruit', 'natural'],
    sizes: [
      { size: '250g', price: 399 },
      { size: '500g', price: 729 }
    ]
  }
];

export const mockCategories = [
  { id: 'spicy', name: 'Spicy', icon: '🌶️', count: 45 },
  { id: 'sweet', name: 'Sweet', icon: '🍯', count: 23 },
  { id: 'tangy', name: 'Tangy', icon: '🍋', count: 34 },
  { id: 'fermented', name: 'Fermented', icon: '🥒', count: 18 },
  { id: 'fruit-based', name: 'Fruit-based', icon: '🥭', count: 29 },
  { id: 'traditional', name: 'Traditional', icon: '🏺', count: 52 },
  { id: 'organic', name: 'Organic', icon: '🌱', count: 21 }
];