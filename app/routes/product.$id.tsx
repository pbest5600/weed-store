// app/routes/product.$id.tsx
import { useState } from 'react';
import { Link, useParams } from 'react-router';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';
import { Star, ShoppingCart, Heart, Share2, Check, Minus, Plus, Facebook, Twitter, MessageCircle, Copy } from 'lucide-react';
import type { FC } from 'react';

type TabType = 'description' | 'reviews' | 'refer';

export default function ProductDetailPage() {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [activeTab, setActiveTab] = useState<TabType>('description');
  const [selectedWeight, setSelectedWeight] = useState('3kg');
  const [userRating, setUserRating] = useState(0);
  const [deliveryOptions, setDeliveryOptions] = useState({
    option1: false,
    option2: false,
    option3: false,
    option4: false,
  });

  // Mock product data
  const product = {
    id: id || '1',
    name: 'Mix And Match Shatter/Budder 28g (4 X 7G)',
    price: 120.00,
    originalPrice: 150.00,
    rating: 4.5,
    reviewCount: 135,
    strain: 'Concentrates',
    inStock: true,
    images: ['🌿', '🍃', '🌱', '💊'],
    description: 'Jungle Diamonds is a slightly indica dominant hybrid strain (60% indica/40% sativa) created through crossing the infamous Slurricane X Gorilla Glue #4 strains. Named for its gorgeous appearance and breathy, Jungle Diamonds is a favorite of indica and hybrid lovers alike thanks to its delicious taste and long-lasting high, amazing high. Jungle Diamonds buds have fluffy spade-shaped bright neon green nugs with vivid amber hairs, dark olive leaves and a coating of chunky amber-tinted white crystal trichomets and a super sticky resin.',
    effects: 'Calming, Creative, Happy, Relaxing, Sleepy, Uplifting',
    helps: 'Anxiety, Arthritis, Chronic Pain, Depression, Fatigue, Inflammation, Insomnia, Irregular Bowel Movements, Migraines, Mood Swings',
    flavors: 'Chemical, Citrus, Earthy, Pungent, Sour',
    weights: [
      { value: '3kg', label: '3kg' },
      { value: '1/2lb', label: '1/2lb' },
      { value: '1/4lb', label: '1/4lb' },
    ],
    addOns: [
      { id: 'khalifa', name: 'Khalifa Kush (AAA)', price: 10.00 },
      { id: 'integra', name: 'Add Integra Pack - Kg', price: 2.00 },
    ]
  };

  const reviews = [
    {
      id: 1,
      name: 'Vidal Bear',
      date: 'January 28, 2021',
      rating: 4,
      text: 'Absolutely love TopShelfBC, affordable on any budget and such fast delivery, I thought to my door! I recommend them to all my friends and family for their 420 needs.'
    },
    {
      id: 2,
      name: 'Terry Baskey',
      rating: 5,
      date: 'January 28, 2021',
      text: 'Best place place to buy your cannabis at great prices'
    }
  ];

  const relatedProducts = [
    {
      id: '2',
      name: '2 Oz Deal Watermelon Zkittles + Purple Kushers',
      price: 80.00,
      rating: 4.5,
      reviewCount: 135,
      image: '🌿',
      strain: 'Indica' as const,
      inStock: true,
    },
    {
      id: '3',
      name: '2 Oz Deal Allx Toxic x Master Tuna',
      price: 120.00,
      originalPrice: 150.00,
      rating: 4,
      reviewCount: 185,
      image: '🍃',
      strain: 'Sativa' as const,
      inStock: true,
    },
    {
      id: '4',
      name: 'Mix And Match Shatter/Budder 28g (4 X 7G)',
      price: 102.00,
      originalPrice: 120.00,
      rating: 4.5,
      reviewCount: 135,
      image: '🌱',
      strain: 'Hybrid' as const,
      inStock: true,
    },
    {
      id: '5',
      name: 'Mix And Match Shatter/Budder 28g (4 X 7G)',
      price: 102.00,
      originalPrice: 120.00,
      rating: 4.5,
      reviewCount: 135,
      image: '💊',
      strain: 'Hybrid' as const,
      inStock: true,
    },
  ];

  const discount = product.originalPrice 
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100) 
    : 0;

  const incrementQuantity = () => setQuantity(q => q + 1);
  const decrementQuantity = () => setQuantity(q => (q > 1 ? q - 1 : 1));

  const renderStars = (rating: number, interactive = false, onRate?: (rating: number) => void) => {
    return (
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            onClick={() => interactive && onRate && onRate(star)}
            className={interactive ? 'cursor-pointer' : 'cursor-default'}
          >
            <Star
              className={`w-5 h-5 ${
                star <= rating
                  ? 'fill-yellow-400 text-yellow-400'
                  : 'text-gray-300'
              }`}
            />
          </button>
        ))}
      </div>
    );
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
            <Link to="/shop" className="hover:text-emerald-600">Shop</Link>
            <span>/</span>
            <span className="text-gray-900 uppercase">{product.strain}</span>
          </div>
        </div>
      </div>

      {/* Product Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-2 gap-12 mb-12">
          {/* Left: Images */}
          <div>
            {/* Main Image */}
            <div className="bg-white rounded-xl p-8 mb-4 aspect-square flex items-center justify-center shadow-sm">
              <div className="text-9xl">{product.images[selectedImage]}</div>
            </div>
            
            {/* Thumbnail Images */}
            <div className="grid grid-cols-4 gap-4">
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
            {/* Category Badge */}
            <div className="mb-2">
              <span className="text-sm text-gray-500 uppercase tracking-wider">{product.strain}</span>
            </div>

            {/* Product Name */}
            <h1 className="text-3xl font-bold text-gray-900 mb-4">{product.name}</h1>

            {/* Rating */}
            <div className="flex items-center gap-3 mb-6">
              {renderStars(product.rating)}
              <span className="text-gray-600">
                {product.rating} ({product.reviewCount} Reviews)
              </span>
            </div>

            {/* Price */}
            <div className="flex items-center gap-3 mb-6">
              <span className="text-3xl font-bold text-emerald-600">
                ${product.price.toFixed(2)}
              </span>
              {product.originalPrice && (
                <span className="text-xl text-gray-400 line-through">
                  ${product.originalPrice.toFixed(2)}
                </span>
              )}
              {discount > 0 && (
                <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Save {discount}%
                </span>
              )}
            </div>

            {/* Effects */}
            <div className="mb-4">
              <p className="text-sm text-gray-600 mb-2">EFFECTS</p>
              <p className="text-gray-900">{product.effects}</p>
            </div>

            {/* Helps With */}
            <div className="mb-4">
              <p className="text-sm text-gray-600 mb-2">HELPS WITH</p>
              <p className="text-gray-900">{product.helps}</p>
            </div>

            {/* Flavors */}
            <div className="mb-6">
              <p className="text-sm text-gray-600 mb-2">FLAVORS</p>
              <p className="text-gray-900">{product.flavors}</p>
            </div>

            {/* Description */}
            <div className="mb-6 pb-6 border-b">
              <h3 className="font-bold text-gray-900 mb-2">DESCRIPTION</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{product.description}</p>
            </div>

            {/* Weight Selection */}
            <div className="mb-6">
              <div className="flex gap-3">
                {product.weights.map((weight) => (
                  <button
                    key={weight.value}
                    onClick={() => setSelectedWeight(weight.value)}
                    className={`px-6 py-2 rounded border-2 font-semibold transition ${
                      selectedWeight === weight.value
                        ? 'bg-emerald-600 text-white border-emerald-600'
                        : 'bg-white text-gray-700 border-gray-300 hover:border-emerald-600'
                    }`}
                  >
                    {weight.label}
                  </button>
                ))}
              </div>
              <p className="text-sm text-orange-600 mt-2">Purchase this product now and earn 60 Points!</p>
            </div>

            {/* Add-ons */}
            <div className="mb-6 pb-6 border-b">
              {product.addOns.map((addon) => (
                <div key={addon.id} className="flex items-center justify-between py-2">
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-3 w-4 h-4 text-emerald-600 rounded" />
                    <span className="text-gray-900">{addon.name}</span>
                  </label>
                  <span className="font-semibold text-gray-900">${addon.price.toFixed(2)}</span>
                </div>
              ))}
            </div>

            {/* Quantity Selector */}
            <div className="mb-6">
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
                  In Stock
                </span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3 mb-6">
              <button className="flex-1 bg-emerald-600 text-white py-4 px-6 rounded-full font-semibold hover:bg-emerald-700 transition flex items-center justify-center gap-2">
                <ShoppingCart className="w-5 h-5" />
                Add to Cart • ${(product.price * quantity).toFixed(2)}
              </button>
              <button className="p-4 border-2 border-gray-200 rounded-full hover:border-emerald-600 hover:text-emerald-600 transition">
                <Heart className="w-5 h-5" />
              </button>
            </div>

            {/* Features */}
            <div className="space-y-2 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-600" />
                <span>Free express shipping on orders over $99</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-600" />
                <span>Order before 12:00pm for same day dispatch</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-600" />
                <span>Support & ordering open 7 days a week</span>
              </div>
            </div>

            {/* SKU and Categories */}
            <div className="mt-6 pt-6 border-t text-sm">
              <div className="flex gap-8">
                <div>
                  <span className="text-gray-600">SKU:</span>
                  <span className="ml-2 text-gray-900">N/A</span>
                </div>
                <div>
                  <span className="text-gray-600">Categories:</span>
                  <Link to="/shop" className="ml-2 text-emerald-600 hover:underline">
                    AAAA+ Weed, Indica
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="bg-white rounded-lg shadow-sm mb-8">
          <div className="border-b">
            <div className="flex">
              <button
                onClick={() => setActiveTab('description')}
                className={`px-8 py-4 font-semibold transition relative ${
                  activeTab === 'description'
                    ? 'text-emerald-600'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Description
                {activeTab === 'description' && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-emerald-600" />
                )}
              </button>
              <button
                onClick={() => setActiveTab('reviews')}
                className={`px-8 py-4 font-semibold transition relative ${
                  activeTab === 'reviews'
                    ? 'text-emerald-600'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Reviews ({product.reviewCount})
                {activeTab === 'reviews' && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-emerald-600" />
                )}
              </button>
              <button
                onClick={() => setActiveTab('refer')}
                className={`px-8 py-4 font-semibold transition relative ${
                  activeTab === 'refer'
                    ? 'text-emerald-600'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Refer a Friend
                {activeTab === 'refer' && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-emerald-600" />
                )}
              </button>
            </div>
          </div>

          {/* Tab Content */}
          <div className="p-8">
            {/* Description Tab */}
            {activeTab === 'description' && (
              <div>
                <p className="text-gray-700 leading-relaxed mb-8">
                  {product.description}
                </p>
                <p className="text-gray-700 leading-relaxed mb-8">
                  The focus is of sweet chocolate, with hints of earth and berries to tie. You'll feel lifted sense of the Jungle Diamonds high is just as delicious, with a lifted cerebral sense that lasts for hours on end before fading away into a deep and peaceful sleep. You'll find your mind filled with a happy euphoric sense that helps push out any negative or racing thoughts and moods as your body settles into a sense of pure relaxation, totally calm from head to toe. Thanks to these heavy effects and its pretty high 20-22% average THC level, Jungle Diamonds is often said to be perfect for treating conditions such as chronic pain, cramps or muscle spasms, mood swings and chronic stress or anxiety.
                </p>

                {/* Delivery Program */}
                <div className="bg-gray-50 rounded-lg p-6 mb-8">
                  <h3 className="font-bold text-gray-900 mb-4">Delivery Program</h3>
                  <div className="space-y-3">
                    <label className="flex items-start">
                      <input
                        type="checkbox"
                        checked={deliveryOptions.option1}
                        onChange={(e) => setDeliveryOptions({...deliveryOptions, option1: e.target.checked})}
                        className="mt-1 mr-3 w-4 h-4 text-emerald-600 rounded"
                      />
                      <div>
                        <p className="font-semibold text-gray-900">I would like to subscribe to the delivery program</p>
                        <p className="text-sm text-gray-600">Delivery frequency subscription (every 2 weeks): 5% off entire order</p>
                      </div>
                    </label>
                    <label className="flex items-start">
                      <input
                        type="checkbox"
                        checked={deliveryOptions.option2}
                        onChange={(e) => setDeliveryOptions({...deliveryOptions, option2: e.target.checked})}
                        className="mt-1 mr-3 w-4 h-4 text-emerald-600 rounded"
                      />
                      <div>
                        <p className="font-semibold text-gray-900">RECEIVE HALF OF MY ORDER EVERY 2 WEEKS</p>
                        <p className="text-sm text-gray-600">Select this option if you would like to receive half the quantity you selected now and half in 2 weeks.</p>
                      </div>
                    </label>
                    <label className="flex items-start">
                      <input
                        type="checkbox"
                        checked={deliveryOptions.option3}
                        onChange={(e) => setDeliveryOptions({...deliveryOptions, option3: e.target.checked})}
                        className="mt-1 mr-3 w-4 h-4 text-emerald-600 rounded"
                      />
                      <span className="text-gray-900">Email on Checkout</span>
                    </label>
                    <label className="flex items-start">
                      <input
                        type="checkbox"
                        checked={deliveryOptions.option4}
                        onChange={(e) => setDeliveryOptions({...deliveryOptions, option4: e.target.checked})}
                        className="mt-1 mr-3 w-4 h-4 text-emerald-600 rounded"
                      />
                      <span className="text-gray-900">Email on Order</span>
                    </label>
                  </div>
                </div>

                {/* Email Input */}
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="johngreene@example.com"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-emerald-600"
                  />
                </div>
              </div>
            )}

            {/* Reviews Tab */}
            {activeTab === 'reviews' && (
              <div>
                {/* Reviews List */}
                <div className="space-y-6 mb-8">
                  {reviews.map((review) => (
                    <div key={review.id} className="pb-6 border-b last:border-b-0">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-emerald-600 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                          {review.name.charAt(0)}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <h4 className="font-semibold text-gray-900">{review.name}</h4>
                            <span className="text-sm text-gray-500">{review.date}</span>
                          </div>
                          {renderStars(review.rating)}
                          <p className="text-gray-700 mt-3">{review.text}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <button className="text-emerald-600 font-semibold hover:text-emerald-700 mb-8">
                  Show More
                </button>

                {/* Add a Review */}
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="font-bold text-gray-900 mb-4">Add a Review</h3>
                  
                  <div className="mb-4">
                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                      Your rating
                    </label>
                    {renderStars(userRating, true, setUserRating)}
                  </div>

                  <div className="mb-4">
                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                      Your Review *
                    </label>
                    <textarea
                      rows={6}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-emerald-600"
                      placeholder="Write your review here..."
                    />
                  </div>

                  <button className="bg-emerald-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-emerald-700 transition">
                    Submit
                  </button>
                </div>
              </div>
            )}

            {/* Refer a Friend Tab */}
            {activeTab === 'refer' && (
              <div>
                <h3 className="font-bold text-gray-900 mb-4">Referral Program</h3>
                <p className="text-gray-700 mb-6">
                  Absolutely love TopShelfBC, affordable on any budget and such fast delivery, I thought to my door! I recommend them to all my friends and family for their 420 needs.
                </p>

                {/* Referral Codes */}
                <div className="space-y-4 mb-8">
                  <div className="flex items-center justify-between p-4 border-2 border-gray-200 rounded-lg">
                    <div>
                      <p className="text-sm text-gray-600">Your Referral URL</p>
                      <p className="font-mono text-emerald-600">Referral code is available only to users with at least one order</p>
                    </div>
                    <button className="p-2 hover:bg-gray-100 rounded-lg transition">
                      <Copy className="w-5 h-5 text-gray-600" />
                    </button>
                  </div>

                  <div className="flex items-center justify-between p-4 border-2 border-gray-200 rounded-lg">
                    <div>
                      <p className="text-sm text-gray-600">Your referral Code to Share</p>
                      <p className="font-mono text-emerald-600">Referral code is available only to users with at least one order</p>
                    </div>
                    <button className="p-2 hover:bg-gray-100 rounded-lg transition">
                      <Copy className="w-5 h-5 text-gray-600" />
                    </button>
                  </div>
                </div>

                {/* Social Share */}
                <div className="mb-8">
                  <div className="flex gap-4 justify-center">
                    <button className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                      <Facebook className="w-5 h-5" />
                      Share via Facebook
                    </button>
                    <button className="flex items-center gap-2 px-6 py-3 bg-sky-500 text-white rounded-lg hover:bg-sky-600 transition">
                      <Twitter className="w-5 h-5" />
                      Share via Twitter
                    </button>
                    <button className="flex items-center gap-2 px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition">
                      <MessageCircle className="w-5 h-5" />
                      Share via WhatsApp
                    </button>
                  </div>
                </div>

                {/* Email Form */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      placeholder="johngreene@example.com"
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-emerald-600"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      placeholder="John Doe"
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-emerald-600"
                    />
                  </div>
                </div>

                <button className="mt-6 bg-emerald-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-emerald-700 transition">
                  Send Emails
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-20">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Featured Product</h2>
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
