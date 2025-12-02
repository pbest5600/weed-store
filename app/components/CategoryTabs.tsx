// app/components/CategoryTabs.tsx
import { useState } from 'react';
import ProductCard from './ProductCard';
import type { FC } from 'react';

type StrainType = 'All Strains' | 'Indica' | 'Sativa' | 'Hybrid' | 'CBD' | 'Edibles';

const CategoryTabs: FC = () => {
  const [activeTab, setActiveTab] = useState<StrainType>('All Strains');

  const tabs: StrainType[] = ['All Strains', 'Indica', 'Sativa', 'Hybrid', 'CBD', 'Edibles'];

  // All products data
  const allProducts = [
    {
      id: '9',
      name: 'Northern Lights - Classic Indica',
      price: 44.00,
      originalPrice: 58.00,
      rating: 4.5,
      reviewCount: 167,
      image: '🌿',
      strain: 'Indica' as const,
      inStock: true,
    },
    {
      id: '10',
      name: 'Jack Herer - Energizing Sativa',
      price: 46.00,
      rating: 5,
      reviewCount: 142,
      image: '🍃',
      strain: 'Sativa' as const,
      inStock: true,
    },
    {
      id: '11',
      name: 'White Widow - Balanced Hybrid',
      price: 42.00,
      rating: 4,
      reviewCount: 198,
      image: '🌱',
      strain: 'Hybrid' as const,
      inStock: true,
    },
    {
      id: '12',
      name: 'Charlotte\'s Web - High CBD',
      price: 38.00,
      originalPrice: 48.00,
      rating: 4.5,
      reviewCount: 89,
      image: '💊',
      strain: 'CBD' as const,
      inStock: true,
    },
    {
      id: '13',
      name: 'Purple Kush - Deep Relaxation',
      price: 47.00,
      rating: 5,
      reviewCount: 156,
      image: '🌿',
      strain: 'Indica' as const,
      inStock: true,
    },
    {
      id: '14',
      name: 'Durban Poison - Pure Sativa',
      price: 45.00,
      rating: 4.5,
      reviewCount: 123,
      image: '🍃',
      strain: 'Sativa' as const,
      inStock: true,
    },
    {
      id: '15',
      name: 'Pineapple Express - Tropical Hybrid',
      price: 49.00,
      originalPrice: 62.00,
      rating: 4.5,
      reviewCount: 211,
      image: '🌱',
      strain: 'Hybrid' as const,
      inStock: true,
    },
    {
      id: '16',
      name: 'ACDC - CBD Dominant',
      price: 36.00,
      rating: 4,
      reviewCount: 74,
      image: '💊',
      strain: 'CBD' as const,
      inStock: true,
    },
  ];

  // Filter products based on active tab
  const filteredProducts = activeTab === 'All Strains' 
    ? allProducts 
    : allProducts.filter(product => product.strain === activeTab);

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Choose Your Weed
          </h2>
          <p className="text-gray-600">
            Browse our selection by strain type
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3 rounded-full font-semibold transition ${
                activeTab === tab
                  ? 'bg-emerald-600 text-white shadow-md'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-gray-500 text-lg">
                No products available in this category yet.
              </p>
            </div>
          )}
        </div>

        {/* View More Button */}
        {filteredProducts.length > 0 && (
          <div className="text-center mt-10">
            <button className="bg-emerald-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-emerald-700 transition">
              View More {activeTab !== 'All Strains' && activeTab}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default CategoryTabs;