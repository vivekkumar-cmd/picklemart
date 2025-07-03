import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Star, Heart, ShoppingCart, Award } from 'lucide-react';
import { Product } from '../../store/slices/productsSlice';
import { addToCart } from '../../store/slices/cartSlice';

interface ProductCardProps {
  product: Product;
  className?: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, className = '' }) => {
  const dispatch = useDispatch();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    dispatch(addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.images[0],
      quantity: 1,
      sellerId: product.sellerId,
      sellerName: product.sellerName,
      spiceLevel: product.spiceLevel,
      size: product.sizes[0]?.size || '250g'
    }));
  };

  const renderSpiceLevel = (level: number) => {
    return '🌶️'.repeat(level) + '🌶️'.repeat(5 - level).replace(/🌶️/g, '⚪');
  };

  const discountPercentage = product.originalPrice 
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <Link to={`/product/${product.id}`}>
      <div className={`bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group ${className}`}>
        <div className="relative">
          <img
            src={product.images[0]}
            alt={product.name}
            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
          />
          
          {discountPercentage > 0 && (
            <div className="absolute top-3 left-3 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
              {discountPercentage}% OFF
            </div>
          )}
          
          {product.tags.includes('organic') && (
            <div className="absolute top-3 right-3 bg-green-500 text-white p-1 rounded-full">
              <Award size={16} />
            </div>
          )}
          
          <button className="absolute top-3 right-12 p-2 bg-white rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-red-50 hover:text-red-500">
            <Heart size={16} />
          </button>
        </div>

        <div className="p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs text-emerald-600 font-medium bg-emerald-50 px-2 py-1 rounded-full">
              {product.category}
            </span>
            <div className="text-xs" title={`Spice Level: ${product.spiceLevel}/5`}>
              {renderSpiceLevel(product.spiceLevel)}
            </div>
          </div>

          <h3 className="font-semibold text-gray-900 mb-1 line-clamp-2 group-hover:text-emerald-600 transition-colors">
            {product.name}
          </h3>
          
          <p className="text-sm text-gray-600 mb-2 line-clamp-2">
            {product.description}
          </p>

          <div className="flex items-center mb-2">
            <div className="flex items-center">
              <Star className="w-4 h-4 text-yellow-400 fill-current" />
              <span className="text-sm font-medium text-gray-700 ml-1">{product.rating}</span>
              <span className="text-sm text-gray-500 ml-1">({product.reviewCount})</span>
            </div>
            <span className="text-xs text-gray-500 ml-auto">{product.region}</span>
          </div>

          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center space-x-2">
              <span className="text-lg font-bold text-gray-900">₹{product.price}</span>
              {product.originalPrice && (
                <span className="text-sm text-gray-500 line-through">₹{product.originalPrice}</span>
              )}
            </div>
            <span className="text-xs text-gray-500">by {product.sellerName}</span>
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={handleAddToCart}
              className="flex-1 bg-emerald-600 text-white py-2 px-4 rounded-lg hover:bg-emerald-700 transition-colors flex items-center justify-center space-x-2 text-sm font-medium"
            >
              <ShoppingCart size={16} />
              <span>Add to Cart</span>
            </button>
            <button className="px-3 py-2 border border-emerald-600 text-emerald-600 rounded-lg hover:bg-emerald-50 transition-colors text-sm font-medium">
              Quick View
            </button>
          </div>

          {!product.inStock && (
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center rounded-xl">
              <span className="text-white font-semibold bg-red-600 px-4 py-2 rounded-lg">
                Out of Stock
              </span>
            </div>
          )}
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;