// app/routes/success.tsx
import { Link } from 'react-router';
import Navigation from '~/components/Navigation';
import Footer from '~/components/Footer';
import { Check, ShoppingBag } from 'lucide-react';

export default function SuccessPage() {
  const orderDetails = {
    items: [
      {
        id: 1,
        name: 'Khalifa Kush (AAAA)',
        quantity: 2,
        price: 120.00,
        originalPrice: 240.00,
        image: '🌿',
        addons: [
          { name: 'Add Integra Pack - 4g', quantity: 1, price: 2.00 },
          { name: 'Add Integra Pack - 8g', quantity: 1, price: 3.00 }
        ],
        subtotal: 245.00
      },
      {
        id: 2,
        name: 'Jungle Diamond (AA+)',
        quantity: 1,
        price: 200.00,
        originalPrice: 200.00,
        image: '🌱'
      },
      {
        id: 3,
        name: 'Shipwreck Edibles Gummy',
        quantity: 5,
        price: 13.00,
        originalPrice: 52.00,
        image: '💊'
      }
    ],
    total: 497.00,
    shipping: 'New York, US',
    shippingOption: 'Same-Day Dispatching',
    paymentMethod: 'Interac',
    subtotal: 497.00,
    discount: 0,
    shippingCosts: 50.00,
    points: -250,
    finalTotal: 297.00
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      {/* Progress Steps - Desktop */}
      <div className="hidden lg:block bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-center gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                <Check className="w-5 h-5 text-emerald-600" />
              </div>
              <span className="text-gray-600">Shopping Cart</span>
            </div>
            <div className="w-20 h-0.5 bg-gray-300"></div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                <Check className="w-5 h-5 text-emerald-600" />
              </div>
              <span className="text-gray-600">Checkout</span>
            </div>
            <div className="w-20 h-0.5 bg-gray-300"></div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-emerald-600 rounded-full flex items-center justify-center text-white">
                <Check className="w-5 h-5" />
              </div>
              <span className="font-semibold text-gray-900">Order Complete</span>
            </div>
          </div>
        </div>
      </div>

      {/* Progress Steps - Mobile */}
      <div className="lg:hidden bg-white border-b">
        <div className="px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                <Check className="w-4 h-4 text-emerald-600" />
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                <Check className="w-4 h-4 text-emerald-600" />
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center">
                <ShoppingBag className="w-4 h-4 text-white" />
              </div>
              <span className="font-semibold text-sm">Order Complete</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Order Confirmation Header */}
        <div className="text-center mb-12">
          <div className="flex justify-between items-start mb-6">
            <div className="text-left">
              <h1 className="text-2xl font-bold text-gray-900 mb-2">Your Order</h1>
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm font-semibold">
                  Paid
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Order Items */}
        <div className="bg-white rounded-lg p-6 mb-8">
          <div className="space-y-6">
            {orderDetails.items.map((item) => (
              <div key={item.id}>
                <div className="flex gap-4">
                  <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center text-3xl flex-shrink-0">
                    {item.image}
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="font-semibold text-gray-900">{item.name}</h3>
                        <div className="flex items-center gap-4 text-sm">
                          <span className="text-gray-500">{item.quantity}x</span>
                          <span className="font-semibold">${item.price.toFixed(2)}</span>
                          {item.originalPrice > item.price && (
                            <span className="text-gray-400 line-through">
                              ${item.originalPrice.toFixed(2)}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Addons */}
                    {item.addons && item.addons.map((addon, idx) => (
                      <div key={idx} className="flex justify-between text-sm text-gray-600 mt-2">
                        <span>{addon.name}</span>
                        <div className="flex items-center gap-4">
                          <span>{addon.quantity}x</span>
                          <span className="font-semibold">${addon.price.toFixed(2)}</span>
                          <span className="text-gray-400">${addon.price.toFixed(2)}</span>
                        </div>
                      </div>
                    ))}

                    {/* Item Subtotal */}
                    {item.subtotal && (
                      <div className="flex justify-between mt-3 pt-3 border-t">
                        <span className="text-sm text-gray-600">Subtotal</span>
                        <span className="font-bold">${item.subtotal.toFixed(2)}</span>
                      </div>
                    )}
                  </div>
                </div>
                {item.id !== orderDetails.items[orderDetails.items.length - 1].id && (
                  <div className="border-b mt-6"></div>
                )}
              </div>
            ))}
          </div>

          {/* Order Total */}
          <div className="border-t mt-6 pt-6">
            <div className="flex justify-between items-center mb-2">
              <span className="text-xl font-bold text-gray-900">TOTAL</span>
              <span className="text-2xl font-bold text-red-500">
                ${orderDetails.total.toFixed(2)}
              </span>
            </div>
          </div>
        </div>

        {/* Shipping & Payment Details */}
        <div className="bg-white rounded-lg p-6 mb-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">Shipping</span>
                <span className="font-semibold text-gray-900">{orderDetails.shipping}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Shipping Options</span>
                <span className="font-semibold text-gray-900">{orderDetails.shippingOption}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Email Money Transfer</span>
                <span className="font-semibold text-gray-900">{orderDetails.paymentMethod}</span>
              </div>
            </div>

            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">Subtotal</span>
                <span className="font-semibold text-gray-900">${orderDetails.subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Discount</span>
                <span className="font-semibold text-gray-900">${orderDetails.discount.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Shipping Costs</span>
                <span className="font-semibold text-gray-900">${orderDetails.shippingCosts.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Point</span>
                <span className="font-semibold text-gray-900">- ${Math.abs(orderDetails.points)}</span>
              </div>
            </div>
          </div>

          <div className="border-t mt-6 pt-6">
            <div className="flex justify-between items-center">
              <span className="text-lg font-bold text-gray-900">TOTAL</span>
              <span className="text-2xl font-bold text-red-500">
                ${orderDetails.finalTotal.toFixed(2)}
              </span>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <p className="text-gray-600 mb-6">New Order, Click button bellow</p>
          <Link
            to="/shop"
            className="inline-block bg-emerald-600 text-white px-12 py-4 rounded-full font-semibold hover:bg-emerald-700 transition"
          >
            Shop Now
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
}
