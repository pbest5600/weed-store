// app/components/FeaturedProducts.tsx
import ProductCard from './ProductCard';
import type { FC } from 'react';

const FeaturedProducts: FC = () => {
  // Sample product data - you'll replace this with real data later
  const products = [
    {
      id: '1',
      name: 'Blue Dream - Premium Quality',
      price: 45.00,
      originalPrice: 60.00,
      rating: 4.5,
      reviewCount: 128,
      image: '🌿',
      strain: 'Hybrid' as const,
      inStock: true,
    },
    {
      id: '2',
      name: 'OG Kush - Top Shelf',
      price: 50.00,
      rating: 5,
      reviewCount: 94,
      image: '🍃',
      strain: 'Indica' as const,
      inStock: true,
    },
    {
      id: '3',
      name: 'Sour Diesel - AAA Grade',
      price: 40.00,
      originalPrice: 55.00,
      rating: 4,
      reviewCount: 156,
      image: '🌱',
      strain: 'Sativa' as const,
      inStock: true,
    },
    {
      id: '4',
      name: 'Girl Scout Cookies',
      price: 48.00,
      rating: 4.5,
      reviewCount: 203,
      image: '🌿',
      strain: 'Hybrid' as const,
      inStock: false,
    },
    {
      id: '5',
      name: 'Granddaddy Purple',
      price: 42.00,
      originalPrice: 52.00,
      rating: 4.5,
      reviewCount: 87,
      image: '🍃',
      strain: 'Indica' as const,
      inStock: true,
    },
    {
      id: '6',
      name: 'Green Crack',
      price: 38.00,
      rating: 4,
      reviewCount: 112,
      image: '🌱',
      strain: 'Sativa' as const,
      inStock: true,
    },
    {
      id: '7',
      name: 'CBD Harlequin',
      price: 35.00,
      rating: 4.5,
      reviewCount: 76,
      image: '💊',
      strain: 'CBD' as const,
      inStock: true,
    },
    {
      id: '8',
      name: 'Wedding Cake',
      price: 52.00,
      originalPrice: 65.00,
      rating: 5,
      reviewCount: 145,
      image: '🌿',
      strain: 'Hybrid' as const,
      inStock: true,
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              Best Dispensary to Buy Weed Online in Canada
            </h2>
            <p className="text-gray-600">
              Premium quality cannabis at unbeatable prices
            </p>
          </div>
          <button className="hidden md:block text-emerald-600 hover:text-emerald-700 font-semibold">
            View All →
          </button>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>

        {/* Mobile View All Button */}
        <div className="md:hidden mt-8 text-center">
          <button className="text-emerald-600 hover:text-emerald-700 font-semibold">
            View All Products →
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;