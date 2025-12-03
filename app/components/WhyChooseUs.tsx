// app/components/WhyChooseUs.tsx
import { Truck, Shield, Award } from 'lucide-react';

export default function WhyChooseUs() {
  const features = [
    {
      icon: Truck,
      title: 'Reliable Shipping',
      description: 'Green Society provides Canada Post Xpress Post shipping for orders over $99 toward any location in Canada. Xpress Post shipping typically takes 2-3 business days after the order is sent, but may take longer depending on your location.',
    },
    {
      icon: Shield,
      title: "You're Safe With Us",
      description: 'Our secure payment system accepts the most common forms of payments making the checkout process quicker! You can also trust that your information is kept safe when you order from us.',
    },
    {
      icon: Award,
      title: 'Best Quality & Pricing',
      description: 'Here at Green Society, we take pride in the quality of our products and service. Our prices are set to ensure you receive your medication at a reasonable price and safely.',
    },
  ];

  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-emerald-600" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
