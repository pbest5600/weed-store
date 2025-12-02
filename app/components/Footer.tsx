// app/components/Footer.tsx
import { Link } from 'react-router';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';
import type { FC } from 'react';

const Footer: FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-emerald-900 via-emerald-800 to-emerald-900 text-white">
      {/* Newsletter Section */}
      <div className="border-b border-emerald-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-2">
                Unlock 30% Off Your First Order
              </h3>
              <p className="text-emerald-200">
                Subscribe to our newsletter for exclusive deals and updates
              </p>
            </div>
            <div className="flex gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-full bg-white/10 border border-white/20 text-white placeholder-emerald-300 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
              <button className="bg-white text-emerald-800 px-8 py-3 rounded-full font-semibold hover:bg-emerald-50 transition whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-emerald-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">🍃</span>
              </div>
              <span className="text-xl font-bold">GreenLeaf</span>
            </div>
            <p className="text-emerald-200 mb-4 leading-relaxed">
              Canada's most trusted online dispensary. Premium quality cannabis delivered 
              to your door with fast, discreet shipping.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['Shop All', 'Indica', 'Sativa', 'Hybrid', 'CBD Products', 'Edibles', 'Concentrates', 'Accessories'].map((item) => (
                <li key={item}>
                  <Link
                    to={`/${item.toLowerCase().replace(' ', '-')}`}
                    className="text-emerald-200 hover:text-white transition"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Information */}
          <div>
            <h4 className="font-bold text-lg mb-4">Information</h4>
            <ul className="space-y-2">
              {['About Us', 'Contact Us', 'FAQs', 'Shipping Info', 'Returns Policy', 'Privacy Policy', 'Terms & Conditions', 'Blog'].map((item) => (
                <li key={item}>
                  <Link
                    to={`/${item.toLowerCase().replace(' ', '-')}`}
                    className="text-emerald-200 hover:text-white transition"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-lg mb-4">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-1" />
                <span className="text-emerald-200">
                  123 Cannabis Street<br />
                  Vancouver, BC V6B 1A1<br />
                  Canada
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                <a href="tel:+15551234567" className="text-emerald-200 hover:text-white transition">
                  +1 (555) 123-4567
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                <a href="mailto:support@greenleaf.ca" className="text-emerald-200 hover:text-white transition">
                  support@greenleaf.ca
                </a>
              </li>
            </ul>
            <div className="mt-6">
              <p className="text-emerald-200 text-sm mb-2">Payment Methods</p>
              <div className="flex gap-2">
                {['💳', '🏦', '💰', '🔒'].map((emoji, i) => (
                  <div key={i} className="w-10 h-10 bg-white/10 rounded flex items-center justify-center text-xl">
                    {emoji}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-emerald-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-emerald-200 text-sm text-center md:text-left">
              © {currentYear} GreenLeaf. All rights reserved. Must be 19+ to purchase.
            </p>
            <div className="flex gap-6 text-sm">
              <Link to="/privacy" className="text-emerald-200 hover:text-white transition">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-emerald-200 hover:text-white transition">
                Terms of Service
              </Link>
              <Link to="/cookies" className="text-emerald-200 hover:text-white transition">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;