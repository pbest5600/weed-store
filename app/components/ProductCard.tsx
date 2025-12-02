// app/components/ProductCard.tsx
import { ShoppingCart, Star } from 'lucide-react';
import { Link } from 'react-router';
import type { FC } from 'react';

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewCount: number;
  image: string;
  strain: 'Indica' | 'Sativa' | 'Hybrid' | 'CBD';
  inStock?: boolean;
}

const ProductCard: FC<ProductCardProps> = ({
  id,
  name,
  price,
  originalPrice,
  rating,
  reviewCount,
  image,
  strain,
  inStock = true,
}) => {
  const discount = originalPrice ? Math.round(((originalPrice - price) / originalPrice) * 100) : 0;

  const strainColors = {
    Indica: 'bg-purple-100 text-purple-800',
    Sativa: 'bg-green-100 text-green-800',
    Hybrid: 'bg-blue-100 text-blue-800',
    CBD: 'bg-yellow-100 text-yellow-800',
  };

  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden group">
      {/* Image Container */}
      <Link to={`/product/${id}`} className="block relative">
        <div className="aspect-square bg-gray-100 overflow-hidden">
          <div className="w-full h-full flex items-center justify-center text-6xl">
            {image || '🌿'}
          </div>
        </div>
        
        {/* Badges */}
        <div className="absolute top-3 left-3 flex gap-2">
          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${strainColors[strain]}`}>
            {strain}
          </span>
          {discount > 0 && (
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-red-500 text-white">
              -{discount}%
            </span>
          )}
        </div>

        {!inStock && (
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <span className="bg-white px-4 py-2 rounded-full font-semibold text-gray-900">
              Out of Stock
            </span>
          </div>
        )}
      </Link>

      {/* Content */}
      <div className="p-4">
        <Link to={`/product/${id}`} className="block mb-2">
          <h3 className="font-semibold text-gray-900 hover:text-emerald-600 transition line-clamp-2">
            {name}
          </h3>
        </Link>

        {/* Rating */}
        <div className="flex items-center gap-2 mb-3">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${
                  i < Math.floor(rating)
                    ? 'fill-yellow-400 text-yellow-400'
                    : 'text-gray-300'
                }`}
              />
            ))}
          </div>
          <span className="text-sm text-gray-600">({reviewCount})</span>
        </div>

        {/* Price */}
        <div className="flex items-center gap-2 mb-3">
          <span className="text-2xl font-bold text-emerald-600">
            ${price.toFixed(2)}
          </span>
          {originalPrice && (
            <span className="text-sm text-gray-400 line-through">
              ${originalPrice.toFixed(2)}
            </span>
          )}
        </div>

        {/* Add to Cart Button */}
        <button
          disabled={!inStock}
          className={`w-full py-3 px-4 rounded-full font-semibold transition flex items-center justify-center gap-2 ${
            inStock
              ? 'bg-emerald-600 text-white hover:bg-emerald-700'
              : 'bg-gray-300 text-gray-500 cursor-not-allowed'
          }`}
        >
          <ShoppingCart className="w-4 h-4" />
          {inStock ? 'Add to Cart' : 'Out of Stock'}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;