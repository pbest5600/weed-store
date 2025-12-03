// app/components/FeaturedProducts.tsx
import { useState } from 'react';
import ProductCard from './ProductCard';

export default function FeaturedProducts() {
  const [activeTab, setActiveTab] = useState('best-sellers');

  const tabs = [
    { id: 'best-sellers', label: 'Best Sellers' },
    { id: 'bundles', label: 'Bundles & Promotions' },
    { id: 'on-sale', label: 'On Sale' },
  ];

  const products = [
    {
      id: '1',
      name: '2 Oz Deal Watermelon Zkittles + Purple Kush',
      price: 60.00,
      originalPrice: 80.00,
      rating: 4.5,
      reviewCount: 185,
      image: '🌿',
      strain: 'Indica' as const,
      inStock: true,
      badge: 'Out of stock',
    },
    {
      id: '2',
      name: 'Mix And Match Shatter/Budder 28g (4 X 7G)',
      price: 120.00,
      originalPrice: 150.00,
      rating: 5,
      reviewCount: 135,
      image: '💊',
      strain: 'Hybrid' as const,
      inStock: true,
    },
    {
      id: '3',
      name: '2 Oz Deal ATF + Tahoe Hydro Kush',
      price: 102.00,
      originalPrice: 140.00,
      rating: 4.5,
      reviewCount: 145,
      image: '🍃',
      strain: 'Sativa' as const,
      inStock: true,
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 uppercase tracking-wide border-4 border-gray-900 inline-block px-8 py-4">
            BEST DISPENSARY TO BUY WEED ONLINE IN CANADA
          </h2>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-gray-100 rounded-lg p-1">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-8 py-3 rounded-lg font-semibold transition-all ${
                  activeTab === tab.id
                    ? 'bg-white text-gray-900 shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Featured Card - Left Side */}
          <div className="bg-gradient-to-br from-emerald-900 to-emerald-700 rounded-2xl p-8 text-white flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold mb-4">
                Shop our Best Sellers
              </h3>
              <p className="text-emerald-100 mb-6 text-sm leading-relaxed">
                Lorem ipsum dolor sit amet consectetur. Nunc tellus odio sed elit. Neque donec odio congue pharetra enim velit.
              </p>
            </div>
            <button className="bg-white text-emerald-900 font-bold py-3 px-6 rounded-full hover:bg-emerald-50 transition-colors">
              View All
            </button>
          </div>

          {/* Product Cards */}
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
}
