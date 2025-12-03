// app/routes/shop.tsx
import { useState, useMemo } from 'react';
import { Link } from 'react-router';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';
import { ChevronDown, ChevronRight, Star } from 'lucide-react';
import type { FC } from 'react';

type Product = {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewCount: number;
  image: string;
  strain: 'Indica' | 'Sativa' | 'Hybrid';
  inStock: boolean;
  category: string;
  brand: string;
};

export default function ShopPage() {
  const [priceRange, setPriceRange] = useState([0, 35000]);
  const [expandedCategories, setExpandedCategories] = useState<string[]>(['flowers']);
  
  // Applied filters (actual filters being used)
  const [appliedFilters, setAppliedFilters] = useState({
    categories: [] as string[],
    subcategories: [] as string[],
    inStock: false,
    onSale: false,
    rating: null as number | null,
    brands: [] as string[],
    priceRange: [0, 35000] as [number, number],
  });
  
  // Temporary filters (user selections before clicking Apply)
  const [tempFilters, setTempFilters] = useState({
    categories: [] as string[],
    subcategories: [] as string[],
    inStock: false,
    onSale: false,
    rating: null as number | null,
    brands: [] as string[],
  });
  
  const [sortBy, setSortBy] = useState('default');

  // Sample categories
  const categories = [
    { name: 'Flowers', slug: 'flowers', subcategories: ['Indica', 'Sativa', 'Hybrid'] },
    { name: 'Concentrate', slug: 'concentrate' },
    { name: 'Edibles', slug: 'edibles' },
    { name: 'Mushrooms', slug: 'mushrooms' },
    { name: 'Promotions', slug: 'promotions' },
    { name: 'Support', slug: 'support' },
  ];

  // Calculate actual product counts per category
  const getCategoryCount = (categorySlug: string) => {
    return allProducts.filter(p => p.category === categorySlug).length;
  };

  const brands = ['Top Shelf BC', 'Green Society', 'Blue Dream Co', 'Kush Station', 'Other'];

  // Sample products with more variety
  const allProducts: Product[] = [
    {
      id: '1',
      name: '1 Oz Deal Watermelon Zkittles + 2 x Pre Roll - Indica',
      price: 60.00,
      originalPrice: 80.00,
      rating: 4,
      reviewCount: 183,
      image: '🌿',
      strain: 'Indica',
      inStock: true,
      category: 'flowers',
      brand: 'Top Shelf BC',
    },
    {
      id: '2',
      name: '2 Oz Deal Mix & Match - Master Kush',
      price: 90.00,
      originalPrice: 120.00,
      rating: 4,
      reviewCount: 99,
      image: '🍃',
      strain: 'Hybrid',
      inStock: true,
      category: 'flowers',
      brand: 'Green Society',
    },
    {
      id: '3',
      name: 'AAA Ace Mints Shatter/Budder 28g (4 X 7G)',
      price: 110.00,
      rating: 4.5,
      reviewCount: 156,
      image: '💊',
      strain: 'Hybrid',
      inStock: true,
      category: 'concentrate',
      brand: 'Blue Dream Co',
    },
    {
      id: '4',
      name: '1 Oz Deal Watermelon Zkittles - Purple Gorilla',
      price: 55.00,
      rating: 5,
      reviewCount: 203,
      image: '🌿',
      strain: 'Indica',
      inStock: false,
      category: 'flowers',
      brand: 'Top Shelf BC',
    },
    {
      id: '5',
      name: '2 Oz Deal Mix & Match - Sour Diesel',
      price: 90.00,
      rating: 4,
      reviewCount: 87,
      image: '🍃',
      strain: 'Sativa',
      inStock: true,
      category: 'flowers',
      brand: 'Kush Station',
    },
    {
      id: '6',
      name: 'AAA Ace Mints Shatter/Budder 28g (4 X 7G)',
      price: 110.00,
      originalPrice: 140.00,
      rating: 4.5,
      reviewCount: 112,
      image: '💊',
      strain: 'Hybrid',
      inStock: true,
      category: 'concentrate',
      brand: 'Blue Dream Co',
    },
    {
      id: '7',
      name: 'Premium Gummy Bears - 300mg THC',
      price: 25.00,
      originalPrice: 35.00,
      rating: 5,
      reviewCount: 245,
      image: '🍬',
      strain: 'Hybrid',
      inStock: true,
      category: 'edibles',
      brand: 'Green Society',
    },
    {
      id: '8',
      name: 'Chocolate Bar - Dark Chocolate 200mg',
      price: 20.00,
      rating: 4.5,
      reviewCount: 178,
      image: '🍫',
      strain: 'Indica',
      inStock: true,
      category: 'edibles',
      brand: 'Other',
    },
    {
      id: '9',
      name: 'Golden Teacher Mushrooms - 7g',
      price: 45.00,
      rating: 5,
      reviewCount: 321,
      image: '🍄',
      strain: 'Hybrid',
      inStock: true,
      category: 'mushrooms',
      brand: 'Other',
    },
    {
      id: '10',
      name: 'Blue Meanie Mushrooms - 14g',
      price: 80.00,
      originalPrice: 100.00,
      rating: 4.5,
      reviewCount: 156,
      image: '🍄',
      strain: 'Hybrid',
      inStock: false,
      category: 'mushrooms',
      brand: 'Top Shelf BC',
    },
    {
      id: '11',
      name: 'Premium OG Kush - AAAA Grade',
      price: 150.00,
      rating: 5,
      reviewCount: 412,
      image: '🌿',
      strain: 'Indica',
      inStock: true,
      category: 'flowers',
      brand: 'Top Shelf BC',
    },
    {
      id: '12',
      name: 'Lemon Haze - Sativa Dominant',
      price: 75.00,
      originalPrice: 95.00,
      rating: 4,
      reviewCount: 167,
      image: '🍃',
      strain: 'Sativa',
      inStock: true,
      category: 'flowers',
      brand: 'Green Society',
    },
  ];

  const toggleCategory = (slug: string) => {
    setExpandedCategories(prev =>
      prev.includes(slug) ? prev.filter(s => s !== slug) : [...prev, slug]
    );
  };

  const handleCategoryChange = (category: string) => {
    setTempFilters(prev => ({
      ...prev,
      categories: prev.categories.includes(category)
        ? prev.categories.filter(c => c !== category)
        : [...prev.categories, category],
    }));
  };

  const handleSubcategoryChange = (subcategory: string) => {
    setTempFilters(prev => ({
      ...prev,
      subcategories: prev.subcategories.includes(subcategory)
        ? prev.subcategories.filter(s => s !== subcategory)
        : [...prev.subcategories, subcategory],
    }));
  };

  const handleBrandChange = (brand: string) => {
    setTempFilters(prev => ({
      ...prev,
      brands: prev.brands.includes(brand)
        ? prev.brands.filter(b => b !== brand)
        : [...prev.brands, brand],
    }));
  };

  const applyFilters = () => {
    setAppliedFilters({
      ...tempFilters,
      priceRange: [priceRange[0], priceRange[1]],
    });
  };

  const resetFilters = () => {
    const emptyFilters = {
      categories: [],
      subcategories: [],
      inStock: false,
      onSale: false,
      rating: null,
      brands: [],
    };
    setTempFilters(emptyFilters);
    setAppliedFilters({
      ...emptyFilters,
      priceRange: [0, 35000],
    });
    setPriceRange([0, 35000]);
  };

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    let filtered = [...allProducts];

    // Filter by categories
    if (appliedFilters.categories.length > 0) {
      filtered = filtered.filter(product =>
        appliedFilters.categories.includes(product.category)
      );
    }

    // Filter by subcategories (strain types)
    if (appliedFilters.subcategories.length > 0) {
      filtered = filtered.filter(product =>
        appliedFilters.subcategories.includes(product.strain)
      );
    }

    // Filter by price range
    filtered = filtered.filter(product =>
      product.price >= appliedFilters.priceRange[0] && product.price <= appliedFilters.priceRange[1]
    );

    // Filter by stock status
    if (appliedFilters.inStock) {
      filtered = filtered.filter(product => product.inStock);
    }

    // Filter by on sale
    if (appliedFilters.onSale) {
      filtered = filtered.filter(product => product.originalPrice !== undefined);
    }

    // Filter by rating
    if (appliedFilters.rating !== null) {
      filtered = filtered.filter(product => product.rating >= appliedFilters.rating!);
    }

    // Filter by brands
    if (appliedFilters.brands.length > 0) {
      filtered = filtered.filter(product =>
        appliedFilters.brands.includes(product.brand)
      );
    }

    // Sort products
    switch (sortBy) {
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case 'name':
        filtered.sort((a, b) => a.name.localeCompare(b.name));
        break;
      default:
        // Keep default order
        break;
    }

    return filtered;
  }, [allProducts, appliedFilters, sortBy]);

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
            <div className="bg-white rounded-lg sticky top-24 max-h-[calc(100vh-7rem)] overflow-y-auto">
              <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-bold text-lg">Filters</h3>
                {(appliedFilters.categories.length > 0 || 
                  appliedFilters.subcategories.length > 0 || 
                  appliedFilters.brands.length > 0 || 
                  appliedFilters.inStock || 
                  appliedFilters.onSale || 
                  appliedFilters.rating !== null) && (
                  <span className="text-sm text-emerald-600 font-semibold">
                    {filteredProducts.length} results
                  </span>
                )}
              </div>

              {/* Categories */}
              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 mb-3">Categories</h4>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <div key={category.slug}>
                      <div className="flex items-center justify-between">
                        <label className="flex items-center text-gray-700 hover:text-emerald-600 cursor-pointer flex-1">
                          <input
                            type="checkbox"
                            checked={tempFilters.categories.includes(category.slug)}
                            onChange={() => handleCategoryChange(category.slug)}
                            className="mr-2 rounded text-emerald-600"
                          />
                          <span>{category.name}</span>
                        </label>
                        <div className="flex items-center gap-2">
                          <span className="text-xs text-gray-400">({getCategoryCount(category.slug)})</span>
                          {category.subcategories && (
                            <button
                              onClick={() => toggleCategory(category.slug)}
                              className="p-1 hover:bg-gray-100 rounded"
                            >
                              {expandedCategories.includes(category.slug) ? (
                                <ChevronDown className="w-4 h-4" />
                              ) : (
                                <ChevronRight className="w-4 h-4" />
                              )}
                            </button>
                          )}
                        </div>
                      </div>
                      {category.subcategories && expandedCategories.includes(category.slug) && (
                        <div className="ml-6 mt-2 space-y-1">
                          {category.subcategories.map((sub) => (
                            <label key={sub} className="flex items-center text-sm text-gray-600 hover:text-emerald-600 cursor-pointer">
                              <input
                                type="checkbox"
                                checked={tempFilters.subcategories.includes(sub)}
                                onChange={() => handleSubcategoryChange(sub)}
                                className="mr-2 rounded text-emerald-600"
                              />
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
                    <span>${priceRange[0].toFixed(0)}</span>
                    <span>${priceRange[1].toFixed(0)}</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="200"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                    className="w-full accent-emerald-600"
                  />
                </div>
              </div>

              {/* Stock Status */}
              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 mb-3">Stock Status</h4>
                <label className="flex items-center text-gray-700 mb-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={tempFilters.inStock}
                    onChange={(e) => setTempFilters(prev => ({ ...prev, inStock: e.target.checked }))}
                    className="mr-2 rounded text-emerald-600"
                  />
                  In Stock
                </label>
                <label className="flex items-center text-gray-700 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={tempFilters.onSale}
                    onChange={(e) => setTempFilters(prev => ({ ...prev, onSale: e.target.checked }))}
                    className="mr-2 rounded text-emerald-600"
                  />
                  On Sale
                </label>
              </div>

              {/* Ratings */}
              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 mb-3">Ratings</h4>
                <div className="space-y-2">
                  {[5, 4, 3, 2, 1].map((rating) => (
                    <label key={rating} className="flex items-center text-gray-700 cursor-pointer">
                      <input
                        type="radio"
                        name="rating"
                        checked={tempFilters.rating === rating}
                        onChange={() => setTempFilters(prev => ({ ...prev, rating }))}
                        className="mr-2 text-emerald-600"
                      />
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
                            }`}
                          />
                        ))}
                        <span className="text-sm ml-1">& up</span>
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
                    <label key={brand} className="flex items-center text-gray-700 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={tempFilters.brands.includes(brand)}
                        onChange={() => handleBrandChange(brand)}
                        className="mr-2 rounded text-emerald-600"
                      />
                      {brand}
                    </label>
                  ))}
                </div>
              </div>

              {/* Apply Filters Button */}
              <button
                onClick={applyFilters}
                className="w-full bg-emerald-600 text-white py-2 rounded-full font-semibold hover:bg-emerald-700 transition mb-3"
              >
                Apply Filters
              </button>

              {/* Reset Button */}
              <button
                onClick={resetFilters}
                className="w-full border-2 border-emerald-600 text-emerald-600 py-2 rounded-full font-semibold hover:bg-emerald-50 transition"
              >
                Reset Filter
              </button>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Header */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-4">
                <h1 className="text-3xl font-bold text-gray-900">Shop</h1>
                <div className="flex items-center gap-2">
                  <label className="text-sm text-gray-600">Sort by:</label>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="border-2 border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-emerald-600"
                  >
                    <option value="default">Default</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                    <option value="rating">Highest Rated</option>
                    <option value="name">Name A-Z</option>
                  </select>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Welcome to our online dispensary! Browse through our premium selection of cannabis products. 
                We offer the best quality strains, edibles, and concentrates with fast, discreet shipping 
                across Canada. All our products are lab-tested and comply with local regulations. 
                Shop with confidence knowing you're getting top-shelf products at competitive prices.
              </p>
            </div>

            {/* Results Count */}
            <div className="mb-6">
              <p className="text-gray-600">
                Showing <span className="font-semibold">{filteredProducts.length}</span> of{' '}
                <span className="font-semibold">{allProducts.length}</span> products
              </p>
            </div>

            {/* Products Grid */}
            <div className="mb-8">
              {filteredProducts.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredProducts.map((product) => (
                    <ProductCard key={product.id} {...product} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <p className="text-gray-500 text-lg mb-4">No products found matching your filters.</p>
                  <button
                    onClick={resetFilters}
                    className="text-emerald-600 font-semibold hover:text-emerald-700"
                  >
                    Clear all filters
                  </button>
                </div>
              )}
            </div>

            {/* Pagination */}
            {filteredProducts.length > 0 && (
              <div className="flex justify-center items-center gap-2 mt-12">
                <button className="px-4 py-2 border rounded-lg hover:bg-gray-50">←</button>
                <button className="px-4 py-2 bg-emerald-600 text-white rounded-lg">1</button>
                <button className="px-4 py-2 border rounded-lg hover:bg-gray-50">2</button>
                <button className="px-4 py-2 border rounded-lg hover:bg-gray-50">3</button>
                <button className="px-4 py-2 border rounded-lg hover:bg-gray-50">→</button>
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
