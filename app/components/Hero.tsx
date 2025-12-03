// app/components/Hero.tsx
import { Link } from 'react-router';

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-emerald-900 via-teal-800 to-emerald-900 overflow-hidden">
      {/* Background pattern overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.4"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="relative z-10">
            <div className="inline-block mb-4">
              <span className="bg-emerald-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                Best Seller
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
              BEST DISPENSARY TO BUY WEED ONLINE
            </h1>
            
            <p className="text-emerald-100 text-lg mb-8">
              Vitamins & Supplements
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-6 py-3">
                <p className="text-emerald-100 text-sm">Get 25% off</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-6 py-3">
                <p className="text-emerald-100 text-sm">Free Shipping</p>
              </div>
            </div>

            <Link
              to="/shop"
              className="inline-block bg-emerald-500 hover:bg-emerald-600 text-white font-bold px-8 py-4 rounded-full transition-all transform hover:scale-105 shadow-lg"
            >
              Shop All
            </Link>
          </div>

          {/* Right Content - 3D Product Display */}
          <div className="relative z-10 hidden lg:block">
            <div className="relative h-96">
              {/* Pedestal 1 - Left */}
              <div className="absolute left-0 top-20 w-32 h-48 transform -rotate-12">
                <div className="relative h-full">
                  {/* Pedestal */}
                  <div className="absolute bottom-0 w-full h-32 bg-gradient-to-br from-gray-300 to-gray-400 shadow-2xl"
                       style={{ clipPath: 'polygon(20% 0%, 80% 0%, 100% 100%, 0% 100%)' }} />
                  {/* Product */}
                  <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-24 h-32 bg-gradient-to-br from-emerald-600 to-emerald-800 rounded-lg shadow-2xl flex items-center justify-center">
                    <span className="text-4xl">🌿</span>
                  </div>
                </div>
              </div>

              {/* Pedestal 2 - Center (Tallest) */}
              <div className="absolute left-1/2 -translate-x-1/2 top-0 w-36 h-64 transform rotate-3">
                <div className="relative h-full">
                  {/* Pedestal */}
                  <div className="absolute bottom-0 w-full h-48 bg-gradient-to-br from-gray-200 to-gray-300 shadow-2xl"
                       style={{ clipPath: 'polygon(20% 0%, 80% 0%, 100% 100%, 0% 100%)' }} />
                  {/* Product */}
                  <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-28 h-36 bg-gradient-to-br from-emerald-500 to-emerald-700 rounded-lg shadow-2xl flex items-center justify-center">
                    <span className="text-5xl">🍃</span>
                  </div>
                </div>
              </div>

              {/* Pedestal 3 - Right */}
              <div className="absolute right-0 top-32 w-32 h-40 transform rotate-12">
                <div className="relative h-full">
                  {/* Pedestal */}
                  <div className="absolute bottom-0 w-full h-24 bg-gradient-to-br from-gray-300 to-gray-400 shadow-2xl"
                       style={{ clipPath: 'polygon(20% 0%, 80% 0%, 100% 100%, 0% 100%)' }} />
                  {/* Product */}
                  <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-20 h-28 bg-gradient-to-br from-yellow-500 to-yellow-700 rounded-lg shadow-2xl flex items-center justify-center">
                    <span className="text-3xl">🍪</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave decoration */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
          <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="#F9FAFB"/>
        </svg>
      </div>
    </section>
  );
}
  