import React from 'react';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';

const SocialIcon = ({ type }: { type: string }) => {
  switch (type) {
    case 'facebook':
      return <svg fill="currentColor" viewBox="0 0 24 24" className="w-4 h-4"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>;
    case 'twitter': // X icon
      return <svg fill="currentColor" viewBox="0 0 24 24" className="w-4 h-4"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>;
    case 'instagram':
      return <svg fill="currentColor" viewBox="0 0 24 24" className="w-4 h-4"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.36-.2 6.78-2.618 6.98-6.98.058-1.28-.072-1.689-.072-4.948-.072zM12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a4 4 0 110-8 4 4 0 010 8zM20.283 2.925a1.44 1.44 0 110 2.88 1.44 1.44 0 010-2.88z"/></svg>;
    default:
      return null;
  }
};

const About = () => {
  const team = [
    { 
      name: 'Ruth Mboya', 
      role: 'Managing Partner', 
      img: 'https://ik.imagekit.io/5zp8ovb7c/Klarelo/Team/ruth.webp?updatedAt=1712918953151',
      socials: [
        { type: 'facebook', url: 'https://www.facebook.com/mboyaruth?mibextid=ZbWKwL' },
        { type: 'twitter', url: 'https://x.com/ruthmboyas?t=I--ghhiEi9FsX50nngltfQ&s=09' },
        { type: 'instagram', url: 'https://www.instagram.com/ruth_mboya/' }
      ]
    },
    { 
      name: 'Ruth Mutua', 
      role: 'Head of Strategy', 
      img: 'https://ik.imagekit.io/5zp8ovb7c/Klarelo/Team/mueni.webp?updatedAt=1709823446871',
      socials: [
        { type: 'instagram', url: 'https://www.instagram.com/ruthmutua?igsh=dWVzOHU1eTR0dGc1' },
        { type: 'twitter', url: 'https://x.com/ruthmut66140543?t=-HncDHL0xWJUjYGYE5Ytlg&s=09' }
      ]
    },
    { 
      name: 'Felix Wambua', 
      role: 'Creative Director', 
      img: 'https://ik.imagekit.io/5zp8ovb7c/Klarelo/Team/felix.webp?updatedAt=1709823445951',
      socials: [
        { type: 'instagram', url: 'https://www.instagram.com/_felixwambua?igsh=MTA0NWhwNnpudnpuNg%3D%3D' },
        { type: 'twitter', url: 'https://x.com/_FelixWambua?t=5KGQwyK2uO_ph4Ciwzl7Og&s=08' }
      ]
    }
  ];

  const aboutSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "mainEntity": {
      "@type": "CommunicationsAgency",
      "name": "Klarelo Communications",
      "foundingLocation": "Nairobi, Kenya",
      "description": "Architects of reputation. We design the frequency that cuts through the noise.",
      "employees": team.map(member => ({
        "@type": "Person",
        "name": member.name,
        "jobTitle": member.role
      }))
    }
  };

  return (
    <div className="min-h-screen pb-12 md:pb-20 pt-8 md:pt-10">
      <SEO 
        title="About Us - The Agency"
        description="Klarelo was born from a simple obsession: The pursuit of clarity. Meet the visionaries and architects of reputation behind Nairobi's leading agency."
        canonical="/#/about"
        schema={aboutSchema}
      />
      
      {/* Header */}
      <div className="px-6 md:px-12 max-w-[1400px] mx-auto mb-12 md:mb-24">
        <motion.h1 
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          // Increased padding to py-8 and leading to 1.1 to fully contain the large Syne font
          className="font-display text-5xl md:text-7xl lg:text-[10vw] font-black leading-[1.1] tracking-tighter mb-8 md:mb-12 break-words py-8"
        >
          AGENCY<span className="text-klarelo-neon">.</span>
        </motion.h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 border-t border-white/20 pt-8 md:pt-12">
           <p className="text-lg md:text-2xl text-white/80 leading-relaxed font-light">
             We are architects of reputation. In a world saturated with noise, we design the frequency that cuts through.
           </p>
           <div className="space-y-4 md:space-y-6 text-white/60 text-sm md:text-lg">
             <p>Founded in Nairobi with a global lens, Klarelo was born from a simple obsession: The pursuit of clarity in a chaotic digital landscape.</p>
             <p>We don't play it safe. We combine raw creativity with surgical strategic precision to build brands that are impossible to ignore.</p>
           </div>
        </div>
      </div>

      {/* Image Parallax */}
      <div className="w-full h-[40vh] md:h-[50vh] overflow-hidden mb-16 md:mb-24 relative">
         <motion.img 
            initial={{ scale: 1.2 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 1.5 }}
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop" 
            className="w-full h-full object-cover opacity-60 grayscale" 
            alt="Klarelo Team Environment"
         />
         <div className="absolute inset-0 bg-gradient-to-t from-klarelo-black via-transparent to-transparent" />
      </div>

      {/* Stats - The GOAT Metrics */}
      <div className="px-6 md:px-12 max-w-[1400px] mx-auto mb-20 md:mb-32">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
           {[
             { num: '50+', label: 'Global Clients' },
             { num: '145%', label: 'Avg Growth' },
             { num: '3', label: 'Continents' },
             { num: '∞', label: 'Possibilities' }
           ].map((stat, i) => (
             <div key={i} className="border-l border-white/20 pl-4 md:pl-6">
                <h3 className="font-display text-4xl md:text-6xl font-bold text-white mb-2">{stat.num}</h3>
                <p className="text-[10px] md:text-xs uppercase tracking-widest text-klarelo-neon">{stat.label}</p>
             </div>
           ))}
        </div>
      </div>

      {/* Leadership */}
      <div className="px-6 md:px-12 max-w-[1400px] mx-auto">
         <h2 className="font-display text-3xl md:text-4xl font-bold mb-12 md:mb-16 uppercase">The Visionaries</h2>
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-8">
            {team.map((leader, i) => (
              <div key={i} className="group cursor-pointer">
                 {/* Image Container */}
                 <div className="aspect-[3/4] overflow-hidden mb-6 bg-white/5 grayscale group-hover:grayscale-0 transition-all duration-700 relative border border-white/5">
                    <img src={leader.img} alt={leader.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                 </div>
                 
                 {/* Details */}
                 <div className="flex flex-col gap-4">
                    <div>
                        <h3 className="text-2xl font-display font-bold text-white group-hover:text-klarelo-neon transition-colors mb-1">{leader.name}</h3>
                        <p className="text-xs font-bold text-white/40 uppercase tracking-[0.2em]">{leader.role}</p>
                    </div>

                    {/* Interactive Socials */}
                    <div className="flex gap-3">
                      {leader.socials.map((social, idx) => (
                        <motion.a 
                          key={idx} 
                          href={social.url} 
                          target="_blank" 
                          rel="noreferrer"
                          whileHover={{ scale: 1.1, y: -2 }}
                          whileTap={{ scale: 0.95 }}
                          className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-black hover:bg-klarelo-neon hover:border-klarelo-neon hover:shadow-[0_0_15px_rgba(212,255,0,0.4)] transition-all duration-300"
                          aria-label={`Connect on ${social.type}`}
                        >
                           <SocialIcon type={social.type} />
                        </motion.a>
                      ))}
                    </div>
                 </div>
              </div>
            ))}
         </div>
      </div>

    </div>
  );
};

export default About;