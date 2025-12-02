// app/routes/cart.tsx
import { useState } from 'react';
import { Link } from 'react-router';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Minus, Plus, X, ShoppingBag, ArrowRight } from 'lucide-react';
import type { FC } from 'react';

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
  strain: string;
}

export default function CartPage() {
  // Mock cart items - in real app, this would come from state management (Context, Redux, etc.)
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: '1',
      name: 'Blue Dream - Premium Quality',
      price: 45.00,
      quantity: 2,
      image: '🌿',
      strain: 'Hybrid',
    },
    {
      id: '2',
      name: 'OG Kush - Top Shelf',
      price: 50.00,
      quantity: 1,
      image: '🍃',
      strain: 'Indica',
    },
    {
      id: '3',
      name: 'Sour Diesel - AAA Grade',
      price: 40.00,
      quantity: 3,
      image: '🌱',
      strain: 'Sativa',
    },
  ]);

  const updateQuantity = (id: string, newQuantity: number) => {
    if (newQuantity < 1) return;
    setCartItems(items =>
      items.map(item =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeItem = (id: string) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = subtotal > 99 ? 0 : 15;
  const tax = subtotal * 0.13; // 13% tax
  const total = subtotal + shipping + tax;

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Link to="/" className="hover:text-emerald-600">Home</Link>
            <span>/</span>
            <span className="text-gray-900">Cart</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {cartItems.length === 0 ? (
          /* Empty Cart */
          <div className="bg-white rounded-xl p-12 text-center">
            <ShoppingBag className="w-24 h-24 text-gray-300 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Your cart is empty</h2>
            <p className="text-gray-600 mb-6">Looks like you haven't added anything to your cart yet.</p>
            <Link
              to="/shop"
              className="inline-block bg-emerald-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-emerald-700 transition"
            >
              Start Shopping
            </Link>
          </div>
        ) : (
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl shadow-sm">
                <div className="p-6 border-b">
                  <h1 className="text-2xl font-bold text-gray-900">
                    Shopping Cart ({cartItems.length} {cartItems.length === 1 ? 'item' : 'items'})
                  </h1>
                </div>

                <div className="divide-y">
                  {cartItems.map((item) => (
                    <div key={item.id} className="p-6 flex gap-6">
                      {/* Product Image */}
                      <Link
                        to={`/product/${item.id}`}
                        className="w-24 h-24 bg-gray-100 rounded-lg flex items-center justify-center text-5xl flex-shrink-0"
                      >
                        {item.image}
                      </Link>

                      {/* Product Info */}
                      <div className="flex-1">
                        <div className="flex justify-between mb-2">
                          <div>
                            <Link
                              to={`/product/${item.id}`}
                              className="font-semibold text-gray-900 hover:text-emerald-600 transition"
                            >
                              {item.name}
                            </Link>
                            <p className="text-sm text-gray-500 mt-1">
                              <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">
                                {item.strain}
                              </span>
                            </p>
                          </div>
                          <button
                            onClick={() => removeItem(item.id)}
                            className="text-gray-400 hover:text-red-500 transition"
                          >
                            <X className="w-5 h-5" />
                          </button>
                        </div>

                        <div className="flex items-center justify-between mt-4">
                          {/* Quantity Controls */}
                          <div className="flex items-center border-2 border-gray-200 rounded-lg bg-white">
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="px-3 py-1 hover:bg-gray-100 transition text-gray-700"
                            >
                              <Minus className="w-4 h-4" />
                            </button>
                            <span className="px-4 py-1 font-semibold text-gray-900">{item.quantity}</span>
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="px-3 py-1 hover:bg-gray-100 transition text-gray-700"
                            >
                              <Plus className="w-4 h-4" />
                            </button>
                          </div>

                          {/* Price */}
                          <div className="text-right">
                            <p className="text-xl font-bold text-emerald-600">
                              ${(item.price * item.quantity).toFixed(2)}
                            </p>
                            <p className="text-sm text-gray-500">
                              ${item.price.toFixed(2)} each
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Continue Shopping Button */}
                <div className="p-6 border-t">
                  <Link
                    to="/shop"
                    className="text-emerald-600 hover:text-emerald-700 font-semibold flex items-center gap-2"
                  >
                    ← Continue Shopping
                  </Link>
                </div>
              </div>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl shadow-sm p-6 sticky top-24">
                <h2 className="text-xl font-bold text-gray-900 mb-6">Order Summary</h2>

                <div className="space-y-3 mb-6">
                  <div className="flex justify-between text-gray-600">
                    <span>Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>Shipping</span>
                    <span>{shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`}</span>
                  </div>
                  {shipping === 0 && (
                    <p className="text-sm text-green-600 bg-green-50 p-2 rounded">
                      🎉 You get free shipping!
                    </p>
                  )}
                  {shipping > 0 && (
                    <p className="text-sm text-gray-500">
                      Spend ${(99 - subtotal).toFixed(2)} more for free shipping
                    </p>
                  )}
                  <div className="flex justify-between text-gray-600">
                    <span>Tax (13%)</span>
                    <span>${tax.toFixed(2)}</span>
                  </div>
                  <div className="pt-3 border-t">
                    <div className="flex justify-between text-lg font-bold text-gray-900">
                      <span>Total</span>
                      <span className="text-emerald-600">${total.toFixed(2)}</span>
                    </div>
                  </div>
                </div>

                {/* Promo Code */}
                <div className="mb-6">
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Promo Code
                  </label>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      placeholder="Enter code"
                      className="flex-1 px-4 py-2 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-emerald-600 text-gray-900 placeholder-gray-400"
                    />
                    <button className="px-6 py-2 bg-gray-200 text-gray-700 rounded-lg font-semibold hover:bg-gray-300 transition">
                      Apply
                    </button>
                  </div>
                </div>

                {/* Checkout Button */}
                <Link 
  to="/checkout"
  className="w-full bg-emerald-600 text-white py-4 px-6 rounded-full font-semibold hover:bg-emerald-700 transition flex items-center justify-center gap-2 mb-4"
>
  Proceed to Checkout
  <ArrowRight className="w-5 h-5" />
</Link>

                {/* Payment Methods */}
                <div className="pt-4 border-t">
                  <p className="text-xs text-gray-500 text-center mb-2">We accept</p>
                  <div className="flex justify-center gap-2">
                    {['💳', '🏦', '💰', '🔒'].map((emoji, i) => (
                      <div key={i} className="w-10 h-10 bg-gray-100 rounded flex items-center justify-center text-lg">
                        {emoji}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Security Note */}
                <div className="mt-4 p-3 bg-gray-50 rounded-lg">
                  <p className="text-xs text-gray-600 text-center">
                    🔒 Secure checkout · Your information is protected
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}