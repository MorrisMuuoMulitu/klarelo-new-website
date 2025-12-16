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
      name: 'Ruth Mboya, MPRSK', 
      role: 'Managing Director', 
      img: 'https://ik.imagekit.io/5zp8ovb7c/Klarelo/Team/ruth.webp?updatedAt=1712918953151',
      socials: [
        { type: 'facebook', url: 'https://www.facebook.com/mboyaruth?mibextid=ZbWKwL' },
        { type: 'twitter', url: 'https://x.com/ruthmboyas?t=I--ghhiEi9FsX50nngltfQ&s=09' },
        { type: 'instagram', url: 'https://www.instagram.com/ruth_mboya/' }
      ]
    },
    { 
      name: 'Mueni Mutua', 
      role: 'Digital Strategist', 
      img: 'https://ik.imagekit.io/5zp8ovb7c/Klarelo/Team/mueni.webp?updatedAt=1709823446871',
      socials: [
        { type: 'instagram', url: 'https://www.instagram.com/ruthmutua?igsh=dWVzOHU1eTR0dGc1' },
        { type: 'twitter', url: 'https://x.com/ruthmut66140543?t=-HncDHL0xWJUjYGYE5Ytlg&s=09' }
      ]
    },
    { 
      name: 'Felix Wambua', 
      role: 'Creative Lead', 
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
          className="font-display text-5xl md:text-7xl lg:text-[10vw] font-black leading-[1.1] tracking-tighter mb-8 md:mb-12 break-words py-8"
        >
          AGENCY<span className="text-klarelo-neon">.</span>
        </motion.h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 border-t border-white/20 pt-8 md:pt-12">
           <div className="space-y-6">
              <p className="text-xl md:text-2xl text-white/90 leading-relaxed font-light">
                Established in 2019, previously known as Mboya PR, <strong>Klarelo Communications Limited</strong> is a public relations, communications, research and advocacy consultancy firm that specialises in brand development for individuals and organisations.
              </p>
              <p className="text-white/60 leading-relaxed">
                The consultancy thrives on bringing clarity to complex situations and creating the most insightful communications solutions for its clients. We break down the complex communication needs of our clients into simple surmountable tasks using clearly thought through plots.
              </p>
           </div>
           
           <div className="space-y-8">
              {/* Mission */}
              <div className="bg-white/5 p-6 rounded-lg border border-white/10">
                 <h3 className="flex items-center gap-3 text-2xl font-bold mb-4 font-display">
                    <span className="material-symbols-outlined text-klarelo-neon">target</span> 
                    Our Mission
                 </h3>
                 <p className="text-white/70">
                    To build brilliant brands that stand out in today's digital world. We do this by helping them be more discoverable, shareable, and memorable.
                 </p>
              </div>

              {/* Vision */}
              <div className="bg-white/5 p-6 rounded-lg border border-white/10">
                 <h3 className="flex items-center gap-3 text-2xl font-bold mb-4 font-display">
                    <span className="material-symbols-outlined text-klarelo-neon">visibility</span> 
                    Our Vision
                 </h3>
                 <p className="text-white/70">
                    To inspire and support the success of companies and their leaders at the crossroads of business and technology.
                 </p>
              </div>
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
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 bg-klarelo-charcoal p-8 rounded-2xl shadow-2xl border border-white/5">
           {[
             { num: '7+', label: 'Trusted Clients' },
             { num: '50+', label: 'Successful Campaigns' },
             { num: '5', label: 'Years of Excellence' },
             { num: '100%', label: 'Client Satisfaction' }
           ].map((stat, i) => (
             <div key={i} className="text-center md:text-left">
                <h3 className="font-display text-4xl md:text-6xl font-bold text-klarelo-neon mb-2">{stat.num}</h3>
                <p className="text-xs md:text-sm font-bold uppercase tracking-widest text-white/60">{stat.label}</p>
             </div>
           ))}
        </div>
      </div>

      {/* Leadership */}
      <div className="px-6 md:px-12 max-w-[1400px] mx-auto">
         <h2 className="font-display text-3xl md:text-4xl font-bold mb-12 md:mb-16 uppercase text-center md:text-left">
             Meet Our <span className="text-klarelo-neon">Expert Team</span>
         </h2>
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-8">
            {team.map((leader, i) => (
              <div key={i} className="group cursor-pointer bg-klarelo-charcoal border border-white/5 rounded-2xl overflow-hidden p-6 hover:border-klarelo-neon/50 transition-all duration-300">
                 {/* Image Container */}
                 <div className="w-32 h-32 mx-auto rounded-full overflow-hidden mb-6 border-2 border-klarelo-neon">
                    <img src={leader.img} alt={leader.name} className="w-full h-full object-cover" />
                 </div>
                 
                 {/* Details */}
                 <div className="flex flex-col gap-4 text-center">
                    <div>
                        <h3 className="text-2xl font-display font-bold text-white mb-1">{leader.name}</h3>
                        <p className="text-xs font-bold text-klarelo-neon uppercase tracking-[0.2em]">{leader.role}</p>
                    </div>

                    <div className="h-[1px] w-full bg-white/10" />

                    {/* Interactive Socials */}
                    <div className="flex gap-3 justify-center">
                      {leader.socials.map((social, idx) => (
                        <motion.a 
                          key={idx} 
                          href={social.url} 
                          target="_blank" 
                          rel="noreferrer"
                          whileHover={{ scale: 1.1, y: -2 }}
                          whileTap={{ scale: 0.95 }}
                          className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-black hover:bg-klarelo-neon hover:border-klarelo-neon transition-all duration-300"
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