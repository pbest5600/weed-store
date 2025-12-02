// app/routes/_index.tsx
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import FeaturedProducts from '../components/FeaturedProducts';
import CategoryTabs from '../components/CategoryTabs';
import Testimonials from '../components/Testimonials';
import ReferFriend from '../components/ReferFriend';
import HowToOrder from '../components/HowToOrder';
import WhyChooseUs from '../components/WhyChooseUs';
import Footer from '../components/Footer';

export default function Index() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <Hero />
      <FeaturedProducts />
      <Testimonials />
      <CategoryTabs />
      <ReferFriend />
      <HowToOrder />
      <WhyChooseUs />
      <Footer />
    </div>
  );
}