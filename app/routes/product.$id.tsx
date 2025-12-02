// app/routes/product.$id.tsx
import { useState } from 'react';
import { Link, useParams } from 'react-router';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';
import { Star, ShoppingCart, Heart, Share2, Check, Minus, Plus } from 'lucide-react';
import type { FC } from 'react';

export default function ProductDetailPage() {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);

  // Mock product data - in real app, this would come from API/database based on the id
  const product = {
    id: id || '1',
    name: 'Blue Dream - Premium Quality',
    price: 45.00,
    originalPrice: 60.00,
    rating: 4.5,
    reviewCount: 128,
    strain: 'Hybrid',
    thc: '18-22%',
    cbd: '<1%',
    inStock: true,
    images: ['🌿', '🍃', '🌱'],
    description: 'Blue Dream is a sativa-dominant hybrid originating in California. It has gained widespread popularity for its balanced effects and sweet berry aroma. This strain delivers swift symptom relief without heavy sedative effects, making it a great daytime medicine.',
    effects: ['Happy', 'Relaxed', 'Euphoric', 'Creative', 'Uplifted'],
    medicalUses: ['Stress', 'Depression', 'Pain', 'Fatigue', 'Anxiety'],
    flavors: ['Blueberry', 'Sweet', 'Berry', 'Herbal'],
  };

  const relatedProducts = [
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
      inStock: true,
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
  ];

  const discount = product.originalPrice 
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100) 
    : 0;

  const incrementQuantity = () => setQuantity(q => q + 1);
  const decrementQuantity = () => setQuantity(q => (q > 1 ? q - 1 : 1));

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Link to="/" className="hover:text-emerald-600">Home</Link>
            <span>/</span>
            <Link to="/shop" className="hover:text-emerald-600">Shop</Link>
            <span>/</span>
            <Link to={`/category/${product.strain.toLowerCase()}`} className="hover:text-emerald-600">{product.strain}</Link>
            <span>/</span>
            <span className="text-gray-900">{product.name}</span>
          </div>
        </div>
      </div>

      {/* Product Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left: Images */}
          <div>
            {/* Main Image */}
            <div className="bg-white rounded-xl p-8 mb-4 aspect-square flex items-center justify-center shadow-sm">
              <div className="text-9xl">{product.images[selectedImage]}</div>
            </div>
            
            {/* Thumbnail Images */}
            <div className="grid grid-cols-3 gap-4">
              {product.images.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`bg-white rounded-lg p-4 aspect-square flex items-center justify-center text-5xl transition shadow-sm ${
                    selectedImage === index ? 'ring-2 ring-emerald-600' : 'hover:ring-2 hover:ring-gray-300'
                  }`}
                >
                  {img}
                </button>
              ))}
            </div>
          </div>

          {/* Right: Product Info */}
          <div>
            {/* Badges */}
            <div className="flex gap-2 mb-4">
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
                {product.strain}
              </span>
              {discount > 0 && (
                <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Save {discount}%
                </span>
              )}
              {product.inStock && (
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                  <Check className="w-4 h-4" /> In Stock
                </span>
              )}
            </div>

            {/* Product Name */}
            <h1 className="text-3xl font-bold text-gray-900 mb-4">{product.name}</h1>

            {/* Rating */}
            <div className="flex items-center gap-3 mb-6">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${
                      i < Math.floor(product.rating)
                        ? 'fill-yellow-400 text-yellow-400'
                        : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>
              <span className="text-gray-600">
                {product.rating} ({product.reviewCount} reviews)
              </span>
            </div>

            {/* Price */}
            <div className="flex items-center gap-3 mb-6">
              <span className="text-4xl font-bold text-emerald-600">
                ${product.price.toFixed(2)}
              </span>
              {product.originalPrice && (
                <span className="text-xl text-gray-400 line-through">
                  ${product.originalPrice.toFixed(2)}
                </span>
              )}
            </div>

            {/* THC/CBD Info */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-gray-100 rounded-lg p-4">
                <p className="text-sm text-gray-600 mb-1">THC Content</p>
                <p className="text-xl font-bold text-gray-900">{product.thc}</p>
              </div>
              <div className="bg-gray-100 rounded-lg p-4">
                <p className="text-sm text-gray-600 mb-1">CBD Content</p>
                <p className="text-xl font-bold text-gray-900">{product.cbd}</p>
              </div>
            </div>

            {/* Quantity Selector */}
            <div className="mb-6">
              <label className="block text-sm font-semibold text-gray-900 mb-2">
                Quantity
              </label>
              <div className="flex items-center gap-4">
                <div className="flex items-center border-2 border-gray-200 rounded-lg">
                  <button
                    onClick={decrementQuantity}
                    className="px-4 py-2 hover:bg-gray-100 transition"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="px-6 py-2 font-semibold">{quantity}</span>
                  <button
                    onClick={incrementQuantity}
                    className="px-4 py-2 hover:bg-gray-100 transition"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
                <span className="text-gray-600">
                  Total: ${(product.price * quantity).toFixed(2)}
                </span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3 mb-6">
              <button className="flex-1 bg-emerald-600 text-white py-4 px-6 rounded-full font-semibold hover:bg-emerald-700 transition flex items-center justify-center gap-2">
                <ShoppingCart className="w-5 h-5" />
                Add to Cart
              </button>
              <button className="p-4 border-2 border-gray-200 rounded-full hover:border-emerald-600 hover:text-emerald-600 transition">
                <Heart className="w-5 h-5" />
              </button>
              <button className="p-4 border-2 border-gray-200 rounded-full hover:border-emerald-600 hover:text-emerald-600 transition">
                <Share2 className="w-5 h-5" />
              </button>
            </div>

            {/* Description */}
            <div className="mb-6">
              <h3 className="font-bold text-gray-900 mb-2">Description</h3>
              <p className="text-gray-600 leading-relaxed">{product.description}</p>
            </div>

            {/* Effects */}
            <div className="mb-6">
              <h3 className="font-bold text-gray-900 mb-3">Effects</h3>
              <div className="flex flex-wrap gap-2">
                {product.effects.map((effect) => (
                  <span key={effect} className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm">
                    {effect}
                  </span>
                ))}
              </div>
            </div>

            {/* Medical Uses */}
            <div className="mb-6">
              <h3 className="font-bold text-gray-900 mb-3">Helps With</h3>
              <div className="flex flex-wrap gap-2">
                {product.medicalUses.map((use) => (
                  <span key={use} className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm">
                    {use}
                  </span>
                ))}
              </div>
            </div>

            {/* Flavors */}
            <div>
              <h3 className="font-bold text-gray-900 mb-3">Flavors</h3>
              <div className="flex flex-wrap gap-2">
                {product.flavors.map((flavor) => (
                  <span key={flavor} className="bg-orange-100 text-orange-800 px-4 py-2 rounded-full text-sm">
                    {flavor}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-20">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">You May Also Like</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}