import React from 'react';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';

const Careers = () => {
  const careersSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "name": "Careers at Klarelo",
        "description": "Join the ranks of the exceptional. We are always scouting for strategists, storytellers, and disruptors in Nairobi and beyond.",
        "url": "https://klarelocommunications.com/#/careers",
        "inLanguage": "en-US",
        "publisher": {
           "@type": "CommunicationsAgency",
           "name": "Klarelo Communications",
           "logo": {
             "@type": "ImageObject",
             "url": "https://ik.imagekit.io/5zp8ovb7c/Klarelo/Logos/Klarelo%20Communications%20Logo%20V2%20Transparent%20Bg.png?updatedAt=1765824981603"
           }
        },
        "potentialAction": {
          "@type": "ApplyAction",
          "target": {
            "@type": "EntryPoint",
            "urlTemplate": "mailto:klarelocommunications@gmail.com",
            "actionPlatform": [
              "http://schema.org/DesktopWebPlatform",
              "http://schema.org/MobileWebPlatform"
            ]
          },
          "name": "Apply to Talent Pool"
        }
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://klarelocommunications.com/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Careers",
            "item": "https://klarelocommunications.com/#/careers"
          }
        ]
      }
    ]
  };

  return (
    <div className="min-h-screen py-32 px-6 md:px-12 max-w-[1400px] mx-auto flex flex-col items-center justify-center text-center">
      <SEO 
        title="Careers - Join The Ranks"
        description="We are always scouting for the exceptional. If you are a strategist, storyteller, or disruptor, join Klarelo Communications."
        canonical="/#/careers"
        schema={careersSchema}
      />
      
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl"
      >
        <p className="text-klarelo-neon font-bold tracking-[0.2em] mb-4 uppercase">Join The Ranks</p>
        <h1 className="font-display font-black text-6xl md:text-[8vw] leading-[0.9] tracking-tighter mb-12">
          THE TALENT <br />
          <span className="text-white/20">POOL.</span>
        </h1>

        <div className="bg-white/5 border border-white/10 p-12 rounded-lg backdrop-blur-sm">
           <span className="material-symbols-outlined text-6xl text-white/30 mb-6">radar</span>
           <h2 className="text-2xl font-bold mb-4">No Open Positions Currently</h2>
           <p className="text-white/60 text-lg leading-relaxed max-w-2xl mx-auto mb-8">
             We are always scouting for the exceptional. The strategists, the storytellers, and the disruptors. 
             If you believe you belong at Klarelo, don't wait for a job posting.
           </p>
           
           <a 
             href="mailto:klarelocommunications@gmail.com?subject=Talent Pool Application: [Your Name]" 
             className="inline-block px-8 py-4 bg-white text-black font-bold uppercase tracking-widest hover:bg-klarelo-neon transition-colors"
           >
             Send Portfolio
           </a>
        </div>
        
        <div className="mt-12 text-sm text-white/30 uppercase tracking-widest">
           <p>Nairobi, Kenya • Global Impact</p>
        </div>
      </motion.div>

    </div>
  );
};

export default Careers;