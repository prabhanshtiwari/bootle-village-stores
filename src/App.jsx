import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import ProductGrid from './components/ProductGrid.jsx';
import Services from './components/Services.jsx';
import OpeningHours from './components/OpeningHours.jsx';
import ContactSection from './components/ContactSection.jsx';
import LocationSection from './components/LocationSection.jsx';
import Footer from './components/Footer.jsx';
import MobileQuickActions from './components/MobileQuickActions.jsx';

export default function App() {
  return (
    <div className="min-h-screen bg-cream font-sans text-stone-800">
      <Header />
      <main>
        <Hero />
        <ProductGrid />
        <Services />
        <OpeningHours />
        <ContactSection />
        <LocationSection />
      </main>
      <Footer />
      <MobileQuickActions />
    </div>
  );
}
