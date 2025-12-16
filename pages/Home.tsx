import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import SEO from '../components/SEO';

const PARTNERS = [
  "https://ik.imagekit.io/5zp8ovb7c/Klarelo/Logos/BautySquare.jpeg?updatedAt=1765817161454",
  "https://ik.imagekit.io/5zp8ovb7c/Klarelo/Logos/Alexiz.jpeg?updatedAt=1765817161633",
  "https://ik.imagekit.io/5zp8ovb7c/Klarelo/Logos/greatscope.webp?updatedAt=1710246169758",
  "https://ik.imagekit.io/5zp8ovb7c/Klarelo/Logos/didgital.webp?updatedAt=1710246042454",
  "https://ik.imagekit.io/5zp8ovb7c/Klarelo/Logos/marafiki.webp?updatedAt=1709825486011",
  "https://ik.imagekit.io/5zp8ovb7c/Klarelo/Logos/henzo.webp?updatedAt=1709824793390"
];

const PROJECTS = [
  {
    title: "Alexiz Natural",
    category: "Brand Re-Engineering",
    img: "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?q=80&w=2070&auto=format&fit=crop",
    year: "2024",
    services: [
        "Visual Identity System",
        "Packaging Design",
        "Market Positioning Strategy",
        "Social Media Direction"
    ],
    description: "We stripped back the noise to reveal the essence. For Alexiz Natural, we engineered a brand system that speaks to purity and premium quality, repositioning them from a local commodity to a lifestyle essential."
  },
  {
    title: "Greatscope Insurance",
    category: "Digital Identity",
    img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop",
    year: "2024",
    services: [
        "Corporate Web Experience",
        "UX/UI Design",
        "Digital Trust Framework",
        "Content Strategy"
    ],
    description: "Trust is the currency of insurance. We built a digital fortress for Greatscope that communicates stability and foresight, turning complex financial products into accessible, human-centric digital experiences."
  },
  {
    title: "Henzo",
    category: "Strategic Launch",
    img: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop",
    year: "2025",
    services: [
        "Go-to-Market Strategy",
        "Launch Event Production",
        "Influencer Seeding",
        "Media Relations"
    ],
    description: "A loud entrance for a bold player. We orchestrated a multi-channel launch campaign that synchronized PR, physical activation, and digital buzz to ensure Henzo didn't just launch—it landed with impact."
  }
];

const Marquee = ({ text }: { text: string }) => (
  <div className="flex overflow-hidden py-4 bg-klarelo-neon text-black select-none">
    {/* Loop twice for seamless scrolling without gaps */}
    {[0, 1].map((i) => (
      <div key={i} className="animate-marquee flex-shrink-0 flex items-center whitespace-nowrap">
        <div className="flex gap-8 pr-8">
          {[...Array(8)].map((_, idx) => (
            <span key={idx} className="text-4xl md:text-6xl font-display font-black tracking-tighter uppercase">
              {text} •
            </span>
          ))}
        </div>
      </div>
    ))}
  </div>
);

const LogoMarquee = () => {
  // Create a continuous strip of logos
  const logoStrip = (
    <div className="flex gap-8 md:gap-24 items-center pr-8 md:pr-24 h-full">
      {/* Duplicate 3 times to ensure width coverage */}
      {[...Array(3)].map((_, setIndex) => (
        <React.Fragment key={setIndex}>
          {PARTNERS.map((src, i) => (
            <div key={`${setIndex}-${i}`} className="relative group w-24 h-16 md:w-48 md:h-24 flex-shrink-0 flex items-center justify-center cursor-pointer">
               <img 
                 src={src} 
                 alt="Partner Logo" 
                 className="max-w-full max-h-full object-contain grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 ease-out transform group-hover:scale-110 group-hover:brightness-110"
               />
            </div>
          ))}
        </React.Fragment>
      ))}
    </div>
  );

  return (
    <div className="w-full overflow-hidden border-y border-white/10 bg-white/5 backdrop-blur-sm flex h-32 md:h-48">
      {/* Two identical strips sliding left for seamless loop */}
      <div className="flex animate-marquee pause-on-hover items-center flex-shrink-0 h-full">
        {logoStrip}
      </div>
      <div className="flex animate-marquee pause-on-hover items-center flex-shrink-0 h-full">
        {logoStrip}
      </div>
    </div>
  );
};

const ProjectCard = ({ project, index, onClick }: any) => (
  <motion.div 
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.2 }}
    className="group relative cursor-pointer"
    onClick={onClick}
  >
    <div className="relative aspect-[3/4] overflow-hidden bg-white/5 mb-6">
      <div className="absolute inset-0 bg-klarelo-neon/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 mix-blend-overlay" />
      <motion.img 
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.7 }}
        src={project.img} 
        alt={project.title} 
        loading="lazy"
        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
      />
    </div>
    <div className="flex justify-between items-end border-b border-white/20 pb-4 group-hover:border-klarelo-neon transition-colors">
      <div>
        <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-1">{project.title}</h3>
        <p className="text-[10px] md:text-xs uppercase tracking-widest text-white/50">{project.category}</p>
      </div>
      <div className="w-8 h-8 md:w-10 md:h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-klarelo-neon group-hover:text-black group-hover:border-klarelo-neon transition-all">
        <span className="material-symbols-outlined text-sm md:text-lg">arrow_outward</span>
      </div>
    </div>
  </motion.div>
);

const Home = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const [selectedProject, setSelectedProject] = useState<any>(null);

  const homeSchema = {
    "@context": "https://schema.org",
    "@type": "CommunicationsAgency",
    "name": "Klarelo Communications",
    "url": "https://klarelocommunications.com",
    "logo": "https://ik.imagekit.io/5zp8ovb7c/Klarelo/Logos/Klarelo%20Communications%20Logo%20V2%20Transparent%20Bg.png?updatedAt=1765824981603",
    "description": "Klarelo exists at the intersection of strategy and storytelling. We build authority and architect reputation.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Pioneer House, Kenyatta Avenue, 5th Floor",
      "addressLocality": "Nairobi",
      "addressCountry": "KE"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+254-703-406-865",
      "contactType": "customer service",
      "email": "klarelocommunications@gmail.com"
    },
    "sameAs": [
      "https://www.linkedin.com/company/klarelo-communications/",
      "https://www.facebook.com/mboyaruth",
      "https://x.com/ruthmboyas"
    ]
  };

  return (
    <div className="overflow-hidden">
      <SEO 
        title="Architects of Reputation"
        description="Klarelo is the architectural force behind Kenya's most compelling narratives. We specialize in PR, Crisis Management, Brand Strategy, and Digital Influence."
        canonical="/"
        schema={homeSchema}
      />
      
      {/* Hero Section */}
      {/* Reduced min-h to 50vh on mobile and removed top padding to tighten spacing as requested */}
      <section className="relative min-h-[50vh] md:min-h-screen flex flex-col justify-center px-6 md:px-12 pt-0 md:pt-32 pb-12 md:pb-20">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-klarelo-accent/20 blur-[100px] md:blur-[150px] rounded-full pointer-events-none" />
        
        <div className="max-w-[1400px] mx-auto w-full relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.3 } }
            }}
          >
            <motion.p 
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8 } } }}
              className="text-klarelo-neon font-bold tracking-[0.2em] mb-4 uppercase text-sm md:text-base"
            >
              Klarelo Communications
            </motion.p>
            {/* Optimized font size to text-[8vw] to prevent clipping of 'OUR PRIORITY' on mobile */}
            <h1 className="font-display font-black text-[8vw] md:text-[10vw] leading-[0.8] tracking-tighter text-white mb-6 md:mb-8 relative z-10">
              <motion.span 
                variants={{ hidden: { opacity: 0, y: 100 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } } }}
                className="block"
              >
                YOUR BRAND,
              </motion.span> 
              <motion.span 
                variants={{ hidden: { opacity: 0, y: 100 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } } }}
                className="block text-outline hover:text-klarelo-neon transition-colors duration-500 cursor-default"
              >
                OUR PRIORITY.
              </motion.span>
            </h1>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8 md:mt-12 border-t border-white/20 pt-8">
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 1 }}
              className="text-white/60 font-medium leading-relaxed text-base md:text-lg"
            >
              Klarelo is the architectural force behind Kenya's most compelling narratives. We don't just do PR. We engineer reputation.
            </motion.p>
            <div className="hidden md:flex md:col-span-2 justify-end items-center gap-4">
              <span className="text-xs uppercase tracking-widest animate-pulse text-klarelo-neon">Scroll to Explore</span>
              <div className="w-[1px] h-12 bg-white/20" />
            </div>
          </div>
        </div>
      </section>

      {/* Partners Marquee */}
      <section className="relative z-20" aria-label="Our Partners">
         <div className="text-center mb-6">
            <span className="text-[10px] uppercase tracking-[0.3em] text-white/30">Trusted By The Bold</span>
         </div>
         <LogoMarquee />
      </section>

      {/* Text Marquee */}
      <div className="mt-12 md:mt-20">
        <Marquee text="STRATEGY • INFLUENCE • CULTURE • IMPACT • LEGACY • POWER • VISION •" />
      </div>

      {/* Philosophy / About Intro */}
      <section className="py-16 md:py-32 px-6 md:px-12 max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
           <div>
             <h2 className="font-display text-5xl md:text-7xl font-bold tracking-tighter mb-6 md:mb-8 leading-none">
               WE BUILD <br/> <span className="text-klarelo-accent">AUTHORITY</span>
             </h2>
             <p className="text-xs uppercase tracking-widest text-klarelo-neon">Architects of Reputation</p>
           </div>
           <div className="space-y-6 md:space-y-8">
             <p className="text-lg md:text-2xl text-white/80 leading-relaxed">
               Klarelo exists at the intersection of strategy and storytelling. We understand that in a crowded marketplace, clarity is the ultimate currency.
             </p>
             <p className="text-base md:text-lg text-white/60 leading-relaxed">
               Our methodology is rooted in precision. We don't just amplify noise; we distill your brand's essence into a signal that resonates with the right audience, at the right time.
             </p>
             <Link to="/about">
               <button className="group flex items-center gap-4 text-sm font-bold uppercase tracking-widest text-white hover:text-klarelo-neon transition-colors">
                 <span>Our Philosophy</span>
                 <div className="h-[1px] w-12 bg-white group-hover:w-24 group-hover:bg-klarelo-neon transition-all" />
               </button>
             </Link>
           </div>
        </div>
      </section>

      {/* Selected Work */}
      <section className="py-16 md:py-20 px-6 md:px-12 max-w-[1400px] mx-auto">
        <div className="flex justify-between items-end mb-12 md:mb-20">
           <h2 className="font-display text-3xl md:text-4xl font-bold uppercase tracking-tighter">Selected Work</h2>
           <span className="text-[10px] md:text-xs text-white/40 uppercase tracking-widest">Case Studies 2025</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 md:gap-y-20">
          {PROJECTS.map((project, i) => (
             <ProjectCard 
                key={i}
                project={project}
                index={i}
                onClick={() => setSelectedProject(project)}
             />
          ))}
        </div>
      </section>

      {/* Services Ticker */}
      <section className="py-16 md:py-32 border-y border-white/10 bg-klarelo-charcoal relative overflow-hidden">
         <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
            <h2 className="text-xs font-bold uppercase tracking-widest text-klarelo-neon mb-8 md:mb-12">Our Expertise</h2>
            <div className="space-y-6 md:space-y-8">
              {['Corporate Branding', 'Media Production', 'Crisis Communication', 'Research & Intel', 'Event Management'].map((item, i) => (
                <Link to="/services" key={i}>
                  <motion.div 
                    initial={{ x: -50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ delay: i * 0.1 }}
                    className="group flex items-center justify-between border-b border-white/10 pb-6 md:pb-8 cursor-pointer hover:pl-8 transition-all duration-500 mb-6 md:mb-8"
                  >
                     <span className="font-display text-2xl md:text-6xl font-bold text-white/50 group-hover:text-white transition-colors">{item}</span>
                     <span className="material-symbols-outlined text-2xl md:text-4xl opacity-0 group-hover:opacity-100 transition-opacity text-klarelo-neon">arrow_forward</span>
                  </motion.div>
                </Link>
              ))}
            </div>
         </div>
         <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-black to-transparent pointer-events-none" />
      </section>

      {/* CTA */}
      <section className="h-[60vh] md:h-[80vh] flex flex-col items-center justify-center text-center px-6 relative">
         <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop')] bg-cover bg-center opacity-20 mix-blend-screen" />
         <div className="relative z-10 w-full">
           <h2 className="font-display text-5xl md:text-8xl font-black mb-8 tracking-tighter w-full px-2">
             READY TO <br />
             <span className="text-klarelo-neon">ASCEND?</span>
           </h2>
           <Link to="/contact">
             <motion.button 
               whileHover={{ scale: 1.05 }}
               whileTap={{ scale: 0.95 }}
               className="bg-white text-black font-bold uppercase tracking-widest py-3 px-10 md:py-4 md:px-12 rounded-full hover:bg-klarelo-neon transition-colors text-sm md:text-base"
             >
               Start Project
             </motion.button>
           </Link>
         </div>
      </section>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
          >
            <div className="absolute inset-0 bg-black/90 backdrop-blur-md" onClick={() => setSelectedProject(null)} />
            <motion.div 
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              className="relative bg-[#0a0a0a] border border-white/10 w-full max-w-5xl max-h-[90vh] overflow-y-auto overflow-x-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)] flex flex-col md:flex-row rounded-xl"
            >
              <button 
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 z-50 w-10 h-10 rounded-full bg-black/50 border border-white/10 text-white hover:bg-klarelo-neon hover:text-black transition-all flex items-center justify-center"
              >
                  <span className="material-symbols-outlined">close</span>
              </button>

              {/* Image Side */}
              <div className="w-full md:w-1/2 h-64 md:h-auto relative shrink-0">
                  <img src={selectedProject.img} alt={selectedProject.title} className="w-full h-full object-cover grayscale" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:to-[#0a0a0a]" />
              </div>

              {/* Content Side */}
              <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                  <div className="mb-8">
                      <p className="text-klarelo-neon text-xs font-bold uppercase tracking-widest mb-2">{selectedProject.category} • {selectedProject.year}</p>
                      <h3 className="font-display text-4xl md:text-5xl font-black text-white mb-6 leading-none">{selectedProject.title}</h3>
                      <p className="text-white/70 leading-relaxed text-lg">{selectedProject.description}</p>
                  </div>

                  <div>
                      <h4 className="text-xs font-bold uppercase tracking-widest text-white/40 mb-4 border-b border-white/10 pb-2">Scope of Work</h4>
                      <ul className="grid grid-cols-1 gap-3">
                          {selectedProject.services.map((service: string, i: number) => (
                              <li key={i} className="flex items-center gap-3 text-white">
                                  <span className="text-klarelo-neon material-symbols-outlined text-sm">check_circle</span>
                                  <span className="font-display font-bold">{service}</span>
                              </li>
                          ))}
                      </ul>
                  </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
};

export default Home;