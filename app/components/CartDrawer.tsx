// app/components/CartDrawer.tsx
import { X } from 'lucide-react';
import { Link } from 'react-router';

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
  addOns?: Array<{
    id: string;
    name: string;
    price: number;
    quantity: number;
  }>;
}

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onRemoveItem: (itemId: string) => void;
  onRemoveAddOn: (itemId: string, addOnId: string) => void;
}

export default function CartDrawer({ isOpen, onClose, items, onRemoveItem, onRemoveAddOn }: CartDrawerProps) {
  const calculateItemSubtotal = (item: CartItem) => {
    const itemTotal = item.price * item.quantity;
    const addOnsTotal = item.addOns?.reduce((sum, addOn) => sum + (addOn.price * addOn.quantity), 0) || 0;
    return itemTotal + addOnsTotal;
  };

  const calculateTotal = () => {
    return items.reduce((sum, item) => sum + calculateItemSubtotal(item), 0);
  };

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
  
  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-white/20 backdrop-blur-[2px] z-40 transition-opacity duration-500 ease-in-out ${
  isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
}`}
        onClick={onClose}
      />

      {/* Cart Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full sm:w-96 bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b">
            <h2 className="text-xl font-bold text-gray-900">
              Your Cart {totalItems > 0 && `(${totalItems})`}
            </h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-lg transition"
            >
              <X className="w-5 h-5 text-gray-600" />
            </button>
          </div>

          {/* Cart Content */}
          <div className="flex-1 overflow-y-auto">
            {items.length === 0 ? (
              /* Empty Cart State */
              <div className="flex flex-col items-center justify-center h-full px-6">
                <div className="w-32 h-32 bg-gray-100 rounded-full flex items-center justify-center mb-6">
                  <svg
                    className="w-16 h-16 text-emerald-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                    />
                  </svg>
                </div>
                <Link
                  to="/shop"
                  onClick={onClose}
                  className="bg-emerald-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-emerald-700 transition"
                >
                  Show Product
                </Link>
              </div>
            ) : (
              /* Cart Items */
              <div className="p-6 space-y-6">
                {items.map((item) => (
                  <div key={item.id} className="space-y-3">
                    {/* Main Product */}
                    <div className="flex gap-4">
                      {/* Product Image */}
                      <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="text-3xl">{item.image}</span>
                      </div>

                      {/* Product Details */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-2 mb-1">
                          <h3 className="font-semibold text-gray-900 text-sm leading-tight">
                            {item.name}
                          </h3>
                          <button
                            onClick={() => onRemoveItem(item.id)}
                            className="text-gray-400 hover:text-gray-600 flex-shrink-0"
                          >
                            <X className="w-4 h-4" />
                          </button>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-gray-600 text-sm">
                            {item.quantity}x ${item.price.toFixed(2)}
                          </span>
                          <span className="font-bold text-gray-900">
                            ${(item.price * item.quantity).toFixed(2)}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Add-ons */}
                    {item.addOns && item.addOns.length > 0 && (
                      <div className="ml-20 space-y-2">
                        {item.addOns.map((addOn) => (
                          <div key={addOn.id} className="flex items-center justify-between text-sm">
                            <div className="flex items-start gap-2 flex-1">
                              <span className="text-gray-900">{addOn.name}</span>
                              <button
                                onClick={() => onRemoveAddOn(item.id, addOn.id)}
                                className="text-gray-400 hover:text-gray-600"
                              >
                                <X className="w-3 h-3" />
                              </button>
                            </div>
                            <div className="flex items-center gap-3">
                              <span className="text-gray-600">
                                {addOn.quantity}x ${addOn.price.toFixed(2)}
                              </span>
                              <span className="font-semibold text-gray-900 w-16 text-right">
                                ${(addOn.price * addOn.quantity).toFixed(2)}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Subtotal */}
                    {item.addOns && item.addOns.length > 0 && (
                      <div className="flex items-center justify-between pt-2 border-t">
                        <span className="text-gray-600">Subtotal</span>
                        <span className="font-bold text-gray-900">
                          ${calculateItemSubtotal(item).toFixed(2)}
                        </span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          {items.length > 0 && (
            <div className="border-t p-6 space-y-4">
              {/* Total */}
              <div className="flex items-center justify-between text-lg">
                <span className="font-bold text-gray-900">TOTAL</span>
                <span className="font-bold text-red-500">
                  ${calculateTotal().toFixed(2)}
                </span>
              </div>

              {/* Checkout Button */}
              <Link
                to="/checkout"
                onClick={onClose}
                className="block w-full bg-emerald-600 text-white py-4 rounded-full font-semibold hover:bg-emerald-700 transition text-center"
              >
                Checkout
              </Link>

              {/* Payment Providers */}
              <div className="text-center">
                <p className="text-xs text-gray-500 uppercase tracking-wider mb-3">
                  Secure payments provided by
                </p>
                <div className="flex items-center justify-center gap-4">
                  <div className="w-10 h-6 bg-gradient-to-r from-red-500 to-orange-500 rounded flex items-center justify-center">
                    <span className="text-white text-xs font-bold">M</span>
                  </div>
                  <div className="w-10 h-6 bg-blue-600 rounded flex items-center justify-center">
                    <span className="text-white text-xs font-bold">VISA</span>
                  </div>
                  <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs font-bold">₿</span>
                  </div>
                  <div className="w-10 h-6 bg-yellow-400 rounded flex items-center justify-center">
                    <span className="text-gray-800 text-xs font-bold">I</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}