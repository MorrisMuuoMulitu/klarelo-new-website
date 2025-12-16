import React from 'react';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';

const Privacy = () => {
  const privacySchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Privacy Policy",
    "url": "https://klarelocommunications.com/#/privacy"
  };

  const sections = [
    {
      title: "01. Data Sanctity",
      content: "At Klarelo, we treat your data with the same rigorous discretion we apply to our clients' crisis management strategies. We collect only what is necessary to architect your experience: basic analytics, contact information you voluntarily provide, and technical data essential for site performance."
    },
    {
      title: "02. Information Usage",
      content: "We do not trade, sell, or lease your digital footprint. Information harvested is used strictly for internal intelligence—improving our digital infrastructure, communicating directly with you regarding inquiries, and legally mandated compliance."
    },
    {
      title: "03. Digital Cookies",
      content: "Our site employs minimal cookies—digital markers that ensure smooth navigation and preference retention. You retain full sovereignty to accept or decline these via your browser settings, though refusal may dampen specific interactive elements of our platform."
    },
    {
      title: "04. Third-Party Protocols",
      content: "We occasionally integrate with elite third-party tools (e.g., analytics providers) to gauge performance. While we vet our partners for security, Klarelo Communications cannot be held liable for the independent privacy policies of external entities linked to or from our domain."
    }
  ];

  return (
    <div className="min-h-screen pt-32 pb-20 px-6 md:px-12 max-w-[1000px] mx-auto">
      <SEO 
        title="Privacy Protocol" 
        description="Klarelo Communications Privacy Policy. We treat your data with the same rigorous discretion we apply to our strategies." 
        canonical="/#/privacy" 
        schema={privacySchema} 
      />
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <p className="text-klarelo-neon font-bold tracking-[0.2em] mb-4 uppercase text-xs">Legal Infrastructure</p>
        <h1 className="font-display text-5xl md:text-7xl font-black mb-12 text-white leading-none tracking-tighter">
          PRIVACY <span className="text-white/20">PROTOCOL.</span>
        </h1>

        <div className="space-y-12 md:space-y-16 border-t border-white/10 pt-12">
            <p className="text-xl md:text-2xl text-white/80 leading-relaxed font-light">
                Your trust is our currency. Below is the framework governing our digital interactions.
            </p>

            <div className="grid grid-cols-1 gap-12">
                {sections.map((section, index) => (
                    <div key={index} className="group">
                        <h2 className="font-display text-2xl md:text-3xl font-bold mb-4 group-hover:text-klarelo-neon transition-colors">
                            {section.title}
                        </h2>
                        <p className="text-white/60 leading-relaxed text-base md:text-lg border-l border-white/20 pl-6 group-hover:border-klarelo-neon transition-colors duration-500">
                            {section.content}
                        </p>
                    </div>
                ))}
            </div>

            <div className="mt-20 pt-12 border-t border-white/10">
                <p className="text-sm text-white/40 uppercase tracking-widest mb-2">Inquiries</p>
                <a href="mailto:privacy@klarelocommunications.com" className="text-lg font-bold hover:text-klarelo-neon transition-colors">klarelocommunications@gmail.com</a>
            </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Privacy;