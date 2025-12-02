// app/routes/cart.tsx
import { useState } from 'react';
import { Link } from 'react-router';
import Navigation from '~/components/Navigation';
import Footer from '~/components/Footer';
import { 
  ShoppingBag, 
  Minus, 
  Plus, 
  X, 
  Truck, 
  Package, 
  RotateCcw,
  ShoppingCart
} from 'lucide-react';

export default function CartPage() {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'Khalifa Kush (AAAA)',
      price: 120.00,
      originalPrice: 240.00,
      quantity: 1,
      image: '🌿',
      addons: [
        { id: 'addon1', name: 'Add Integra Pack - 4g', price: 2.00, quantity: 1 }
      ]
    },
    {
      id: 2,
      name: 'Jungle Diamond (AA+)',
      price: 200.00,
      originalPrice: 200.00,
      quantity: 1,
      image: '🌱',
      addons: []
    },
    {
      id: 3,
      name: 'Shipwreck Edibles Gummy',
      price: 13.00,
      originalPrice: 52.00,
      quantity: 5,
      image: '💊',
      addons: []
    }
  ]);

  const [couponCode, setCouponCode] = useState('');

  const updateQuantity = (itemId: number, newQuantity: number) => {
    if (newQuantity < 1) return;
    setCartItems(items =>
      items.map(item =>
        item.id === itemId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeItem = (itemId: number) => {
    setCartItems(items => items.filter(item => item.id !== itemId));
  };

  const calculateSubtotal = () => {
    return cartItems.reduce((total, item) => {
      const itemTotal = item.price * item.quantity;
      const addonsTotal = item.addons.reduce((sum, addon) => sum + (addon.price * addon.quantity), 0);
      return total + itemTotal + addonsTotal;
    }, 0);
  };

  const subtotal = calculateSubtotal();
  const discount = 0;
  const shippingCost = 50.00;
  const freeShippingThreshold = 100.00;
  const total = subtotal - discount + shippingCost;
  const progressToFreeShipping = Math.min((subtotal / freeShippingThreshold) * 100, 100);

  // Empty cart state
  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navigation />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-2xl font-bold text-gray-900 mb-8">
            Your Cart <span className="text-gray-400">(0)</span>
          </h1>

          <div className="flex flex-col items-center justify-center py-20">
            <div className="w-32 h-32 bg-gray-100 rounded-full flex items-center justify-center mb-6">
              <ShoppingBag className="w-16 h-16 text-emerald-600" strokeWidth={1.5} />
            </div>
            <Link
              to="/shop"
              className="bg-emerald-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-emerald-700 transition"
            >
              Show Product
            </Link>
          </div>
        </div>

        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      {/* Progress Steps - Desktop */}
      <div className="hidden lg:block bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-center gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-emerald-600 rounded-full flex items-center justify-center text-white font-semibold">
                1
              </div>
              <span className="font-semibold text-gray-900">Shopping Cart</span>
            </div>
            <div className="w-20 h-0.5 bg-gray-300"></div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-gray-600 font-semibold">
                2
              </div>
              <span className="text-gray-600">Checkout</span>
            </div>
            <div className="w-20 h-0.5 bg-gray-300"></div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-gray-600 font-semibold">
                3
              </div>
              <span className="text-gray-600">Order Complete</span>
            </div>
          </div>
        </div>
      </div>

      {/* Progress Steps - Mobile */}
      <div className="lg:hidden bg-white border-b">
        <div className="px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center">
                <ShoppingCart className="w-4 h-4 text-white" />
              </div>
              <span className="font-semibold text-sm">Shopping Cart</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                <Package className="w-4 h-4 text-gray-400" />
              </div>
              <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                <ShoppingBag className="w-4 h-4 text-gray-400" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items - Left Side */}
          <div className="lg:col-span-2">
            <h1 className="text-2xl font-bold text-gray-900 mb-6">
              Your Cart <span className="text-gray-400">({cartItems.length})</span>
            </h1>

            <div className="space-y-6">
              {cartItems.map((item) => (
                <div key={item.id} className="bg-white rounded-lg p-6">
                  <div className="flex gap-4">
                    {/* Product Image */}
                    <div className="w-20 h-20 bg-gray-100 rounded-lg flex items-center justify-center text-4xl flex-shrink-0">
                      {item.image}
                    </div>

                    {/* Product Details */}
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-3">
                        <div>
                          <h3 className="font-semibold text-gray-900">{item.name}</h3>
                          <p className="text-sm text-gray-500">1x</p>
                        </div>
                        <button
                          onClick={() => removeItem(item.id)}
                          className="text-gray-400 hover:text-gray-600 transition"
                        >
                          <X className="w-5 h-5" />
                        </button>
                      </div>

                      <div className="flex items-center justify-between">
                        {/* Quantity Controls */}
                        <div className="flex items-center border border-gray-200 rounded-lg">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="p-2 hover:bg-gray-50 transition"
                          >
                            <Minus className="w-4 h-4" />
                          </button>
                          <span className="px-4 font-semibold">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="p-2 hover:bg-gray-50 transition"
                          >
                            <Plus className="w-4 h-4" />
                          </button>
                        </div>

                        {/* Price */}
                        <div className="text-right">
                          <div className="font-bold text-gray-900">${item.price.toFixed(2)}</div>
                          {item.originalPrice > item.price && (
                            <div className="text-sm text-gray-400 line-through">
                              ${item.originalPrice.toFixed(2)}
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Addons */}
                      {item.addons.map((addon) => (
                        <div key={addon.id} className="mt-3 pt-3 border-t">
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-gray-600">{addon.name}</span>
                            <div className="flex items-center gap-4">
                              <span className="text-gray-500">{addon.quantity}x</span>
                              <span className="font-semibold">${addon.price.toFixed(2)}</span>
                            </div>
                          </div>
                        </div>
                      ))}

                      {/* Subtotal for this product group */}
                      {item.addons.length > 0 && (
                        <div className="mt-3 pt-3 border-t">
                          <div className="flex justify-between items-center">
                            <span className="text-sm text-gray-600">Subtotal</span>
                            <span className="font-bold">
                              ${(item.price * item.quantity + item.addons.reduce((sum, addon) => sum + addon.price * addon.quantity, 0)).toFixed(2)}
                            </span>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Delivery & Returns Info - Desktop */}
            <div className="hidden lg:grid grid-cols-2 gap-8 mt-12">
              {/* Delivery */}
              <div>
                <h3 className="text-lg font-bold text-emerald-600 mb-6">Delivery</h3>
                
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Truck className="w-5 h-5 text-emerald-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">
                        Order by 10pm for free next day delivery on Orders overs $100
                      </h4>
                      <p className="text-sm text-gray-600">
                        We deliver Monday to Saturday - excluding Holidays
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Package className="w-5 h-5 text-emerald-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">
                        Free next day delivery to stores.
                      </h4>
                      <p className="text-sm text-gray-600">
                        Home delivery is $4.99 for orders under $100 and is FREE for all orders over $100
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Free Returns */}
              <div>
                <h3 className="text-lg font-bold text-emerald-600 mb-6">Free Returns</h3>
                
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <RotateCcw className="w-5 h-5 text-emerald-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">
                      30 days to return it to us for a refund. We have made returns SO EASY - you can now return your order to a store or send it with FedEx FOR FREE
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Order Summary - Right Side */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg p-6 sticky top-4">
              <div className="space-y-4 mb-6">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal</span>
                  <span className="font-semibold text-gray-900">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Discount</span>
                  <span className="font-semibold text-gray-900">${discount.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Shipping Costs</span>
                  <span className="font-semibold text-gray-900">${shippingCost.toFixed(2)}</span>
                </div>
              </div>

              {/* Coupon Code */}
              <div className="flex gap-2 mb-6">
                <input
                  type="text"
                  placeholder="Coupon code"
                  value={couponCode}
                  onChange={(e) => setCouponCode(e.target.value)}
                  className="flex-1 px-4 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-emerald-600"
                />
                <button className="px-4 py-2 text-emerald-600 font-semibold hover:bg-emerald-50 rounded-lg transition">
                  Apply Coupon
                </button>
              </div>

              {/* Free Shipping Progress */}
              <div className="mb-6">
                <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                  <div
                    className="bg-emerald-600 h-2 rounded-full transition-all"
                    style={{ width: `${progressToFreeShipping}%` }}
                  ></div>
                </div>
                <p className="text-sm text-gray-600">
                  Get Free <span className="font-semibold">Shipping</span> for orders over{' '}
                  <span className="text-red-500 font-semibold">${freeShippingThreshold.toFixed(2)}</span>
                </p>
                <Link to="/shop" className="text-sm text-gray-900 underline hover:text-emerald-600">
                  Continue Shopping
                </Link>
              </div>

              {/* Checkout Button */}
              <Link
                to="/checkout"
                className="w-full bg-emerald-600 text-white py-3 rounded-full font-semibold hover:bg-emerald-700 transition flex items-center justify-center gap-2"
              >
                Checkout | ${total.toFixed(2)}
              </Link>

              {/* Payment Icons */}
              <div className="mt-6 pt-6 border-t">
                <p className="text-xs text-gray-500 text-center mb-3">SECURE PAYMENTS PROVIDED BY</p>
                <div className="flex justify-center gap-3">
                  <div className="w-10 h-8 bg-gray-100 rounded flex items-center justify-center text-xs font-bold text-red-500">
                    M
                  </div>
                  <div className="w-10 h-8 bg-gray-100 rounded flex items-center justify-center text-xs font-bold text-blue-600">
                    V
                  </div>
                  <div className="w-10 h-8 bg-gray-100 rounded flex items-center justify-center text-xs font-bold text-orange-500">
                    ₿
                  </div>
                  <div className="w-10 h-8 bg-gray-100 rounded flex items-center justify-center text-xs font-bold text-yellow-600">
                    ◆
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Delivery & Returns Info - Mobile */}
        <div className="lg:hidden mt-8 space-y-8">
          {/* Delivery */}
          <div>
            <h3 className="text-lg font-bold text-emerald-600 mb-4">Delivery</h3>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Truck className="w-5 h-5 text-emerald-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">
                    Order by 10pm for free next day delivery on Orders overs $100
                  </h4>
                  <p className="text-sm text-gray-600">
                    We deliver Monday to Saturday - excluding Holidays
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Package className="w-5 h-5 text-emerald-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">
                    Free next day delivery to stores.
                  </h4>
                  <p className="text-sm text-gray-600">
                    Home delivery is $4.99 for orders under $100 and is FREE for all orders over $100
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Free Returns */}
          <div>
            <h3 className="text-lg font-bold text-emerald-600 mb-4">Free Returns</h3>
            
            <div className="flex gap-4">
              <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <RotateCcw className="w-5 h-5 text-emerald-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">
                  30 days to return it to us for a refund. We have made returns SO EASY - you can now return your order to a store or send it with FedEx FOR FREE
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
