import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';

const Contact = () => {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    setTimeout(() => { setFormStatus('success'); setFormData({ name: '', email: '', message: '' }); }, 2000);
  };

  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "description": "Contact Klarelo Communications for brand strategy and PR inquiries.",
    "mainEntity": {
      "@type": "CommunicationsAgency",
      "name": "Klarelo Communications",
      "telephone": "+254-703-406-865",
      "email": "klarelocommunications@gmail.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Pioneer House, Kenyatta Avenue, 5th Floor",
        "addressLocality": "Nairobi",
        "addressCountry": "KE"
      }
    }
  };

  return (
    <div className="min-h-screen pt-24 md:pt-32 px-6 md:px-12 max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
      <SEO 
        title="Contact Us"
        description="Ready to elevate your reputation? Contact Klarelo Communications in Nairobi. We are selective, but always listening."
        canonical="/#/contact"
        schema={contactSchema}
      />
      
      {/* Text Content */}
      <div className="flex flex-col justify-between h-full">
         <div>
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-8">
              LET'S <br/> BUILD.
            </h1>
            <p className="text-lg md:text-xl text-white/60 max-w-md leading-relaxed">
              Ready to elevate your reputation? Drop us a line. We are selective with our partners, but we are always listening.
            </p>
         </div>
         
         <div className="space-y-8 pb-10 mt-12 md:mt-0">
            <div>
               <p className="text-xs uppercase tracking-widest text-klarelo-neon mb-2">Visit Us</p>
               <p className="text-2xl font-bold">Pioneer House, Kenyatta Ave</p>
               <p className="text-white/50">5th Floor, Nairobi, Kenya</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
               <div>
                  <p className="text-xs uppercase tracking-widest text-klarelo-neon mb-2">Email</p>
                  <a href="mailto:klarelocommunications@gmail.com" className="text-lg font-bold hover:text-white/50 transition-colors break-words">klarelocommunications@gmail.com</a>
               </div>
               <div>
                  <p className="text-xs uppercase tracking-widest text-klarelo-neon mb-2">Call</p>
                  <a href="tel:0703406865" className="text-lg font-bold hover:text-white/50 transition-colors">0703 406 865</a>
               </div>
            </div>
         </div>
      </div>

      {/* Form */}
      <div className="bg-white/5 p-6 md:p-12 border border-white/10 h-fit">
        {formStatus === 'success' ? (
           <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="h-full flex flex-col items-center justify-center text-center py-12">
              <span className="material-symbols-outlined text-6xl text-klarelo-neon mb-6">check_circle</span>
              <h2 className="text-4xl font-display font-bold mb-4">RECEIVED.</h2>
              <p className="text-white/60 mb-8">We'll be in touch shortly.</p>
              <button onClick={() => setFormStatus('idle')} className="text-xs uppercase tracking-widest border-b border-white pb-1 hover:text-klarelo-neon hover:border-klarelo-neon">Send Another</button>
           </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-8 md:space-y-12">
            <div className="group">
              <label className="block text-xs uppercase tracking-widest text-white/50 mb-2 group-focus-within:text-klarelo-neon transition-colors">Name</label>
              <input 
                type="text" 
                required 
                className="w-full bg-transparent border-b border-white/20 py-3 md:py-4 text-xl md:text-2xl font-bold focus:outline-none focus:border-klarelo-neon transition-colors"
                placeholder="Who are you?"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
              />
            </div>
            <div className="group">
              <label className="block text-xs uppercase tracking-widest text-white/50 mb-2 group-focus-within:text-klarelo-neon transition-colors">Email</label>
              <input 
                type="email" 
                required 
                className="w-full bg-transparent border-b border-white/20 py-3 md:py-4 text-xl md:text-2xl font-bold focus:outline-none focus:border-klarelo-neon transition-colors"
                placeholder="how@we.reach.you"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
              />
            </div>
            <div className="group">
              <label className="block text-xs uppercase tracking-widest text-white/50 mb-2 group-focus-within:text-klarelo-neon transition-colors">Vision</label>
              <textarea 
                required 
                rows={4}
                className="w-full bg-transparent border-b border-white/20 py-3 md:py-4 text-xl md:text-2xl font-bold focus:outline-none focus:border-klarelo-neon transition-colors resize-none"
                placeholder="What are we building?"
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
              />
            </div>
            
            <button 
              type="submit" 
              disabled={formStatus === 'submitting'}
              className="w-full bg-white text-black font-bold uppercase tracking-widest py-4 md:py-6 hover:bg-klarelo-neon transition-colors disabled:opacity-50 text-sm md:text-base"
            >
              {formStatus === 'submitting' ? 'Transmitting...' : 'Initiate Sequence'}
            </button>
          </form>
        )}
      </div>

    </div>
  );
};

export default Contact;