import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    name: 'Aisha K.',
    photo: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&auto=format&fit=crop',
    quote:
      'They transformed our site and content into a story that finally feels like us. Engagement and trust spiked.',
  },
  {
    name: 'Daniel V.',
    photo: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=400&auto=format&fit=crop',
    quote:
      'The edits are cinematic and clean. Every deliverable was on time and exceeded expectations.',
  },
  {
    name: 'Priya S.',
    photo: 'https://images.unsplash.com/photo-1558222217-44a0a6e0a2b0?q=80&w=400&auto=format&fit=crop',
    quote:
      'Their social strategy gave us clarity and momentum. We finally have a content system that works.',
  },
];

const brands = [
  'https://dummyimage.com/120x48/ffffff/000000&text=Brand+One',
  'https://dummyimage.com/120x48/ffffff/000000&text=Brand+Two',
  'https://dummyimage.com/120x48/ffffff/000000&text=Brand+Three',
  'https://dummyimage.com/120x48/ffffff/000000&text=Brand+Four',
  'https://dummyimage.com/120x48/ffffff/000000&text=Brand+Five',
];

const ReviewsBrandsSection = () => {
  return (
    <section className="w-full bg-[#292929] text-white">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * idx, duration: 0.6 }}
              className="rounded-2xl border border-white/10 bg-white/5 p-6"
            >
              <div className="flex items-center gap-3">
                <img src={t.photo} alt={t.name} className="h-10 w-10 rounded-full object-cover" />
                <p className="font-semibold">{t.name}</p>
              </div>
              <p className="mt-4 text-white/80">“{t.quote}”</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-16">
          <p className="text-center text-white/70">Brands we’ve worked with</p>
          <div className="mt-6 overflow-hidden">
            <div className="flex items-center gap-10 animate-[scroll_25s_linear_infinite] will-change-transform">
              {[...brands, ...brands].map((src, i) => (
                <img key={i} src={src} alt="brand" className="h-10 opacity-80" />
              ))}
            </div>
          </div>
        </div>
      </div>
      <style>{`
        @keyframes scroll { from { transform: translateX(0); } to { transform: translateX(-50%); } }
      `}</style>
    </section>
  );
};

export default ReviewsBrandsSection;
