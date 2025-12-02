// app/routes/checkout.tsx
import { useState } from 'react';
import { Link, useNavigate } from 'react-router';
import Navigation from '~/components/Navigation';
import Footer from '~/components/Footer';
import { Check, ShoppingCart, Package, ShoppingBag } from 'lucide-react';

export default function CheckoutPage() {
  const navigate = useNavigate();
  const [shipToDifferentAddress, setShipToDifferentAddress] = useState(false);
  const [signUpForUpdates, setSignUpForUpdates] = useState(false);
  const [confirmAddress, setConfirmAddress] = useState(false);
  const [usePoints, setUsePoints] = useState(false);

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    country: 'Singapore',
    address: '',
    apartment: '',
    city: '',
    province: '',
    postalCode: '',
    phone: '',
    email: '',
    orderNotes: '',
    outOfStock: 'Contact me (With delay)',
    whereHeard: ''
  });

  const orderSummary = {
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
        ]
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
        quantity: 4,
        price: 13.00,
        originalPrice: 52.00,
        image: '💊'
      }
    ],
    subtotal: 497.00,
    shipping: 'New York, US',
    discount: 0,
    shippingCosts: 50.00,
    paymentMethod: 'Email Money Transfer',
    points: 10850
  };

  const total = orderSummary.subtotal - orderSummary.discount + orderSummary.shippingCosts;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/success');
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
              <div className="w-10 h-10 bg-emerald-600 rounded-full flex items-center justify-center text-white font-semibold">
                2
              </div>
              <span className="font-semibold text-gray-900">Checkout</span>
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
              <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                <Check className="w-4 h-4 text-emerald-600" />
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center">
                <Package className="w-4 h-4 text-white" />
              </div>
              <span className="font-semibold text-sm">Checkout</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                <ShoppingBag className="w-4 h-4 text-gray-400" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        <form onSubmit={handleSubmit}>
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Checkout Form - Left Side */}
            <div className="lg:col-span-2">
              {/* Notification Area (optional) */}
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
                <p className="text-sm text-yellow-800">Notification Area</p>
              </div>

              {/* Shipping Section */}
              <div className="bg-white rounded-lg p-6 mb-6">
                <h2 className="text-xl font-bold text-gray-900 mb-6">
                  Shipping <span className="text-gray-400">(3)</span>
                </h2>

                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      FIRST NAME *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.firstName}
                      onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-emerald-600"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      LAST NAME *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.lastName}
                      onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-emerald-600"
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    COUNTRY / REGION *
                  </label>
                  <select
                    value={formData.country}
                    onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-emerald-600 bg-white"
                  >
                    <option>Singapore</option>
                    <option>United States</option>
                    <option>Canada</option>
                    <option>United Kingdom</option>
                  </select>
                </div>

                <div className="mb-4">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    COUNTRY / REGION *
                  </label>
                  <input
                    type="text"
                    placeholder="House number and street name"
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-emerald-600 mb-3"
                  />
                  <input
                    type="text"
                    placeholder="Apartment, suite, unit, etc. (optional)"
                    value={formData.apartment}
                    onChange={(e) => setFormData({ ...formData, apartment: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-emerald-600"
                  />
                </div>

                <div className="grid md:grid-cols-3 gap-4 mb-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      TOWN / CITY *
                    </label>
                    <input
                      type="text"
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-emerald-600"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      PROVINCE *
                    </label>
                    <select
                      value={formData.province}
                      onChange={(e) => setFormData({ ...formData, province: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-emerald-600 bg-white"
                    >
                      <option value="">Select...</option>
                      <option>New York</option>
                      <option>California</option>
                      <option>Texas</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      POSTCODE / ZIP *
                    </label>
                    <input
                      type="text"
                      value={formData.postalCode}
                      onChange={(e) => setFormData({ ...formData, postalCode: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-emerald-600"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      PHONE (OPTIONAL)
                    </label>
                    <input
                      type="tel"
                      placeholder="+1 2463285025"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-emerald-600"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      EMAIL ADDRESS *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="johndoe@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-emerald-600"
                    />
                  </div>
                </div>

                {/* Ship to Different Address */}
                <div className="mb-4">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      checked={shipToDifferentAddress}
                      onChange={(e) => setShipToDifferentAddress(e.target.checked)}
                      className="mr-3 w-5 h-5 text-emerald-600 rounded border-gray-300"
                    />
                    <span className="font-semibold text-gray-900">Ship to a different Address?</span>
                  </label>
                </div>

                {/* Order Notes */}
                <div className="mb-4">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    ORDER NOTES (OPTIONAL)
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Notes about your order, e.g. special notes for delivery."
                    value={formData.orderNotes}
                    onChange={(e) => setFormData({ ...formData, orderNotes: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-emerald-600"
                  />
                </div>

                {/* Out of Stock Question */}
                <div className="mb-4">
                  <label className="block text-sm font-semibold text-gray-900 mb-3">
                    What would you like us to do if an Item is out os Stock?
                  </label>
                  <select
                    value={formData.outOfStock}
                    onChange={(e) => setFormData({ ...formData, outOfStock: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-emerald-600 bg-white"
                  >
                    <option>Contact me (With delay)</option>
                    <option>Cancel my order</option>
                    <option>Send partial order</option>
                  </select>
                </div>

                {/* Where Heard */}
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-3">
                    Where did you hear About Us?
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Notes about your order, e.g. special notes for delivery."
                    value={formData.whereHeard}
                    onChange={(e) => setFormData({ ...formData, whereHeard: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-emerald-600"
                  />
                </div>
              </div>
            </div>

            {/* Order Summary - Right Side */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg p-6 sticky top-4">
                <div className="space-y-3 mb-6 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Subtotal</span>
                    <span className="font-semibold text-gray-900">${orderSummary.subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Shipping</span>
                    <span className="font-semibold text-gray-900">{orderSummary.shipping}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Discount</span>
                    <span className="font-semibold text-gray-900">${orderSummary.discount.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Shipping Costs</span>
                    <span className="font-semibold text-gray-900">${orderSummary.shippingCosts.toFixed(2)}</span>
                  </div>
                </div>

                <div className="border-t pt-4 mb-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-gray-600 text-sm">Email Money Transfer</span>
                    <div className="w-8 h-6 bg-yellow-400 rounded"></div>
                  </div>
                </div>

                {/* Coupon Code */}
                <div className="flex gap-2 mb-6">
                  <input
                    type="text"
                    placeholder="Coupon code"
                    className="flex-1 px-4 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-emerald-600"
                  />
                  <button
                    type="button"
                    className="px-4 py-2 text-emerald-600 font-semibold hover:bg-emerald-50 rounded-lg transition text-sm"
                  >
                    Apply Coupon
                  </button>
                </div>

                {/* Checkboxes */}
                <div className="space-y-3 mb-6">
                  <label className="flex items-start">
                    <input
                      type="checkbox"
                      checked={confirmAddress}
                      onChange={(e) => setConfirmAddress(e.target.checked)}
                      className="mt-1 mr-3 w-4 h-4 text-emerald-600 rounded border-gray-300"
                    />
                    <span className="text-sm text-gray-700">
                      I confirm that my address is 100% correct and WILL NOT hold Top Shelf BC liable if this shipment is sent to an incorrect address. *
                    </span>
                  </label>
                  <label className="flex items-start">
                    <input
                      type="checkbox"
                      checked={signUpForUpdates}
                      onChange={(e) => setSignUpForUpdates(e.target.checked)}
                      className="mt-1 mr-3 w-4 h-4 text-emerald-600 rounded border-gray-300"
                    />
                    <span className="text-sm text-gray-700">
                      Sign me up to receive email updates and news (optional)
                    </span>
                  </label>
                </div>

                {/* Points */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center text-white text-xs font-bold">
                      ⭐
                    </div>
                    <span className="text-sm text-gray-600">Your point</span>
                    <span className="font-semibold">{orderSummary.points.toLocaleString()}</span>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={usePoints}
                      onChange={(e) => setUsePoints(e.target.checked)}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-emerald-600"></div>
                  </label>
                </div>

                {/* Place Order Button */}
                <button
                  type="submit"
                  className="w-full bg-emerald-600 text-white py-3 rounded-full font-semibold hover:bg-emerald-700 transition mb-6"
                >
                  Place Order | ${total.toFixed(2)}
                </button>

                {/* Payment Icons */}
                <div className="pt-6 border-t">
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
        </form>
      </div>

      <Footer />
    </div>
  );
}
