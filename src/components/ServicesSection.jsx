import React, { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Monitor, Megaphone, Mic, Video, Bot, Check, X } from 'lucide-react';

const services = [
  {
    key: 'website-design',
    title: 'Website Design',
    icon: Monitor,
    summary:
      'Conversion-focused websites that blend cinematic visuals with clean, accessible UX. Built to perform and feel unforgettable.',
    features: [
      'Custom responsive design',
      'CMS setup (Blog/Pages)',
      'SEO-ready and analytics',
      'Performance optimization',
      'Launch support',
    ],
    pricing: {
      Starter: ['1–3 pages', 'Style guide', 'Basic SEO'],
      Growth: ['Up to 8 pages', 'CMS + blog', 'On-page SEO', 'Analytics'],
      Premium: ['Custom animations', 'E-commerce or membership', 'Advanced SEO', 'Priority support'],
    },
    hero:
      'https://images.unsplash.com/photo-1526481280698-8fcc13fd6ab2?q=80&w=1600&auto=format&fit=crop',
  },
  {
    key: 'social-media',
    title: 'Social Media Management',
    icon: Megaphone,
    summary:
      'Strategy, content, and scheduling handled end-to-end. We craft scroll-stopping stories that grow your reach.',
    features: [
      'Monthly content calendar',
      'Design + copywriting',
      'Scheduling & publishing',
      'Performance reporting',
      'Community engagement',
    ],
    pricing: {
      Starter: ['8 posts / month', '1 platform', 'Light reporting'],
      Growth: ['16 posts / month', '2 platforms', 'Monthly report'],
      Premium: ['Custom reels/shorts', '3+ platforms', 'Weekly insights'],
    },
    hero:
      'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=1600&auto=format&fit=crop',
  },
  {
    key: 'podcast-post',
    title: 'Podcast Post-Production',
    icon: Mic,
    summary:
      'Clean audio, tight storytelling, and branded polish. We make your podcast sound like a studio production.',
    features: [
      'Noise reduction & leveling',
      'Intro/outro + music',
      'Show notes & titles',
      'Episode thumbnails',
      'Distribution support',
    ],
    pricing: {
      Starter: ['2 episodes / month', 'Basic cleanup', 'Simple thumbnail'],
      Growth: ['4 episodes / month', 'Music + show notes', 'Two revisions'],
      Premium: ['Weekly episodes', 'Advanced mastering', 'Social trailers'],
    },
    hero:
      'https://images.unsplash.com/photo-1545239351-1141bd82e8a6?q=80&w=1600&auto=format&fit=crop',
  },
  {
    key: 'editing',
    title: 'Audio & Video Editing',
    icon: Video,
    summary:
      'From long-form to short reels, we edit with rhythm and intent. Crisp cuts, color, and sound that hit emotionally.',
    features: [
      'Color correction',
      'Motion graphics (light)',
      'Sound design & mixing',
      'Platform-optimized versions',
      'Captioning',
    ],
    pricing: {
      Starter: ['4 shorts / month', 'Basic cuts', 'Captions'],
      Growth: ['8 shorts or 2 long-form', 'Motion graphics', 'Audio cleanup'],
      Premium: ['Weekly deliverables', 'Advanced design', 'Priority revisions'],
    },
    hero:
      'https://images.unsplash.com/photo-1512743691122-2d9988e1f6d3?q=80&w=1600&auto=format&fit=crop',
  },
  {
    key: 'va-services',
    title: 'Virtual Assistant Services',
    icon: Bot,
    summary:
      'Reliable support for creators and founders. Systems, scheduling, research, and operations—done with care.',
    features: [
      'Inbox & calendar management',
      'Research & documentation',
      'Content coordination',
      'Basic design & assets',
      'SOPs & workflows',
    ],
    pricing: {
      Starter: ['10 hrs / month', 'Email support', 'Task reporting'],
      Growth: ['20 hrs / month', 'Priority tasks', 'Weekly check-ins'],
      Premium: ['40 hrs / month', 'Dedicated support', 'Ops consulting'],
    },
    hero:
      'https://images.unsplash.com/photo-1487014679447-9f8336841d58?q=80&w=1600&auto=format&fit=crop',
  },
];

const PricingCard = ({ tier, items }) => (
  <div className="rounded-xl border border-white/10 bg-white/5 p-4">
    <p className="font-semibold text-white">{tier}</p>
    <ul className="mt-3 space-y-2 text-sm text-white/80">
      {items.map((i) => (
        <li key={i} className="flex items-start gap-2">
          <Check size={16} className="text-[#C1FF72] mt-0.5" /> {i}
        </li>
      ))}
    </ul>
  </div>
);

const ServiceModal = ({ open, onClose, service, onBook }) => {
  if (!service) return null;
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4"
          role="dialog"
          aria-modal="true"
        >
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 30, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 120, damping: 20 }}
            className="relative w-full max-w-5xl overflow-hidden rounded-2xl bg-[#1F1F1F] text-white shadow-xl"
          >
            <button
              onClick={onClose}
              className="absolute right-4 top-4 rounded-full bg-white/10 p-2 hover:bg-white/20"
              aria-label="Close"
            >
              <X size={18} />
            </button>

            <div className="h-52 w-full overflow-hidden">
              <img src={service.hero} alt={service.title} className="h-full w-full object-cover" />
            </div>

            <div className="p-6 md:p-8">
              <h3 className="text-2xl md:text-3xl font-semibold">{service.title}</h3>
              <p className="mt-3 text-white/80 max-w-3xl">{service.summary}</p>

              <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="rounded-xl border border-white/10 bg-white/5 p-5">
                  <p className="text-[#C1FF72] font-semibold">Features & Deliverables</p>
                  <ul className="mt-3 space-y-2 text-sm text-white/80">
                    {service.features.map((f) => (
                      <li key={f} className="flex items-start gap-2">
                        <Check size={16} className="text-[#C1FF72] mt-0.5" /> {f}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {Object.entries(service.pricing).map(([tier, items]) => (
                    <PricingCard key={tier} tier={tier} items={items} />
                  ))}
                </div>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <button
                  onClick={onBook}
                  className="rounded-full bg-[#C1FF72] px-6 py-3 text-[#292929] font-semibold shadow-lg shadow-[#C1FF72]/20 hover:shadow-[#C1FF72]/40 transition"
                >
                  Book a Discovery Call
                </button>
                <button
                  onClick={onClose}
                  className="rounded-full border border-white/15 px-6 py-3 text-white/90 hover:bg-white/10"
                >
                  Close
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const ServicesSection = ({ onSelectService, onBook }) => {
  const [active, setActive] = useState(null);
  const serviceMap = useMemo(() => Object.fromEntries(services.map((s) => [s.key, s])), []);

  const openDetail = (key) => {
    setActive(serviceMap[key]);
    onSelectService?.(key);
  };

  return (
    <section className="relative w-full bg-[#292929] text-white" id="services">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold">Our Services</h2>
            <p className="mt-2 text-white/70">Five focused offerings designed to elevate your brand.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ key, title, icon: Icon, summary }) => (
            <motion.button
              key={key}
              onClick={() => openDetail(key)}
              whileHover={{ y: -6 }}
              whileTap={{ scale: 0.98 }}
              className="group text-left rounded-2xl border border-white/10 bg-white/5 p-6 shadow-sm shadow-black/20 hover:shadow-black/30 focus:outline-none"
            >
              <div className="flex items-center gap-3">
                <div className="rounded-lg bg-[#C1FF72]/10 p-2">
                  <Icon className="text-[#C1FF72]" size={24} />
                </div>
                <p className="text-xl font-semibold">{title}</p>
              </div>
              <p className="mt-3 text-sm text-white/80">{summary}</p>
              <div className="mt-6 flex items-center gap-2 text-[#C1FF72]">
                <span className="text-sm font-medium">View details</span>
                <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor"><path d="M7 5l5 5-5 5"/></svg>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      <ServiceModal open={!!active} onClose={() => setActive(null)} service={active} onBook={onBook} />
    </section>
  );
};

export default ServicesSection;
