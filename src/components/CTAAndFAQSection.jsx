import React, { useRef } from 'react';
import { motion } from 'framer-motion';

const faqs = [
  {
    q: 'How fast can we start?',
    a: 'Discovery calls are available within 3–5 business days. Most projects kick off within 1–2 weeks after scope approval.',
  },
  {
    q: 'What do your timelines look like?',
    a: 'Websites typically take 3–6 weeks depending on scope. Content and editing retainers run monthly with weekly deliverables.',
  },
  {
    q: 'How does pricing work?',
    a: 'Each service has three transparent tiers. We also offer custom proposals for unique needs and long-term retainers.',
  },
  {
    q: 'Do you require long-term contracts?',
    a: 'No long-term lock-ins. Monthly retainers renew by choice; project work is scoped upfront with clear milestones.',
  },
];

const CTAAndFAQSection = React.forwardRef(({ onSubmitRedirect }, ref) => {
  const formRef = ref || useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const url = 'https://calendly.com/healthymindbyavik/discovery-call';
    window.location.href = url;
  };

  return (
    <section className="w-full bg-[#292929] text-white" id="book">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2">
            <h3 className="text-3xl md:text-4xl font-semibold">Why Work With Us</h3>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { title: 'Storytelling meets Strategy', desc: 'Narratives that connect. Systems that scale.' },
                { title: 'Human-Centered Design', desc: 'Beautiful, accessible, inclusive experiences.' },
                { title: 'Consistent, Scalable Execution', desc: 'Reliable delivery with measurable outcomes.' },
              ].map((i) => (
                <div key={i.title} className="rounded-xl border border-white/10 bg-white/5 p-5">
                  <p className="text-[#C1FF72] font-semibold">{i.title}</p>
                  <p className="mt-2 text-sm text-white/80">{i.desc}</p>
                </div>
              ))}
            </div>

            <div className="mt-12">
              <h4 className="text-2xl font-semibold">FAQs</h4>
              <div className="mt-4 divide-y divide-white/10 rounded-xl border border-white/10 bg-white/5">
                {faqs.map((f, idx) => (
                  <details key={f.q} className="p-5" open={idx === 0}>
                    <summary className="cursor-pointer list-none font-medium">{f.q}</summary>
                    <p className="mt-2 text-white/80">{f.a}</p>
                  </details>
                ))}
              </div>
            </div>
          </div>

          <div ref={formRef} className="lg:col-span-1">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 sticky top-8">
              <h4 className="text-xl font-semibold">Book a Discovery Call</h4>
              <p className="mt-2 text-sm text-white/80">Share a few details and we’ll redirect you to choose a time.</p>
              <form onSubmit={handleSubmit} className="mt-5 space-y-4">
                <div>
                  <label className="text-sm text-white/70">Name</label>
                  <input required type="text" className="mt-1 w-full rounded-lg bg-[#1F1F1F] border border-white/10 px-3 py-2 outline-none focus:border-[#C1FF72]" />
                </div>
                <div>
                  <label className="text-sm text-white/70">Email</label>
                  <input required type="email" className="mt-1 w-full rounded-lg bg-[#1F1F1F] border border-white/10 px-3 py-2 outline-none focus:border-[#C1FF72]" />
                </div>
                <div>
                  <label className="text-sm text-white/70">Website (optional)</label>
                  <input type="url" placeholder="https://" className="mt-1 w-full rounded-lg bg-[#1F1F1F] border border-white/10 px-3 py-2 outline-none focus:border-[#C1FF72]" />
                </div>
                <div>
                  <label className="text-sm text-white/70">Service Interest</label>
                  <select className="mt-1 w-full rounded-lg bg-[#1F1F1F] border border-white/10 px-3 py-2 outline-none focus:border-[#C1FF72]">
                    <option>Website Design</option>
                    <option>Social Media Management</option>
                    <option>Podcast Post-Production</option>
                    <option>Audio & Video Editing</option>
                    <option>Virtual Assistant Services</option>
                  </select>
                </div>
                <div>
                  <label className="text-sm text-white/70">Message</label>
                  <textarea rows={4} className="mt-1 w-full rounded-lg bg-[#1F1F1F] border border-white/10 px-3 py-2 outline-none focus:border-[#C1FF72]" />
                </div>
                <button type="submit" className="w-full rounded-full bg-[#C1FF72] px-6 py-3 text-[#292929] font-semibold shadow-lg shadow-[#C1FF72]/20 hover:shadow-[#C1FF72]/40 transition">
                  Continue to Booking
                </button>
              </form>
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 overflow-hidden rounded-2xl"
        >
          <div className="relative w-full bg-gradient-to-r from-[#292929] to-[#C1FF72]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.12),transparent_40%)] pointer-events-none" />
            <div className="relative mx-auto max-w-6xl px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <p className="text-2xl md:text-3xl font-semibold text-[#1F1F1F]">Your brand deserves to be seen. Let’s make it unforgettable.</p>
              </div>
              <a href="#book" className="rounded-full bg-[#1F1F1F] px-6 py-3 text-white font-semibold hover:bg-black/80 transition">Book Your Free Discovery Call</a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
});

export default CTAAndFAQSection;
