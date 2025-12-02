// app/components/WhyChooseUs.tsx
import { Shield, Truck, Award, HeadphonesIcon, Leaf, BadgeCheck } from 'lucide-react';
import type { FC } from 'react';

const WhyChooseUs: FC = () => {
  const features = [
    {
      icon: Shield,
      title: 'Safe & Secure',
      description: 'All transactions are encrypted and your privacy is our top priority. Discreet packaging guaranteed.',
    },
    {
      icon: Truck,
      title: 'Fast Delivery',
      description: 'Same-day shipping available. Free delivery on orders over $99. Track your package in real-time.',
    },
    {
      icon: Award,
      title: 'Premium Quality',
      description: 'Only the finest cannabis products. Lab-tested for potency and purity. AAA+ grade guarantee.',
    },
    {
      icon: HeadphonesIcon,
      title: '24/7 Support',
      description: 'Our customer service team is always here to help. Live chat, email, or phone support available.',
    },
    {
      icon: Leaf,
      title: 'Best Selection',
      description: 'Huge variety of strains, edibles, concentrates, and more. New products added weekly.',
    },
    {
      icon: BadgeCheck,
      title: 'Price Match',
      description: 'Found a lower price? We\'ll match it. Competitive pricing and bulk discounts available.',
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-block bg-emerald-100 text-emerald-800 px-4 py-2 rounded-full font-semibold text-sm mb-4">
            Why Choose Us
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            What Makes Us The #1 Online Marijuana Dispensary in Canada?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We're committed to providing the best cannabis shopping experience with premium products, 
            unbeatable service, and prices that can't be beat.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="bg-gray-50 rounded-xl p-6 hover:shadow-md transition-shadow"
              >
                {/* Icon */}
                <div className="w-12 h-12 bg-emerald-600 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-white" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Join thousands of satisfied customers across Canada
          </p>
          <button className="bg-emerald-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-emerald-700 transition">
            Start Shopping
          </button>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;