import React, { useState, useEffect } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Careers from './pages/Careers';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';

const LOGO_URL = "https://ik.imagekit.io/5zp8ovb7c/Klarelo/Logos/Klarelo%20Communications%20Logo%20V2%20Transparent%20Bg.png?updatedAt=1765824981603";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const NavItem = ({ to, children, isActive }: { to: string, children?: React.ReactNode, isActive: boolean }) => (
  <Link to={to} className="relative group overflow-hidden">
    <div className={`text-sm uppercase tracking-widest font-bold px-4 py-2 transition-colors duration-300 ${isActive ? 'text-klarelo-neon' : 'text-white/70 group-hover:text-white'}`}>
      {children}
    </div>
    {isActive && (
      <motion.div 
        layoutId="underline" 
        className="absolute bottom-0 left-0 w-full h-[1px] bg-klarelo-neon shadow-[0_0_10px_#d4ff00]"
      />
    )}
  </Link>
);

const App = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Agency', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Careers', path: '/careers' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
      <div className="min-h-screen bg-klarelo-black text-white selection:bg-klarelo-neon selection:text-black flex flex-col">
        <ScrollToTop />
        
        {/* Cinematic Navigation */}
        <motion.header 
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
            isScrolled ? 'py-4 bg-klarelo-black/90 backdrop-blur-xl border-b border-white/5' : 'py-6 md:py-8 bg-transparent'
          }`}
        >
          <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex items-center justify-between">
            <Link to="/" className="relative z-50 group">
              {/* Logo: Stealth to Flash Interaction */}
              <div className="relative p-2 md:p-3 rounded-lg transition-all duration-500 ease-out group-hover:bg-white group-hover:scale-105 group-hover:shadow-[0_0_30px_rgba(255,255,255,0.15)]">
                <img 
                  src={LOGO_URL} 
                  alt="Klarelo" 
                  className={`h-10 md:h-14 w-auto object-contain transition-all duration-500 
                    ${isMobileMenuOpen 
                      ? 'filter brightness-0 opacity-100' 
                      : 'filter brightness-0 invert drop-shadow-[0_0_1px_rgba(255,255,255,0.8)]'
                    } 
                    group-hover:filter group-hover:brightness-0 group-hover:invert-0 group-hover:opacity-100`} 
                />
              </div>
            </Link>

            {/* Desktop Menu */}
            <nav className="hidden md:flex items-center gap-8 bg-black/20 backdrop-blur-md px-8 py-2 rounded-full border border-white/5">
              <NavItem to="/" isActive={location.pathname === '/'}>Home</NavItem>
              <NavItem to="/about" isActive={location.pathname === '/about'}>Agency</NavItem>
              <NavItem to="/services" isActive={location.pathname === '/services'}>Services</NavItem>
              <NavItem to="/careers" isActive={location.pathname === '/careers'}>Careers</NavItem>
              <NavItem to="/contact" isActive={location.pathname === '/contact'}>Contact</NavItem>
            </nav>

            <div className="hidden md:block">
               <Link to="/contact">
                 <motion.button 
                   whileHover={{ scale: 1.05 }}
                   whileTap={{ scale: 0.95 }}
                   className="group relative px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest overflow-hidden"
                 >
                   <div className="absolute inset-0 border border-white/20 rounded-full group-hover:border-klarelo-neon transition-colors duration-300" />
                   <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                   <span className="relative text-white group-hover:text-klarelo-neon transition-colors">Let's Talk</span>
                 </motion.button>
               </Link>
            </div>

            {/* Mobile Toggle */}
            <button 
              className="md:hidden relative z-50 p-2 group"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <div className="space-y-1.5">
                <span className={`block w-6 h-[2px] bg-white transition-transform duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2 bg-black' : ''}`} />
                <span className={`block w-4 h-[2px] bg-white ml-auto transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`} />
                <span className={`block w-6 h-[2px] bg-white transition-transform duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2 bg-black' : ''}`} />
              </div>
            </button>
          </div>

          {/* Full Screen Mobile Menu */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div 
                initial={{ opacity: 0, clipPath: "circle(0% at 100% 0%)" }}
                animate={{ opacity: 1, clipPath: "circle(150% at 100% 0%)" }}
                exit={{ opacity: 0, clipPath: "circle(0% at 100% 0%)" }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="fixed inset-0 bg-klarelo-neon z-40 flex flex-col"
              >
                <div className="flex-grow flex flex-col justify-center px-8">
                  <div className="flex flex-col gap-2">
                    {navLinks.map((item, index) => (
                      <Link 
                        key={item.name}
                        to={item.path} 
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="group flex items-baseline gap-4"
                      >
                        <span className="text-xs font-mono font-bold text-black/40 group-hover:text-black transition-colors">
                          0{index + 1}
                        </span>
                        <span className="font-display text-4xl sm:text-7xl font-black text-black group-hover:text-white transition-colors tracking-tighter uppercase">
                          {item.name}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
                
                {/* Mobile Menu Footer */}
                <div className="p-8 border-t border-black/10">
                   <div className="flex flex-col gap-4 text-black">
                      <a href="mailto:klarelocommunications@gmail.com" className="font-bold text-lg break-all md:break-normal">klarelocommunications@gmail.com</a>
                      <div className="flex gap-6 text-sm font-bold uppercase tracking-widest opacity-60">
                         <a href="https://www.instagram.com/ruth_mboya/" target="_blank" rel="noreferrer">Instagram</a>
                         <a href="https://www.linkedin.com/company/klarelo-communications/" target="_blank" rel="noreferrer">LinkedIn</a>
                         <a href="https://x.com/ruthmboyas" target="_blank" rel="noreferrer">X (Twitter)</a>
                      </div>
                   </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.header>

        {/* Page Content */}
        <main className="pt-20 md:pt-24 flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
          </Routes>
        </main>

        {/* Mega Footer */}
        <footer className="bg-black pt-16 md:pt-32 pb-0 border-t border-white/10 overflow-hidden relative mt-auto">
            
            {/* Content Container */}
            <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-20 pb-20 md:pb-32">
                {/* Mobile Optimized Grid: 2 columns on mobile, 4 on desktop */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-10 md:gap-8 mb-12 md:mb-20">
                    
                    {/* Brand Column - Spans 2 cols on mobile */}
                    <div className="col-span-2 md:col-span-1 flex flex-col justify-between items-start">
                        <Link to="/" className="block mb-6 md:mb-8 group">
                             <img src={LOGO_URL} alt="Klarelo" className="h-16 md:h-20 w-auto filter brightness-0 invert opacity-100 transition-transform duration-500 group-hover:scale-105" />
                        </Link>
                        <p className="text-white/60 text-sm md:text-lg leading-relaxed max-w-xs">
                            Architects of reputation. Designing the frequency that cuts through the noise.
                        </p>
                    </div>

                    {/* Navigation - 1 col on mobile */}
                    <div className="col-span-1">
                        <h4 className="text-xs md:text-sm font-bold uppercase tracking-[0.2em] text-klarelo-neon mb-6 md:mb-8">Menu</h4>
                        <ul className="space-y-3 md:space-y-4">
                            {navLinks.map(item => (
                                <li key={item.name}>
                                    <Link 
                                        to={item.path} 
                                        className="text-base md:text-xl font-display font-bold text-white/50 hover:text-white transition-colors flex items-center gap-2 group"
                                    >
                                        <span className="w-0 overflow-hidden group-hover:w-4 transition-all duration-300 text-klarelo-neon">→</span>
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Socials - 1 col on mobile */}
                    <div className="col-span-1">
                         <h4 className="text-xs md:text-sm font-bold uppercase tracking-[0.2em] text-klarelo-neon mb-6 md:mb-8">Connect</h4>
                         <ul className="space-y-3 md:space-y-4">
                            {[
                                { name: 'LinkedIn', url: 'https://www.linkedin.com/company/klarelo-communications/' },
                                { name: 'Instagram', url: 'https://www.instagram.com/ruth_mboya/' },
                                { name: 'X (Twitter)', url: 'https://x.com/ruthmboyas' },
                                { name: 'Facebook', url: 'https://www.facebook.com/mboyaruth' }
                            ].map(social => (
                                <li key={social.name}>
                                    <a 
                                        href={social.url} 
                                        target="_blank" 
                                        rel="noreferrer" 
                                        className="text-base md:text-xl font-display font-bold text-white/50 hover:text-white transition-colors flex items-center gap-2 group"
                                    >
                                         <span className="w-0 overflow-hidden group-hover:w-4 transition-all duration-300 text-klarelo-neon">↗</span>
                                         {social.name}
                                    </a>
                                </li>
                            ))}
                         </ul>
                    </div>

                    {/* Contact Info - Spans 2 cols on mobile to ensure address fits well */}
                    <div className="col-span-2 md:col-span-1">
                        <h4 className="text-xs md:text-sm font-bold uppercase tracking-[0.2em] text-klarelo-neon mb-6 md:mb-8">Office</h4>
                        <div className="space-y-6">
                            <div>
                                <p className="text-white/40 text-[10px] md:text-xs uppercase tracking-widest mb-2">Location</p>
                                <p className="text-base md:text-lg text-white">Pioneer House, 5th Floor</p>
                                <p className="text-base md:text-lg text-white">Kenyatta Ave, Nairobi</p>
                            </div>
                            <div>
                                <p className="text-white/40 text-[10px] md:text-xs uppercase tracking-widest mb-2">Say Hello</p>
                                <a href="mailto:klarelocommunications@gmail.com" className="block text-base md:text-lg text-white hover:text-klarelo-neon transition-colors font-bold break-words">klarelocommunications@gmail.com</a>
                                <a href="tel:0705122188" className="block text-base md:text-lg text-white/60 hover:text-white transition-colors mt-1">0705 122 188</a>
                                <a href="tel:0703406865" className="block text-base md:text-lg text-white/60 hover:text-white transition-colors mt-1">0703 406 865</a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                     <div className="flex flex-col md:flex-row gap-4 md:gap-8 text-[10px] md:text-xs uppercase tracking-widest text-white/30 font-bold">
                        <p>© 2025 KLARELO COMMUNICATIONS.</p>
                        <div className="flex gap-6">
                           <Link to="/privacy" className="cursor-pointer hover:text-white transition-colors">Privacy Policy</Link>
                           <Link to="/terms" className="cursor-pointer hover:text-white transition-colors">Terms</Link>
                        </div>
                     </div>
                     <p className="text-[10px] md:text-xs uppercase tracking-widest text-white/30 font-bold">NAIROBI • GLOBAL</p>
                </div>
            </div>
            
            {/* Animated Background Watermark */}
            <div className="absolute bottom-0 left-0 w-full overflow-hidden pointer-events-none opacity-[0.04] pb-0 leading-none select-none z-10">
                <div className="flex animate-marquee whitespace-nowrap">
                     <span className="text-[20vw] font-black font-display text-white px-10">KLARELO COMMUNICATIONS — ARCHITECTS OF REPUTATION —</span>
                     <span className="text-[20vw] font-black font-display text-white px-10">KLARELO COMMUNICATIONS — ARCHITECTS OF REPUTATION —</span>
                </div>
            </div>
        </footer>
      </div>
  );
};

export default App;