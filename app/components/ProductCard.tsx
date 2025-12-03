// app/components/ProductCard.tsx
import { Link } from 'react-router';
import { Star, ShoppingCart } from 'lucide-react';
import { useCart } from '~/contexts/CartContext';
import type { FC } from 'react';

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewCount: number;
  image: string;
  strain: 'Indica' | 'Sativa' | 'Hybrid';
  inStock: boolean;
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
  inStock,
}) => {
  const { addItem } = useCart();

  const discount = originalPrice 
    ? Math.round(((originalPrice - price) / originalPrice) * 100) 
    : 0;

  const getStrainColor = (strain: string) => {
    switch (strain) {
      case 'Indica':
        return 'bg-purple-100 text-purple-800';
      case 'Sativa':
        return 'bg-orange-100 text-orange-800';
      case 'Hybrid':
        return 'bg-blue-100 text-blue-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault(); // Prevent navigation if card is wrapped in Link
    addItem({
      id,
      name,
      price,
      image,
    });
  };

  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition group">
      <Link to={`/product/${id}`} className="block">
        {/* Image Section */}
        <div className="relative bg-gray-50 p-8 flex items-center justify-center h-64">
          <div className="text-8xl">{image}</div>
          
          {/* Badges */}
          <div className="absolute top-4 left-4 flex flex-col gap-2">
            {discount > 0 && (
              <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                {discount}% OFF
              </span>
            )}
            <span className={`px-3 py-1 rounded-full text-sm font-semibold ${getStrainColor(strain)}`}>
              {strain}
            </span>
          </div>

          {/* Stock Badge */}
          {!inStock && (
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
              <span className="bg-gray-800 text-white px-4 py-2 rounded-lg font-semibold">
                Out of Stock
              </span>
            </div>
          )}
        </div>

        {/* Content Section */}
        <div className="p-4">
          {/* Product Name */}
          <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2 min-h-[3rem] group-hover:text-emerald-600 transition">
            {name}
          </h3>

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
          <div className="flex items-center gap-2 mb-4">
            <span className="text-2xl font-bold text-emerald-600">
              ${price.toFixed(2)}
            </span>
            {originalPrice && (
              <span className="text-lg text-gray-400 line-through">
                ${originalPrice.toFixed(2)}
              </span>
            )}
          </div>
        </div>
      </Link>

      {/* Add to Cart Button */}
      <div className="px-4 pb-4">
        <button
          onClick={handleAddToCart}
          disabled={!inStock}
          className={`w-full py-3 rounded-full font-semibold transition flex items-center justify-center gap-2 ${
            inStock
              ? 'bg-emerald-600 text-white hover:bg-emerald-700'
              : 'bg-gray-300 text-gray-500 cursor-not-allowed'
          }`}
        >
          <ShoppingCart className="w-5 h-5" />
          {inStock ? 'Add to Cart' : 'Out of Stock'}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
