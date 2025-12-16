import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
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
    url: "https://www.instagram.com/spaalexiz254/?hl=en",
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
    url: "https://greatscopeinsurance.com/",
    services: [
        "Corporate Web Experience",
        "UX/UI Design",
        "Digital Trust Framework",
        "Content Strategy"
    ],
    description: "Your trusted partner in comprehensive insurance solutions across East Africa. Discover our commitment to excellence and client satisfaction. We built a digital fortress for Greatscope that communicates stability and foresight."
  },
  {
    title: "Henzo",
    category: "Strategic Launch",
    img: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop",
    year: "2025",
    url: "https://www.henzokenya.or.ke/",
    services: [
        "Go-to-Market Strategy",
        "Launch Event Production",
        "Influencer Seeding",
        "Media Relations"
    ],
    description: "A loud entrance for a bold player. We orchestrated a multi-channel launch campaign that synchronized PR, physical activation, and digital buzz to ensure Henzo didn't just launch—it landed with impact."
  }
];

const SERVICE_LINKS = [
  { title: 'Corporate Branding', id: '01' },
  { title: 'Research & Insights', id: '02' },
  { title: 'Media Production', id: '03' },
  { title: 'Communications Training', id: '04' },
  { title: 'Digital Marketing', id: '05' },
  { title: 'Event Management', id: '06' },
  { title: 'Crisis Communication', id: '07' },
  { title: 'Advocacy', id: '08' },
  { title: 'Proposal Writing', id: '09' }
];

// --- Components ---

const Marquee = ({ text }: { text: string }) => (
  <div className="flex overflow-hidden py-3 md:py-4 bg-klarelo-neon text-black select-none">
    {[0, 1].map((i) => (
      <div key={i} className="animate-marquee flex-shrink-0 flex items-center whitespace-nowrap">
        <div className="flex gap-4 md:gap-8 pr-4 md:pr-8">
          {[...Array(8)].map((_, idx) => (
            <span key={idx} className="text-2xl md:text-6xl font-display font-black tracking-tighter uppercase">
              {text} •
            </span>
          ))}
        </div>
      </div>
    ))}
  </div>
);

const LogoMarquee = () => {
  const logoStrip = (
    <div className="flex gap-12 md:gap-24 items-center pr-12 md:pr-24 h-full">
      {[...Array(3)].map((_, setIndex) => (
        <React.Fragment key={setIndex}>
          {PARTNERS.map((src, i) => (
            <div key={`${setIndex}-${i}`} className="relative group w-20 h-12 md:w-48 md:h-24 flex-shrink-0 flex items-center justify-center cursor-pointer">
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
    <div className="w-full overflow-hidden border-y border-white/10 bg-white/5 backdrop-blur-sm flex h-24 md:h-48">
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
    transition={{ delay: index * 0.1 }}
    className="group relative cursor-pointer"
    onClick={onClick}
  >
    <div className="relative aspect-[3/4] overflow-hidden bg-white/5 mb-4 md:mb-6">
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
        <h3 className="text-xl md:text-3xl font-display font-bold text-white mb-1">{project.title}</h3>
        <p className="text-[10px] md:text-xs uppercase tracking-widest text-white/50">{project.category}</p>
      </div>
      <div className="w-8 h-8 md:w-10 md:h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-klarelo-neon group-hover:text-black group-hover:border-klarelo-neon transition-all">
        <span className="material-symbols-outlined text-sm md:text-lg">arrow_outward</span>
      </div>
    </div>
  </motion.div>
);

const HeroBackground = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none bg-[#020212]">
    {/* Texture Layer - Architectural/Abstract Office Glass feel */}
    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2301&auto=format&fit=crop')] bg-cover bg-center opacity-[0.1] mix-blend-overlay saturate-0" />
    
    {/* Atmospheric Glows - Subtle and Professional */}
    <div className="absolute top-[-20%] left-[-10%] w-[60vw] h-[60vw] bg-blue-600/5 rounded-full blur-[120px] mix-blend-screen" />
    <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-indigo-900/5 rounded-full blur-[100px] mix-blend-screen" />
    
    {/* Vignette for Focus */}
    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-klarelo-black/50 to-klarelo-black z-10" />
  </div>
);

// --- Main Page Component ---

const Home = () => {
  const [selectedProject, setSelectedProject] = useState<any>(null);

  const homeSchema = {
    "@context": "https://schema.org",
    "@type": "CommunicationsAgency",
    "name": "Klarelo Communications",
    "url": "https://klarelocommunications.com",
    "logo": "https://ik.imagekit.io/5zp8ovb7c/Klarelo/Logos/Klarelo%20Communications%20Logo%20V2%20Transparent%20Bg.png?updatedAt=1765824981603",
    "description": "Building Brilliant Brands in Today's Digital World. We help individuals and organizations build exceptional public images.",
  };

  return (
    <div className="overflow-hidden">
      <SEO 
        title="Building Brilliant Brands"
        description="We help individuals and organizations build exceptional public images, navigate complex communications, and tell their untold stories."
        canonical="/"
        schema={homeSchema}
      />
      
      {/* HERO SECTION - REVAMPED PROFESSIONAL */}
      <section className="relative min-h-screen flex flex-col justify-center items-center px-4 md:px-6 overflow-hidden pt-20">
        <HeroBackground />

        <div className="relative z-20 w-full max-w-[1400px] mx-auto flex flex-col items-center text-center">
          
             {/* Badge */}
             <motion.div 
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.8, delay: 0.1 }}
               className="mb-8 md:mb-12"
             >
                <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md shadow-2xl">
                   <div className="w-1.5 h-1.5 rounded-full bg-klarelo-neon" />
                   <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.25em] text-white/90">Est. 2019 • Nairobi</span>
                </div>
             </motion.div>

             {/* Main Title - Masked Reveal */}
             <div className="flex flex-col items-center justify-center font-display font-black text-6xl sm:text-7xl md:text-8xl lg:text-[7.5vw] leading-[0.95] tracking-tight text-center max-w-6xl mx-auto">
                <div className="overflow-hidden">
                    <motion.h1
                        initial={{ y: "100%" }}
                        animate={{ y: 0 }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        className="block text-white pb-2"
                    >
                        Your Brand Story,
                    </motion.h1>
                </div>
                <div className="overflow-hidden">
                    <motion.h1
                        initial={{ y: "100%" }}
                        animate={{ y: 0 }}
                        transition={{ duration: 1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                        className="block text-transparent bg-clip-text bg-gradient-to-r from-klarelo-neon to-yellow-200 pb-2"
                    >
                        Our Priority
                    </motion.h1>
                </div>
             </div>

          {/* Description */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 1 }}
            className="mt-10 md:mt-12 max-w-2xl text-center space-y-8 relative z-30"
          >
             <p className="text-white/70 text-lg md:text-xl font-light leading-relaxed px-4 md:px-0 mx-auto">
               Architects of reputation. We distill complex narratives into clear, powerful signals that cut through the noise.
             </p>
             
             {/* Buttons */}
             <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 pt-4">
                <Link to="/services" className="w-full md:w-auto px-8 md:px-0">
                    <button className="w-full md:w-auto h-14 px-10 bg-white text-black font-bold uppercase tracking-widest hover:bg-klarelo-neon transition-colors duration-300 text-sm">
                        Our Expertise
                    </button>
                </Link>
                <Link to="/about">
                    <button className="w-full md:w-auto h-14 px-10 border border-white/20 text-white font-bold uppercase tracking-widest hover:bg-white/5 hover:border-white transition-all duration-300 backdrop-blur-sm text-sm">
                        Agency Vision
                    </button>
                </Link>
             </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-20"
        >
            <span className="text-[10px] uppercase tracking-widest text-white/30">Scroll</span>
            <div className="w-[1px] h-12 bg-gradient-to-b from-klarelo-neon/50 to-transparent" />
        </motion.div>
      </section>

      {/* Partners Marquee */}
      <section className="relative z-20 py-8 border-t border-white/5 bg-black" aria-label="Our Partners">
         <div className="text-center mb-6">
            <span className="text-[10px] uppercase tracking-[0.3em] text-white/30">Trusted by Leading Organizations</span>
         </div>
         <LogoMarquee />
      </section>

      {/* Text Marquee */}
      <div className="mt-8 md:mt-20">
        <Marquee text="STRATEGY • PUBLIC RELATIONS • BRANDING • ADVOCACY • TRAINING • EVENTS • DIGITAL • RESEARCH •" />
      </div>

      {/* Philosophy / About Intro */}
      <section className="py-12 md:py-32 px-6 md:px-12 max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-20">
           <div>
             <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tight mb-6 md:mb-8 leading-tight">
               Your Brand Story, <br/> <span className="text-klarelo-neon">Our Priority</span>
             </h2>
             <div className="border-l-4 border-klarelo-neon pl-6 py-3 bg-white/5">
                <p className="text-xl md:text-2xl italic text-white/80 font-serif">"There is no greater agony than bearing an untold story inside you."</p>
                <p className="text-xs md:text-sm mt-3 text-klarelo-neon uppercase tracking-widest font-bold">— Maya Angelou</p>
             </div>
           </div>
           <div className="space-y-6 md:space-y-8">
             <p className="text-lg md:text-2xl text-white/80 leading-relaxed font-light">
               At Klarelo Communications, we're passionate about helping you navigate the complex world of communications and bringing clarity to even the most intricate situations.
             </p>
             <p className="text-base md:text-lg text-white/60 leading-relaxed">
               We offer comprehensive communications solutions tailored to help your brand tell its story and build meaningful connections with your audience.
             </p>
             <Link to="/about">
               <button className="group flex items-center gap-4 text-sm font-bold uppercase tracking-widest text-white hover:text-klarelo-neon transition-colors">
                 <span>Our Mission & Vision</span>
                 <div className="h-[1px] w-12 bg-white group-hover:w-24 group-hover:bg-klarelo-neon transition-all" />
               </button>
             </Link>
           </div>
        </div>
      </section>

      {/* Selected Work */}
      <section className="py-12 md:py-20 px-6 md:px-12 max-w-[1400px] mx-auto">
        <div className="flex justify-between items-end mb-8 md:mb-20">
           <h2 className="font-display text-3xl md:text-4xl font-bold uppercase tracking-tight">Selected Work</h2>
           <span className="text-xs text-white/40 uppercase tracking-widest font-bold">Case Studies 2025</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-8 md:gap-y-20">
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
      <section className="py-12 md:py-32 border-y border-white/10 bg-klarelo-charcoal relative overflow-hidden">
         <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
            <h2 className="text-xs font-bold uppercase tracking-widest text-klarelo-neon mb-6 md:mb-12">Our Expertise</h2>
            <div className="space-y-2 md:space-y-6">
              {SERVICE_LINKS.map((item, i) => (
                // Passing the service ID in the state object creates a "Deep Link"
                <Link to="/services" state={{ openServiceId: item.id }} key={i}>
                  <motion.div 
                    initial={{ x: -30, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ delay: i * 0.05 }}
                    className="group flex items-center justify-between border-b border-white/10 pb-4 md:pb-6 cursor-pointer hover:pl-8 transition-all duration-500 mb-2"
                  >
                     <span className="font-display text-xl md:text-5xl font-bold text-white/40 group-hover:text-white transition-colors">{item.title}</span>
                     <span className="material-symbols-outlined text-xl md:text-3xl opacity-0 group-hover:opacity-100 transition-opacity text-klarelo-neon">arrow_forward</span>
                  </motion.div>
                </Link>
              ))}
            </div>
         </div>
         <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-klarelo-black to-transparent pointer-events-none" />
      </section>

      {/* CTA */}
      <section className="h-[50vh] md:h-[70vh] flex flex-col items-center justify-center text-center px-6 relative">
         <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop')] bg-cover bg-center opacity-20 mix-blend-screen" />
         <div className="relative z-10 w-full">
           <h2 className="font-display text-5xl md:text-8xl font-black mb-8 tracking-tight w-full px-2">
             READY TO <br />
             <span className="text-klarelo-neon">ASCEND?</span>
           </h2>
           <Link to="/contact">
             <motion.button 
               whileHover={{ scale: 1.05 }}
               whileTap={{ scale: 0.95 }}
               className="bg-white text-black font-bold uppercase tracking-widest py-4 px-12 rounded-full hover:bg-klarelo-neon transition-colors text-sm md:text-base"
             >
               Get Free Consultation
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
                  className="absolute top-4 right-4 z-50 w-8 h-8 md:w-10 md:h-10 rounded-full bg-black/50 border border-white/10 text-white hover:bg-klarelo-neon hover:text-black transition-all flex items-center justify-center"
              >
                  <span className="material-symbols-outlined text-sm md:text-base">close</span>
              </button>

              {/* Image Side */}
              <div className="w-full md:w-1/2 h-56 md:h-auto relative shrink-0">
                  <img src={selectedProject.img} alt={selectedProject.title} className="w-full h-full object-cover grayscale" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:to-[#0a0a0a]" />
              </div>

              {/* Content Side */}
              <div className="w-full md:w-1/2 p-6 md:p-12 flex flex-col justify-center">
                  <div className="mb-6 md:mb-8">
                      <p className="text-klarelo-neon text-[10px] md:text-xs font-bold uppercase tracking-widest mb-2">{selectedProject.category} • {selectedProject.year}</p>
                      <h3 className="font-display text-3xl md:text-5xl font-black text-white mb-4 md:mb-6 leading-none">{selectedProject.title}</h3>
                      <p className="text-white/70 leading-relaxed text-base md:text-lg">{selectedProject.description}</p>
                      
                      {selectedProject.url && (
                        <div className="mt-6">
                            <a 
                                href={selectedProject.url} 
                                target="_blank" 
                                rel="noreferrer"
                                className="inline-flex items-center gap-2 text-white font-bold uppercase tracking-widest text-xs md:text-sm hover:text-klarelo-neon transition-colors border-b border-white/20 pb-1 hover:border-klarelo-neon"
                            >
                                Visit Live Site
                                <span className="material-symbols-outlined text-sm md:text-base">arrow_outward</span>
                            </a>
                        </div>
                      )}
                  </div>

                  <div>
                      <h4 className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-white/40 mb-3 md:mb-4 border-b border-white/10 pb-2">Scope of Work</h4>
                      <ul className="grid grid-cols-1 gap-2 md:gap-3">
                          {selectedProject.services.map((service: string, i: number) => (
                              <li key={i} className="flex items-center gap-3 text-white">
                                  <span className="text-klarelo-neon material-symbols-outlined text-sm">check_circle</span>
                                  <span className="font-display font-bold text-sm md:text-base">{service}</span>
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