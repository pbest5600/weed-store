// app/components/Hero.tsx
import { Link } from 'react-router';
import type { FC } from 'react';

const Hero: FC = () => {
  return (
    <section className="bg-gradient-to-br from-emerald-800 via-emerald-700 to-emerald-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="inline-block bg-emerald-600 px-4 py-2 rounded-full text-sm font-semibold">
              #1 Online Dispensary
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
              BEST DISPENSARY TO BUY WEED ONLINE
            </h1>
            <p className="text-lg text-emerald-100 leading-relaxed">
              Premium quality cannabis products delivered to your door. 
              Fast, discreet, and reliable service across Canada.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/shop" 
                className="bg-white text-emerald-800 px-8 py-4 rounded-full font-semibold hover:bg-emerald-50 transition text-center"
              >
                Shop Now
              </Link>
              <Link 
                to="/about" 
                className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-emerald-800 transition text-center"
              >
                Learn More
              </Link>
            </div>
          </div>

          {/* Right Content - Product Image */}
          <div className="relative">
            <div className="relative z-10 flex justify-center">
              {/* Placeholder for cannabis product images */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-emerald-600/30 backdrop-blur-sm p-6 rounded-2xl border border-emerald-400/30">
                  <div className="w-32 h-32 bg-emerald-500/50 rounded-xl flex items-center justify-center text-6xl">
                    🌿
                  </div>
                </div>
                <div className="bg-emerald-600/30 backdrop-blur-sm p-6 rounded-2xl border border-emerald-400/30 mt-8">
                  <div className="w-32 h-32 bg-emerald-500/50 rounded-xl flex items-center justify-center text-6xl">
                    💊
                  </div>
                </div>
              </div>
            </div>
            {/* Decorative circles */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-600 rounded-full opacity-20 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-emerald-400 rounded-full opacity-20 blur-3xl"></div>
          </div>
        </div>
      </div>

      {/* Feature Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
            <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center mb-4">
              <span className="text-2xl">🔒</span>
            </div>
            <h3 className="text-xl font-bold mb-2">Secure & Discreet</h3>
            <p className="text-emerald-100">
              All orders are packaged discreetly with secure payment processing.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
            <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center mb-4">
              <span className="text-2xl">📞</span>
            </div>
            <h3 className="text-xl font-bold mb-2">24/7 Support</h3>
            <p className="text-emerald-100">
              Call us anytime for advice on products and ordering.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
            <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center mb-4">
              <span className="text-2xl">💰</span>
            </div>
            <h3 className="text-xl font-bold mb-2">Best Prices</h3>
            <p className="text-emerald-100">
              Competitive pricing with special offers and bulk discounts.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;