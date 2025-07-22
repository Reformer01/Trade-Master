
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import { FeaturesSection } from "@/components/features/FeaturesSection";
import { PricingSection } from "@/components/pricing/PricingSection";
import LogoCarousel from "@/components/LogoCarousel";
import TestimonialsSection from "@/components/TestimonialsSection";
import Footer from "@/components/Footer";
import { CrystalAnimation } from "@/components/3d/CrystalAnimation";

import { images } from "@/config/images";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      {/* Hero Section - Redesigned for better responsiveness */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative min-h-screen flex items-center overflow-hidden"
        style={{
          backgroundImage: `url("${images.hero}")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-slate-800/60 to-emerald-900/80 backdrop-blur-sm" />
        
        {/* Background decoration */}
        <div className="absolute inset-0">
          <div className="absolute top-10 right-10 w-32 h-32 bg-emerald-500/10 rounded-full blur-xl"></div>
          <div className="absolute bottom-20 left-10 w-40 h-40 bg-blue-500/10 rounded-full blur-xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl"></div>
        </div>
        
        {/* Content Container */}
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 lg:pt-24 pb-12 sm:pb-16 lg:pb-20 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center min-h-[75vh] sm:min-h-[80vh]">
            
            {/* Left Column - Content */}
            <div className="text-center lg:text-left order-1 lg:order-1">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="inline-flex items-center px-4 py-2 rounded-full glass mb-6"
              >
                <img 
                  src="/logos/logoipsum-381.svg" 
                  alt="Feature Icon" 
                  className="w-4 h-4 mr-2"
                />
                <span className="text-sm font-medium text-emerald-200">
                  Professional Trading Platform
                </span>
              </motion.div>
              
              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-cinzel mb-4 sm:mb-6 tracking-tight leading-tight"
              >
                <span className="text-emerald-100 block">
                  Master the art of
                </span>
                <span className="text-gradient font-medium block mt-2">
                  crypto trading
                </span>
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="text-sm sm:text-base md:text-lg text-emerald-200 mb-6 sm:mb-8 max-w-full sm:max-w-lg lg:max-w-xl mx-auto lg:mx-0 font-serif leading-relaxed"
              >
                Advanced cryptocurrency trading platform with institutional-grade tools and real-time market analytics.{" "}
                <span className="text-emerald-100 font-medium">Start trading professionally today.</span>
              </motion.p>

              {/* Dashboard - Shows below text on mobile, hidden on desktop */}
              <div className="lg:hidden flex items-center justify-center relative mb-6 sm:mb-8">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  transition={{ delay: 0.6, duration: 1, ease: "easeOut" }}
                  className="relative w-full max-w-sm sm:max-w-md"
                >
                  {/* Trading interface mockup */}
                  <div className="w-full h-44 sm:h-48 md:h-64 bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-lg rounded-xl border border-emerald-400/20 p-3 sm:p-4 md:p-6 shadow-2xl">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-emerald-400 rounded-full"></div>
                        <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                        <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                      </div>
                      <span className="text-xs text-emerald-300">CryptoTrade Pro</span>
                    </div>
                    
                    {/* Mock chart */}
                    <div className="h-16 sm:h-20 md:h-32 bg-slate-800/50 rounded-lg mb-4 relative overflow-hidden">
                      <div className="absolute bottom-0 left-0 w-full h-full flex items-end justify-between px-2">
                        {[...Array(12)].map((_, i) => (
                          <div 
                            key={i} 
                            className="w-4 bg-gradient-to-t from-emerald-500 to-emerald-300 rounded-t-sm"
                            style={{ height: `${Math.random() * 80 + 20}%` }}
                          ></div>
                        ))}
                      </div>
                    </div>
                    
                    {/* Mock data */}
                    <div className="grid grid-cols-2 gap-4 text-xs">
                      <div>
                        <div className="text-emerald-300">BTC/USD</div>
                        <div className="text-emerald-100 font-bold">$45,234.56</div>
                      </div>
                      <div>
                        <div className="text-emerald-300">24h Change</div>
                        <div className="text-green-400 font-bold">+2.34%</div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Floating elements with animation restored */}
                  <motion.div
                    animate={{ y: [-10, 10, -10] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -top-4 -right-4 w-16 h-16 bg-emerald-500/20 rounded-full backdrop-blur-sm border border-emerald-400/30 flex items-center justify-center"
                  >
                    <span className="text-emerald-200 text-xs font-bold">+15%</span>
                  </motion.div>
                  
                  <motion.div
                    animate={{ y: [10, -10, 10] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="absolute -bottom-4 -left-4 w-12 h-12 bg-blue-500/20 rounded-full backdrop-blur-sm border border-blue-400/30"
                  ></motion.div>
                </motion.div>
              </div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.6 }}
                className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start"
              >
                <Button 
                  size="lg" 
                  className="button-gradient text-white border-emerald-400 border shadow-lg hover:scale-105 transition-transform"
                  onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Start Trading Now
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-emerald-400/50 text-emerald-200 hover:bg-emerald-400/10 hover:text-emerald-100"
                  onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  View Features <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </motion.div>
              
              {/* Stats Row */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.6 }}
                className="grid grid-cols-3 gap-3 sm:gap-4 mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-emerald-400/20"
              >
                <div className="text-center lg:text-left">
                  <div className="text-base sm:text-xl lg:text-2xl font-bold text-emerald-100">500K+</div>
                  <div className="text-xs sm:text-sm text-emerald-300">Active Traders</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-base sm:text-xl lg:text-2xl font-bold text-emerald-100">$2.5B+</div>
                  <div className="text-xs sm:text-sm text-emerald-300">Volume Traded</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-base sm:text-xl lg:text-2xl font-bold text-emerald-100">99.9%</div>
                  <div className="text-xs sm:text-sm text-emerald-300">Uptime</div>
                </div>
              </motion.div>
            </div>
            
            {/* Visual Element - Shows on desktop only */}
            <div className="hidden lg:flex items-center justify-center relative order-2 lg:order-2">
              <motion.div
                initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ delay: 0.6, duration: 1, ease: "easeOut" }}
                className="relative"
              >
                {/* Trading interface mockup */}
                <div className="w-full max-w-md h-48 sm:h-64 bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-lg rounded-xl border border-emerald-400/20 p-4 sm:p-6 shadow-2xl">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-emerald-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    </div>
                    <span className="text-xs text-emerald-300">CryptoTrade Pro</span>
                  </div>
                  
                  {/* Mock chart */}
                  <div className="h-20 sm:h-32 bg-slate-800/50 rounded-lg mb-4 relative overflow-hidden">
                    <div className="absolute bottom-0 left-0 w-full h-full flex items-end justify-between px-2">
                      {[...Array(12)].map((_, i) => (
                        <div 
                          key={i} 
                          className="w-4 bg-gradient-to-t from-emerald-500 to-emerald-300 rounded-t-sm"
                          style={{ height: `${Math.random() * 80 + 20}%` }}
                        ></div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Mock data */}
                  <div className="grid grid-cols-2 gap-4 text-xs">
                    <div>
                      <div className="text-emerald-300">BTC/USD</div>
                      <div className="text-emerald-100 font-bold">$45,234.56</div>
                    </div>
                    <div>
                      <div className="text-emerald-300">24h Change</div>
                      <div className="text-green-400 font-bold">+2.34%</div>
                    </div>
                  </div>
                </div>
                
                {/* Floating elements with animation restored */}
                <motion.div
                  animate={{ y: [-10, 10, -10] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-4 -right-4 w-16 h-16 bg-emerald-500/20 rounded-full backdrop-blur-sm border border-emerald-400/30 flex items-center justify-center"
                >
                  <span className="text-emerald-200 text-xs font-bold">+15%</span>
                </motion.div>
                
                <motion.div
                  animate={{ y: [10, -10, 10] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="absolute -bottom-4 -left-4 w-12 h-12 bg-blue-500/20 rounded-full backdrop-blur-sm border border-blue-400/30"
                ></motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Logo Carousel with hobbit hole background */}
      <div 
        className="relative"
        style={{
          backgroundImage: `url("${images.logoCarousel}")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-emerald-900/80 to-slate-800/90" />
        <div className="relative z-10">
          <LogoCarousel />
        </div>
      </div>

      {/* Features Section with Rivendell background */}
      <div 
        id="features" 
        className="relative"
        style={{
          backgroundImage: `url("${images.features}")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/85 via-emerald-900/75 to-slate-800/90" />
        <div className="relative z-10">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 text-center">
            <CrystalAnimation />
          </div>
          <FeaturesSection />
        </div>
      </div>

      {/* Pricing Section with concept art background */}
      <div 
        id="pricing" 
        className="relative"
        style={{
          backgroundImage: `url("${images.pricing}")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/95 via-slate-800/85 to-emerald-900/80" />
        <div className="relative z-10">
          <PricingSection />
        </div>
      </div>

      {/* Testimonials Section with Gandalf background */}
      <div 
        className="relative"
        style={{
          backgroundImage: `url("${images.testimonials}")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-emerald-900/75 to-slate-800/85" />
        <div className="relative z-10">
          <TestimonialsSection />
        </div>
      </div>

      {/* CTA Section with magical ring background */}
      <section 
        className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 relative"
        style={{
          backgroundImage: `url("${images.cta}")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-emerald-900/70 to-slate-800/85" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="backdrop-blur-lg border border-emerald-400/30 rounded-2xl p-6 sm:p-8 md:p-12 text-center relative z-10 max-w-4xl mx-auto"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-cinzel font-bold mb-4 text-emerald-100">
            Ready to claim your treasure?
          </h2>
          <p className="text-base sm:text-lg text-emerald-200 mb-6 sm:mb-8 max-w-2xl mx-auto font-serif">
            Join the fellowship of traders who have discovered the power of our enchanted platform.
          </p>
          <Button 
            size="lg" 
            className="button-gradient text-white border-emerald-400 border shadow-xl floating-animation w-full sm:w-auto"
            onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Start Trading Now
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </motion.div>
      </section>

      {/* Footer with creature background */}
      <div 
        className="relative"
        style={{
          backgroundImage: `url("${images.footer}")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/95 via-emerald-900/80 to-slate-800/90" />
        <div className="relative z-10">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Index;
