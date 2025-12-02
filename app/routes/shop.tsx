// app/routes/shop.tsx
import { useState } from 'react';
import { Link } from 'react-router';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';
import { ChevronDown, ChevronRight, Star } from 'lucide-react';
import type { FC } from 'react';

export default function ShopPage() {
  const [priceRange, setPriceRange] = useState([0, 35000]);
  const [expandedCategories, setExpandedCategories] = useState<string[]>(['flowers']);
  const [selectedFilters, setSelectedFilters] = useState({
    categories: [] as string[],
    inStock: false,
    onSale: false,
    rating: null as number | null,
    brands: [] as string[],
  });

  // Sample categories
  const categories = [
    { name: 'Flowers', slug: 'flowers', count: 34, subcategories: ['Indica', 'Sativa', 'Hybrid'] },
    { name: 'Concentrate', slug: 'concentrate', count: 15 },
    { name: 'Edibles', slug: 'edibles', count: 23 },
    { name: 'Mushrooms', slug: 'mushrooms', count: 8 },
    { name: 'Promotions', slug: 'promotions', count: 12 },
    { name: 'Support', slug: 'support', count: 5 },
  ];

  const brands = ['Top Shelf BC', 'Green Society', 'Blue Dream Co', 'Kush Station', 'Other'];

  // Sample products
  const products = [
    {
      id: '1',
      name: '1 Oz Deal Watermelon Zkittles + 2 x Pre Roll - Indica',
      price: 60.00,
      originalPrice: 80.00,
      rating: 4,
      reviewCount: 183,
      image: '🌿',
      strain: 'Indica' as const,
      inStock: true,
    },
    {
      id: '2',
      name: '2 Oz Deal Mix & Match - Master Kush',
      price: 90.00,
      originalPrice: 120.00,
      rating: 4,
      reviewCount: 99,
      image: '🍃',
      strain: 'Hybrid' as const,
      inStock: true,
    },
    {
      id: '3',
      name: 'AAA Ace Mints Shatter/Budder 28g (4 X 7G)',
      price: 110.00,
      rating: 4.5,
      reviewCount: 156,
      image: '💊',
      strain: 'Hybrid' as const,
      inStock: true,
    },
    {
      id: '4',
      name: '1 Oz Deal Watermelon Zkittles - Purple Gorilla',
      price: 55.00,
      rating: 5,
      reviewCount: 203,
      image: '🌿',
      strain: 'Indica' as const,
      inStock: false,
    },
    {
      id: '5',
      name: '2 Oz Deal Mix & Match - Master Kush',
      price: 90.00,
      rating: 4,
      reviewCount: 87,
      image: '🍃',
      strain: 'Sativa' as const,
      inStock: true,
    },
    {
      id: '6',
      name: 'AAA Ace Mints Shatter/Budder 28g (4 X 7G)',
      price: 110.00,
      originalPrice: 140.00,
      rating: 4.5,
      reviewCount: 112,
      image: '💊',
      strain: 'Hybrid' as const,
      inStock: true,
    },
  ];

  const toggleCategory = (slug: string) => {
    setExpandedCategories(prev =>
      prev.includes(slug) ? prev.filter(s => s !== slug) : [...prev, slug]
    );
  };

  const resetFilters = () => {
    setSelectedFilters({
      categories: [],
      inStock: false,
      onSale: false,
      rating: null,
      brands: [],
    });
    setPriceRange([0, 35000]);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Link to="/" className="hover:text-emerald-600">Home</Link>
            <span>/</span>
            <span className="text-gray-900">Shop</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar Filters */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg p-6 sticky top-24">
              <h3 className="font-bold text-lg mb-4">Filters</h3>

              {/* Categories */}
              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 mb-3">Categories</h4>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <div key={category.slug}>
                      <button
                        onClick={() => toggleCategory(category.slug)}
                        className="flex items-center justify-between w-full text-left text-gray-700 hover:text-emerald-600 py-1"
                      >
                        <span>{category.name}</span>
                        <div className="flex items-center gap-2">
                          <span className="text-xs text-gray-400">({category.count})</span>
                          {category.subcategories ? (
                            expandedCategories.includes(category.slug) ? (
                              <ChevronDown className="w-4 h-4" />
                            ) : (
                              <ChevronRight className="w-4 h-4" />
                            )
                          ) : null}
                        </div>
                      </button>
                      {category.subcategories && expandedCategories.includes(category.slug) && (
                        <div className="ml-4 mt-2 space-y-1">
                          {category.subcategories.map((sub) => (
                            <label key={sub} className="flex items-center text-sm text-gray-600 hover:text-emerald-600">
                              <input type="checkbox" className="mr-2 rounded text-emerald-600" />
                              {sub}
                            </label>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 mb-3">Filter By Price</h4>
                <div className="mb-3">
                  <div className="flex justify-between text-sm text-gray-600 mb-2">
                    <span>${priceRange[0].toFixed(2)}</span>
                    <span>${priceRange[1].toFixed(2)}</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="35000"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                    className="w-full accent-emerald-600"
                  />
                </div>
                <button className="bg-emerald-600 text-white w-full py-2 rounded-full font-semibold hover:bg-emerald-700 transition">
                  Apply
                </button>
              </div>

              {/* Stock Status */}
              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 mb-3">Stock Status</h4>
                <label className="flex items-center text-gray-700 mb-2">
                  <input type="checkbox" className="mr-2 rounded text-emerald-600" />
                  In Stock
                </label>
                <label className="flex items-center text-gray-700">
                  <input type="checkbox" className="mr-2 rounded text-emerald-600" />
                  On Sale
                </label>
              </div>

              {/* Ratings */}
              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 mb-3">Ratings</h4>
                <div className="space-y-2">
                  {[5, 4, 3, 2, 1].map((rating) => (
                    <label key={rating} className="flex items-center text-gray-700 cursor-pointer">
                      <input type="radio" name="rating" className="mr-2 text-emerald-600" />
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
                            }`}
                          />
                        ))}
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              {/* Brands */}
              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 mb-3">Brands</h4>
                <div className="space-y-2">
                  {brands.map((brand) => (
                    <label key={brand} className="flex items-center text-gray-700">
                      <input type="checkbox" className="mr-2 rounded text-emerald-600" />
                      {brand}
                    </label>
                  ))}
                </div>
              </div>

              {/* Reset Button */}
              <button
                onClick={resetFilters}
                className="w-full border-2 border-emerald-600 text-emerald-600 py-2 rounded-full font-semibold hover:bg-emerald-50 transition"
              >
                Reset Filter
              </button>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Header */}
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-4">Shop</h1>
              <p className="text-gray-600 leading-relaxed">
                Welcome to our online dispensary! Browse through our premium selection of cannabis products. 
                We offer the best quality strains, edibles, and concentrates with fast, discreet shipping 
                across Canada. All our products are lab-tested and comply with local regulations. 
                Shop with confidence knowing you're getting top-shelf products at competitive prices.
              </p>
            </div>

            {/* Top Selling Section */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Top Selling</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.map((product) => (
                  <ProductCard key={product.id} {...product} />
                ))}
              </div>
            </div>

            {/* Pagination */}
            <div className="flex justify-center items-center gap-2 mt-12">
              <button className="px-4 py-2 border rounded-lg hover:bg-gray-50">←</button>
              <button className="px-4 py-2 bg-emerald-600 text-white rounded-lg">1</button>
              <button className="px-4 py-2 border rounded-lg hover:bg-gray-50">2</button>
              <button className="px-4 py-2 border rounded-lg hover:bg-gray-50">3</button>
              <button className="px-4 py-2 border rounded-lg hover:bg-gray-50">4</button>
              <span className="px-2">...</span>
              <button className="px-4 py-2 border rounded-lg hover:bg-gray-50">12</button>
              <button className="px-4 py-2 border rounded-lg hover:bg-gray-50">→</button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}