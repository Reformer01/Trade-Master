
import { useState, useEffect, useRef } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { cn } from "@/lib/utils";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("");
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 50;
      setIsScrolled(scrolled);
      
      // Update active link based on scroll position
      const sections = ['features', 'pricing', 'testimonials'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (!element) return false;
        const rect = element.getBoundingClientRect();
        return rect.top <= 100 && rect.bottom >= 100;
      });
      
      if (currentSection) {
        setActiveLink(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial check
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    if (sectionId === 'testimonials') {
      const testimonialSection = document.querySelector('.animate-marquee');
      if (testimonialSection) {
        const yOffset = -100;
        const y = testimonialSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    } else if (sectionId === 'cta') {
      const ctaSection = document.querySelector('.button-gradient');
      if (ctaSection) {
        const yOffset = -100;
        const y = ctaSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const navItems = [
    { id: "features", name: "Features", href: "#features", onClick: () => scrollToSection('features') },
    { id: "pricing", name: "Pricing", href: "#pricing", onClick: () => scrollToSection('pricing') },
    { id: "testimonials", name: "Testimonials", href: "#testimonials", onClick: () => scrollToSection('testimonials') },
  ];

  return (
    <motion.header
      ref={navRef}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 w-full",
        isScrolled 
          ? "h-16 bg-gradient-to-r from-emerald-900/30 to-cyan-900/30 backdrop-blur-xl border-b border-emerald-400/20 shadow-2xl shadow-emerald-900/20"
          : "h-16 bg-gradient-to-r from-emerald-900/20 to-cyan-900/20 backdrop-blur-lg border-b border-emerald-400/10"
      )}
    >
      <div className="h-full w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between h-full">
          <motion.div 
            className="flex items-center gap-2 group cursor-pointer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <motion.div 
              className="relative"
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            >
              <div className="absolute inset-0 bg-emerald-400/20 rounded-full blur-sm" />
              <img 
                src="/logos/logoipsum-381.svg" 
                alt="CryptoTrade Logo" 
                className="relative z-10 w-8 h-8 sm:w-10 sm:h-10 transition-transform duration-300 group-hover:scale-110"
              />
            </motion.div>
            <span className="text-xl font-bold bg-gradient-to-r from-emerald-300 to-cyan-300 bg-clip-text text-transparent">
              CryptoTrade
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <motion.div
                key={item.id}
                className="relative px-4 py-2 rounded-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <button
                  onClick={item.onClick}
                  className={cn(
                    "text-sm font-medium transition-colors duration-300 px-3 py-2 rounded-lg",
                    activeLink === item.id
                      ? "text-emerald-300 bg-emerald-900/30"
                      : "text-slate-300 hover:text-emerald-300 hover:bg-slate-800/50"
                  )}
                >
                  {item.name}
                </button>
                {activeLink === item.id && (
                  <motion.div
                    layoutId="activeNavItem"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-emerald-400 rounded-full"
                    transition={{ type: 'spring', stiffness: 500, damping: 30, mass: 0.5 }}
                  />
                )}
              </motion.div>
            ))}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="ml-2"
            >
              <Button
                onClick={() => scrollToSection('pricing')}
                className="button-gradient text-white border-emerald-400 border shadow-lg hover:shadow-emerald-500/30"
              >
                Start Trading
              </Button>
            </motion.div>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center">
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  className="p-2 text-slate-300 hover:bg-slate-800/50 hover:text-emerald-300 focus:outline-none focus:ring-2 focus:ring-emerald-400/50"
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="top" className="w-full max-w-full h-screen bg-gradient-to-br from-slate-900 to-slate-800 border-b border-emerald-400/20 overflow-y-auto">
                <div className="flex flex-col h-full">
                  <div className="flex items-center justify-between p-4 border-b border-emerald-400/10">
                    <div className="flex items-center gap-2">
                      <img 
                        src="/logos/logoipsum-381.svg" 
                        alt="CryptoTrade Logo" 
                        className="w-8 h-8"
                      />
                      <span className="text-xl font-bold bg-gradient-to-r from-emerald-300 to-cyan-300 bg-clip-text text-transparent">
                        CryptoTrade
                      </span>
                    </div>
                    <Button
                      variant="ghost"
                      className="p-2 text-slate-300 hover:bg-slate-700/50 hover:text-emerald-300"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <X className="h-6 w-6" />
                      <span className="sr-only">Close menu</span>
                    </Button>
                  </div>
                  
                  <nav className="flex-1 p-6 space-y-4">
                    {navItems.map((item) => (
                      <motion.div
                        key={item.id}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3 }}
                        className="relative"
                      >
                        <button
                          onClick={() => {
                            item.onClick();
                            setIsMobileMenuOpen(false);
                          }}
                          className={cn(
                            "w-full text-left px-4 py-3 text-base font-medium rounded-lg transition-colors duration-300 flex items-center justify-between",
                            activeLink === item.id
                              ? "text-emerald-300 bg-emerald-900/30"
                              : "text-slate-300 hover:bg-slate-800/50 hover:text-emerald-300"
                          )}
                        >
                          {item.name}
                          <ArrowUpRight className="h-4 w-4 opacity-70" />
                        </button>
                      </motion.div>
                    ))}
                    
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2, duration: 0.3 }}
                      className="pt-4"
                    >
                      <Button
                        onClick={() => {
                          scrollToSection('pricing');
                          setIsMobileMenuOpen(false);
                        }}
                        className="w-full py-6 text-base font-medium bg-gradient-to-r from-emerald-500 to-cyan-500 text-white rounded-xl shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/30"
                      >
                        Start Trading Now
                      </Button>
                    </motion.div>
                  </nav>
                  
                  <div className="p-6 border-t border-emerald-400/10 text-center">
                    <p className="text-sm text-emerald-400/80">
                      Trade with confidence on our secure platform
                    </p>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </nav>
      </div>
    </motion.header>
  );
};

// Spring animation configuration
const spring = {
  type: "spring",
  stiffness: 500,
  damping: 30,
  mass: 0.5
};

export default Navigation;
