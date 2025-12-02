// app/components/HowToOrder.tsx
import { Search, ShoppingCart, CreditCard, Package } from 'lucide-react';
import type { FC } from 'react';

const HowToOrder: FC = () => {
  const steps = [
    {
      icon: Search,
      title: 'Browse Products',
      description: 'Explore our wide selection of premium cannabis products. Filter by strain type, price, or effects.',
      number: '01',
    },
    {
      icon: ShoppingCart,
      title: 'Add to Cart',
      description: 'Select your desired products and quantities. Review your order before checkout.',
      number: '02',
    },
    {
      icon: CreditCard,
      title: 'Secure Checkout',
      description: 'Complete your purchase with our encrypted payment system. Multiple payment options available.',
      number: '03',
    },
    {
      icon: Package,
      title: 'Fast Delivery',
      description: 'Receive your order in discreet packaging. Track your shipment in real-time from dispatch to delivery.',
      number: '04',
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2">
            How to Order Weed Online from Top Shelf BC
          </h2>
          <p className="text-gray-400">
            Mail Order Marijuana
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative">
                {/* Step Number Background */}
                <div className="absolute top-0 left-0 text-8xl font-bold text-white/5 leading-none">
                  {step.number}
                </div>

                {/* Content */}
                <div className="relative">
                  {/* Icon */}
                  <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mb-4">
                    <Icon className="w-8 h-8 text-gray-900" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold mb-3">{step.title}</h3>

                  {/* Description */}
                  <p className="text-gray-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Connector Line (hidden on last item) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 -right-4 w-8 h-0.5 bg-yellow-400/30" />
                )}
              </div>
            );
          })}
        </div>

        {/* CTA Button */}
        <div className="text-center mt-12">
          <button className="bg-emerald-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-emerald-700 transition">
            Start Shopping Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowToOrder;