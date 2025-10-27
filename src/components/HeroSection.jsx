import React from 'react';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

const HeroSection = ({ onBookClick }) => {
  return (
    <section className="relative min-h-[88vh] w-full overflow-hidden bg-[#292929] text-white">
      <div className="absolute inset-0" aria-hidden>
        <Spline
          scene="https://prod.spline.design/cEecEwR6Ehj4iT8T/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-[#292929]/40 to-[#292929] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-6xl px-6 py-24 md:py-32 flex flex-col items-start justify-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-semibold leading-tight tracking-tight"
        >
          Empowering Your Digital Presence —
          <br />
          <span className="text-[#C1FF72]">One Story at a Time.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.8 }}
          className="mt-6 max-w-2xl text-lg md:text-xl text-white/80"
        >
          Let’s create, design, and amplify your brand with clarity and creativity.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mt-10"
        >
          <button
            onClick={onBookClick}
            className="rounded-full bg-[#C1FF72] px-6 py-3 text-[#292929] font-semibold shadow-lg shadow-[#C1FF72]/20 hover:shadow-[#C1FF72]/40 transition"
          >
            Book a Discovery Call
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 w-full"
        >
          {[
            { title: 'Storytelling meets Strategy', desc: 'We build brands that feel human and perform.' },
            { title: 'Cinematic Design', desc: 'Premium visuals that create emotional resonance.' },
            { title: 'Consistent Execution', desc: 'Reliable, scalable systems to grow with you.' },
          ].map((item) => (
            <div key={item.title} className="rounded-xl border border-white/10 bg-white/5 backdrop-blur p-5">
              <p className="text-[#C1FF72] font-medium">{item.title}</p>
              <p className="mt-2 text-sm text-white/80">{item.desc}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
