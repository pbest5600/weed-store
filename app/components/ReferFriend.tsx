// app/components/ReferFriend.tsx
import { Gift, ArrowRight } from 'lucide-react';
import type { FC } from 'react';

const ReferFriend: FC = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-emerald-800 via-emerald-700 to-emerald-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-white/20">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Left Content */}
            <div className="text-white">
              <div className="inline-flex items-center gap-2 bg-emerald-600 px-4 py-2 rounded-full mb-4">
                <Gift className="w-4 h-4" />
                <span className="font-semibold text-sm">Referral Program</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Refer a Friend & Get $25
              </h2>
              
              <p className="text-emerald-100 mb-6 leading-relaxed">
                Share the love! Refer a friend and you'll both receive $25 in credit. 
                Plus, earn points for every purchase they make.
              </p>

              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2 text-emerald-100">
                  <span className="w-2 h-2 bg-emerald-400 rounded-full"></span>
                  Get $25 credit instantly when they make their first purchase
                </li>
                <li className="flex items-center gap-2 text-emerald-100">
                  <span className="w-2 h-2 bg-emerald-400 rounded-full"></span>
                  Your friend gets $25 off their first order
                </li>
                <li className="flex items-center gap-2 text-emerald-100">
                  <span className="w-2 h-2 bg-emerald-400 rounded-full"></span>
                  Unlimited referrals - the more you share, the more you earn
                </li>
              </ul>

              <button className="bg-white text-emerald-800 px-8 py-4 rounded-full font-semibold hover:bg-emerald-50 transition flex items-center gap-2">
                Get Your Referral Link
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Right Content - Visual Element */}
            <div className="hidden md:flex justify-center items-center">
              <div className="relative">
                <div className="w-64 h-64 bg-emerald-600/30 rounded-full flex items-center justify-center backdrop-blur-sm border border-emerald-400/30">
                  <div className="w-48 h-48 bg-emerald-500/40 rounded-full flex items-center justify-center">
                    <Gift className="w-24 h-24 text-white" />
                  </div>
                </div>
                <div className="absolute -top-4 -right-4 bg-yellow-400 text-gray-900 px-4 py-2 rounded-full font-bold text-xl shadow-lg">
                  $25
                </div>
                <div className="absolute -bottom-4 -left-4 bg-yellow-400 text-gray-900 px-4 py-2 rounded-full font-bold text-xl shadow-lg">
                  $25
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReferFriend;