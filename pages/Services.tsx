import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import SEO from '../components/SEO';

const services = [
  {
    id: '01',
    title: 'Corporate Branding & Development',
    desc: 'We manage communications for large scale, small-medium enterprises as well as startups; taking charge of how they market themselves to the public. We also specialize in helping entrepreneurs, entertainment stars, professionals, politicians and successful people build a good public image.',
    tags: ['Brand Strategy', 'Corporate Identity', 'Public Image Management', 'Reputation Building']
  },
  {
    id: '02',
    title: 'Research & Insights',
    desc: 'We provide cutting edge research services for businesses, specializing in the conduct of surveys and focus group discussions. We produce results you can count and depend on for key decisions.',
    tags: ['Market Surveys', 'Focus Groups', 'Data Analysis', 'Strategic Insights']
  },
  {
    id: '03',
    title: 'Media Content Production',
    desc: 'We produce radio and television documentaries, television adverts, jingles, brochures, pamphlets, logos, among others for organizations and projects.',
    tags: ['TV/Radio Documentaries', 'Advertisements', 'Jingles', 'Print Materials', 'Logo Design']
  },
  {
    id: '04',
    title: 'Communications Training',
    desc: 'This includes communications and customer experience trainings for individuals and corporates to ensure they are able to deliver on their mandate. We also offer public speaking trainings.',
    tags: ['Customer Experience', 'Communication Skills', 'Public Speaking', 'Corporate Training']
  },
  {
    id: '05',
    title: 'Digital Marketing',
    desc: 'This includes not only social media management but also email marketing and web-based advertising to help your brand reach the right audience.',
    tags: ['Social Media Management', 'Email Marketing', 'Web Advertising', 'Content Strategy']
  },
  {
    id: '06',
    title: 'Event Management',
    desc: 'Executing an entire event, including event planning, logistics, budgeting, vendor management, marketing, mapping the event agenda, inviting speakers, setting up registration, and overseeing execution.',
    tags: ['Event Planning', 'Logistics Management', 'Vendor Coordination', 'Marketing & Promotion']
  },
  {
    id: '07',
    title: 'Crisis Communication',
    desc: 'Inevitably, all organizations will face a major issue at some point. In today\'s connected world, where information spreads at lightning speed, an emergency communications plan is essential when things go wrong.',
    tags: ['Crisis Strategy', 'Emergency Response', 'Reputation Management', 'Media Relations']
  },
  {
    id: '08',
    title: 'Advocacy',
    desc: 'We help civil society groups, political movements, religious organisations, etc draft and implement campaign plans to champion specific courses of public good.',
    tags: ['Campaign Strategy', 'Public Advocacy', 'Movement Building', 'Policy Influence']
  },
  {
    id: '09',
    title: 'Proposal Writing',
    desc: 'Be it a business proposal, communications plan for your entity, contract documents, policy documents or any other such write up, we apply our master craft in stringing words together to produce the best documents.',
    tags: ['Business Proposals', 'Policy Documents', 'Contract Writing', 'Strategic Plans']
  }
];

const Services = () => {
  const location = useLocation();
  const [activeService, setActiveService] = useState<string | null>(null);

  // Check for incoming state from Home page or other deep links
  useEffect(() => {
    if (location.state && location.state.openServiceId) {
      const targetId = location.state.openServiceId;
      
      // Set the active accordion to open
      setActiveService(targetId);

      // Slight delay to allow the page to render and the ScrollToTop component to finish
      setTimeout(() => {
        const element = document.getElementById(`service-${targetId}`);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }, 100);
    }
  }, [location]);

  const servicesSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Klarelo Communications Services",
    "description": "Comprehensive communications and branding services including strategy, digital content, research, and event management.",
    "itemListElement": services.map((s, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "Service",
        "name": s.title,
        "description": s.desc,
        "serviceType": s.tags.join(', '),
        "provider": {
          "@type": "CommunicationsAgency",
          "name": "Klarelo Communications",
          "image": "https://ik.imagekit.io/5zp8ovb7c/Klarelo/Logos/Klarelo%20Communications%20Logo%20V2%20Transparent%20Bg.png?updatedAt=1765824981603"
        }
      }
    }))
  };

  return (
    <div className="min-h-screen py-24 md:py-20 px-6 md:px-12 max-w-[1400px] mx-auto">
      <SEO 
        title="Our Capabilities"
        description="Explore Klarelo's expertise in Brand Strategy, Digital Content, Crisis Communications, Market Research, and Event Management."
        canonical="/#/services"
        schema={servicesSchema}
      />

      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="font-display text-[13vw] md:text-[6vw] font-black leading-[1.1] tracking-tighter mb-8 md:mb-24 mt-4 md:mt-0 break-words w-full py-8"
      >
        CAPABILITIES
      </motion.h1>

      <div className="space-y-4">
        {services.map((service) => (
          <div 
            key={service.id} 
            // ID added here so we can scroll to it programmatically
            id={`service-${service.id}`}
            className="border-b border-white/10"
          >
            <div 
              onClick={() => setActiveService(activeService === service.id ? null : service.id)}
              className="py-6 md:py-12 flex items-start justify-between cursor-pointer group select-none active:scale-[0.99] transition-transform"
            >
               <div className="flex items-baseline gap-4 md:gap-16 pr-4">
                 <span className="font-mono text-klarelo-neon text-xs md:text-xl shrink-0">/{service.id}</span>
                 <h2 className={`font-display text-xl md:text-5xl font-bold transition-colors duration-300 ${activeService === service.id ? 'text-white' : 'text-white/40 group-hover:text-white'}`}>
                   {service.title}
                 </h2>
               </div>
               <span className={`material-symbols-outlined text-xl md:text-4xl transition-transform duration-300 shrink-0 mt-1 md:mt-0 ${activeService === service.id ? 'rotate-45 text-klarelo-neon' : 'text-white/40'}`}>
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
                  <div className="pl-0 md:pl-[8rem] pb-8 md:pb-12 max-w-4xl">
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