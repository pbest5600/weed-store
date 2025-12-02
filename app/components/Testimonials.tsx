// app/components/Testimonials.tsx
import { Star, Quote } from 'lucide-react';
import type { FC } from 'react';

interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  text: string;
  date: string;
}

const Testimonials: FC = () => {
  const testimonials: Testimonial[] = [
    {
      id: '1',
      name: 'Sarah Johnson',
      location: 'Toronto, ON',
      rating: 5,
      text: 'Absolutely amazing quality! The Blue Dream was exactly as described and arrived within 24 hours. Customer service was incredibly helpful and discreet packaging was perfect.',
      date: 'Nov 2024',
    },
    {
      id: '2',
      name: 'Michael Chen',
      location: 'Vancouver, BC',
      rating: 5,
      text: 'Best online dispensary in Canada hands down. Great selection, competitive prices, and the loyalty program is fantastic. Been ordering for 6 months now.',
      date: 'Nov 2024',
    },
    {
      id: '3',
      name: 'Emma Williams',
      location: 'Montreal, QC',
      rating: 4,
      text: 'Really impressed with the quality and service. The CBD products have helped tremendously with my anxiety. Only minor complaint is I wish they had more edible options.',
      date: 'Oct 2024',
    },
    {
      id: '4',
      name: 'David Martinez',
      location: 'Calgary, AB',
      rating: 5,
      text: 'Lightning fast delivery and top-notch product quality. The OG Kush was fire! Will definitely be a repeat customer. Highly recommend to anyone in Canada.',
      date: 'Oct 2024',
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Customer Testimonials
          </h2>
          <p className="text-gray-600">
            See what our satisfied customers have to say
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-gray-50 rounded-xl p-6 hover:shadow-md transition-shadow"
            >
              {/* Quote Icon */}
              <div className="mb-4">
                <Quote className="w-8 h-8 text-emerald-600 fill-emerald-600" />
              </div>

              {/* Rating */}
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${
                      i < testimonial.rating
                        ? 'fill-yellow-400 text-yellow-400'
                        : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-gray-700 mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>

              {/* Customer Info */}
              <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.location}</p>
                </div>
                <span className="text-sm text-gray-400">{testimonial.date}</span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center mt-10">
          <button className="text-emerald-600 hover:text-emerald-700 font-semibold">
            Read More Reviews →
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;