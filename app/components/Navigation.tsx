// app/components/Navigation.tsx
import { Link } from 'react-router';
import { Search, ShoppingCart, User, Menu } from 'lucide-react';
import { useState } from 'react';
import type { FC } from 'react';

const Navigation: FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-emerald-800 text-white py-2 px-4 text-sm text-center">
        Free shipping on orders over $99 | Same day delivery available
      </div>

      {/* Main Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-emerald-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xl">🍃</span>
            </div>
            <span className="text-xl font-bold text-emerald-800">GreenLeaf</span>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/shop" className="text-gray-700 hover:text-emerald-600 transition">
              Shop
            </Link>
            <Link to="/indica" className="text-gray-700 hover:text-emerald-600 transition">
              Indica
            </Link>
            <Link to="/sativa" className="text-gray-700 hover:text-emerald-600 transition">
              Sativa
            </Link>
            <Link to="/hybrid" className="text-gray-700 hover:text-emerald-600 transition">
              Hybrid
            </Link>
            <Link to="/cbd" className="text-gray-700 hover:text-emerald-600 transition">
              CBD
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-emerald-600 transition">
              About
            </Link>
          </div>

          {/* Right Side Icons */}
          <div className="flex items-center space-x-4">
            <button className="p-2 hover:bg-gray-100 rounded-full transition">
              <Search className="w-5 h-5 text-gray-700" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-full transition">
              <User className="w-5 h-5 text-gray-700" />
            </button>
            <Link to="/cart" className="p-2 hover:bg-gray-100 rounded-full transition relative">
              <ShoppingCart className="w-5 h-5 text-gray-700" />
              <span className="absolute -top-1 -right-1 bg-emerald-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                0
              </span>
            </Link>
            <button 
              className="md:hidden p-2 hover:bg-gray-100 rounded-full"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="w-5 h-5 text-gray-700" />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-3">
              <Link to="/shop" className="text-gray-700 hover:text-emerald-600 py-2">
                Shop
              </Link>
              <Link to="/indica" className="text-gray-700 hover:text-emerald-600 py-2">
                Indica
              </Link>
              <Link to="/sativa" className="text-gray-700 hover:text-emerald-600 py-2">
                Sativa
              </Link>
              <Link to="/hybrid" className="text-gray-700 hover:text-emerald-600 py-2">
                Hybrid
              </Link>
              <Link to="/cbd" className="text-gray-700 hover:text-emerald-600 py-2">
                CBD
              </Link>
              <Link to="/about" className="text-gray-700 hover:text-emerald-600 py-2">
                About
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;