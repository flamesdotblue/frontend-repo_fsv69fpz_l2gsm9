import React, { useRef } from 'react';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import ReviewsBrandsSection from './components/ReviewsBrandsSection';
import CTAAndFAQSection from './components/CTAAndFAQSection';
import { Instagram, Twitter, Linkedin, Phone } from 'lucide-react';

function App() {
  const bookRef = useRef(null);

  const handleScrollToBook = () => {
    const el = document.querySelector('#book');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#292929] text-white font-['Inter',sans-serif]">
      <header className="sticky top-0 z-40 backdrop-blur bg-[#292929]/70 border-b border-white/5">
        <div className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 rounded-full bg-[#C1FF72]" />
            <span className="font-semibold">Healthy Mind By Avik™</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm text-white/80">
            <a href="#services" className="hover:text-white">Services</a>
            <a href="#book" className="hover:text-white">Book</a>
            <a href="#testimonials" className="hover:text-white">Reviews</a>
          </nav>
          <button onClick={handleScrollToBook} className="rounded-full bg-[#C1FF72] px-4 py-2 text-[#292929] font-semibold">
            Book a Call
          </button>
        </div>
      </header>

      <main>
        <HeroSection onBookClick={handleScrollToBook} />
        <ServicesSection onBook={handleScrollToBook} onSelectService={() => {}} />
        <section id="testimonials">
          <ReviewsBrandsSection />
        </section>
        <CTAAndFAQSection ref={bookRef} />
      </main>

      <div className="fixed bottom-0 left-0 right-0 z-40">
        <div className="mx-auto max-w-6xl px-6 pb-6">
          <div className="rounded-full border border-white/10 bg-white/5 backdrop-blur px-4 py-3 flex items-center justify-between shadow-lg shadow-black/20">
            <div className="flex items-center gap-3 text-sm text-white/80">
              <Phone size={16} className="text-[#C1FF72]" />
              <span>Have questions? Book a free discovery call.</span>
            </div>
            <div className="flex items-center gap-3">
              <a href="#book" className="rounded-full bg-[#C1FF72] px-4 py-2 text-[#292929] font-semibold">Book a Call</a>
              <div className="hidden md:flex items-center gap-2 text-white/70">
                <a href="#" aria-label="Instagram" className="hover:text-white"><Instagram size={18} /></a>
                <a href="#" aria-label="Twitter" className="hover:text-white"><Twitter size={18} /></a>
                <a href="#" aria-label="LinkedIn" className="hover:text-white"><Linkedin size={18} /></a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="fixed bottom-24 right-6 z-40">
        <button className="rounded-full bg-[#C1FF72] text-[#292929] font-semibold px-4 py-2 shadow-lg">Live Chat</button>
      </div>

      <footer className="mt-28 pb-28">
        <div className="mx-auto max-w-6xl px-6 text-center text-white/60 text-sm">
          © {new Date().getFullYear()} Healthy Mind By Avik™ — A premium, soulful digital studio.
        </div>
      </footer>
    </div>
  );
}

export default App;
