import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SEO from '../components/SEO';

const services = [
  {
    id: '01',
    title: 'Brand Strategy & Design',
    desc: 'The foundation of impact. We offer comprehensive corporate branding, visual identity design, and brand guidelines. Our skilled writers also expert craft persuasive business proposals to ensure your ideas shine and succeed.',
    tags: ['Identity Design', 'Brand Strategy', 'Proposal Writing']
  },
  {
    id: '02',
    title: 'Digital & Content Studio',
    desc: 'We blend high-level media production with algorithmic mastery. From TV adverts, documentaries, and jingles to data-driven social media management, email marketing, and web-based advertising.',
    tags: ['Media Production', 'Digital Marketing', 'Social Strategy']
  },
  {
    id: '03',
    title: 'Strategic Communications',
    desc: 'We protect and propel. Our expertise covers crisis communication plans, communications training, customer care workshops, and advocacy for civil society and change-makers.',
    tags: ['Crisis Mgmt', 'Advocacy', 'Public Speaking Training']
  },
  {
    id: '04',
    title: 'Research & Intelligence',
    desc: 'Data is our compass. We provide cutting-edge research services, specializing in surveys, focus group discussions, and deep market analysis to predict trends before they happen.',
    tags: ['Surveys', 'Focus Groups', 'Market Intel']
  },
  {
    id: '05',
    title: 'Event Management',
    desc: 'We architect experiences. End-to-end execution including planning, logistics, budgeting, vendor management, and agenda mapping. We handle the details so you can own the stage.',
    tags: ['Logistics', 'Event Planning', 'Vendor Mgmt']
  }
];

const Services = () => {
  const [activeService, setActiveService] = useState<string | null>(null);

  const servicesSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Klarelo Communications Services",
    "description": "Comprehensive communications and branding services including strategy, digital content, research, and event management.",
    "itemListElement": services.map((s, index) => ({
      "@type": "Service",
      "position": index + 1,
      "name": s.title,
      "description": s.desc,
      "provider": {
        "@type": "CommunicationsAgency",
        "name": "Klarelo Communications",
        "image": "https://ik.imagekit.io/5zp8ovb7c/Klarelo/Logos/Klarelo%20Communications%20Logo%20V2%20Transparent%20Bg.png?updatedAt=1765824981603"
      }
    }))
  };

  return (
    <div className="min-h-screen py-12 md:py-20 px-6 md:px-12 max-w-[1400px] mx-auto">
      <SEO 
        title="Our Capabilities"
        description="Explore Klarelo's expertise in Brand Strategy, Digital Content, Crisis Communications, Market Research, and Event Management."
        canonical="/#/services"
        schema={servicesSchema}
      />

      {/* 
          Adjusted font size to text-[9vw] on mobile and md:text-[6vw] on desktop. 
          This ensures "CAPABILITIES" (12 chars) fits on one line without breaking.
          Changed leading to leading-[1.1] and py-8 to prevent vertical clipping of ascenders/descenders.
      */}
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="font-display text-[9vw] md:text-[6vw] font-black leading-[1.1] tracking-tighter mb-12 md:mb-24 mt-8 md:mt-0 break-words w-full py-8"
      >
        CAPABILITIES
      </motion.h1>

      <div className="space-y-4">
        {services.map((service) => (
          <div 
            key={service.id} 
            className="border-b border-white/10"
          >
            <div 
              onClick={() => setActiveService(activeService === service.id ? null : service.id)}
              className="py-8 md:py-12 flex items-start justify-between cursor-pointer group select-none"
            >
               <div className="flex items-baseline gap-4 md:gap-16">
                 <span className="font-mono text-klarelo-neon text-xs md:text-xl shrink-0">/{service.id}</span>
                 <h2 className={`font-display text-2xl md:text-6xl font-bold transition-colors duration-300 ${activeService === service.id ? 'text-white' : 'text-white/40 group-hover:text-white'}`}>
                   {service.title}
                 </h2>
               </div>
               <span className={`material-symbols-outlined text-2xl md:text-4xl transition-transform duration-300 shrink-0 ${activeService === service.id ? 'rotate-45 text-klarelo-neon' : 'text-white/40'}`}>
                 arrow_outward
               </span>
            </div>

            <AnimatePresence>
              {activeService === service.id && (
                <motion.div 
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="overflow-hidden"
                >
                  <div className="pl-[2rem] md:pl-[8rem] pb-8 md:pb-12 max-w-3xl">
                    <p className="text-base md:text-xl text-white/80 leading-relaxed mb-6 md:mb-8">{service.desc}</p>
                    <div className="flex flex-wrap gap-2 md:gap-4">
                      {service.tags.map(tag => (
                         <span key={tag} className="px-3 py-2 md:px-4 md:py-2 border border-white/20 rounded-full text-[10px] md:text-xs uppercase tracking-widest text-white hover:bg-white hover:text-black transition-colors">
                           {tag}
                         </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;