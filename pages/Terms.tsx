import React from 'react';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';

const Terms = () => {
  const termsSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Terms of Service",
    "url": "https://klarelocommunications.com/#/terms"
  };

  const sections = [
    {
      title: "01. Terms of Engagement",
      content: "By accessing the Klarelo Communications digital platform, you agree to be bound by these terms. If you disagree with any part of these protocols, you are advised to discontinue use immediately. These terms apply to all visitors, users, and others who access the Service."
    },
    {
      title: "02. Intellectual Property",
      content: "The content, design, aesthetic, and code contained within this site are the exclusive intellectual property of Klarelo Communications. Unauthorized reproduction, duplication, or exploitation of any material for commercial purposes without explicit written consent is strictly prohibited and will be met with legal action."
    },
    {
      title: "03. Liability Limitations",
      content: "Klarelo provides this website on an 'as is' basis. We make no warranties, expressed or implied, regarding the accuracy or reliability of the materials. In no event shall Klarelo Communications be liable for any damages arising out of the use or inability to use the materials on our website."
    },
    {
      title: "04. Governing Law",
      content: "These terms are governed by and construed in accordance with the laws of Kenya. You irrevocably submit to the exclusive jurisdiction of the courts in that location for any disputes arising from your use of this platform."
    }
  ];

  return (
    <div className="min-h-screen pt-32 pb-20 px-6 md:px-12 max-w-[1000px] mx-auto">
      <SEO 
        title="Terms of Service" 
        description="Klarelo Communications Terms of Service. The rules of engagement for our digital platform." 
        canonical="/#/terms" 
        schema={termsSchema} 
      />
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <p className="text-klarelo-neon font-bold tracking-[0.2em] mb-4 uppercase text-xs">Legal Infrastructure</p>
        <h1 className="font-display text-5xl md:text-7xl font-black mb-12 text-white leading-none tracking-tighter">
          TERMS OF <br/><span className="text-white/20">ENGAGEMENT.</span>
        </h1>

        <div className="space-y-12 md:space-y-16 border-t border-white/10 pt-12">
            <p className="text-xl md:text-2xl text-white/80 leading-relaxed font-light">
                Clarity defines our operations. These protocols govern the use of our digital assets.
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

            <div className="mt-20 pt-12 border-t border-white/10 text-xs uppercase tracking-widest text-white/30">
                <p>Last Updated: March 2025</p>
                <p>Nairobi, Kenya</p>
            </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Terms;