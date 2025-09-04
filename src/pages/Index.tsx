
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
    <div className="min-h-screen bg-background text-foreground w-full overflow-x-hidden">
      <Navigation />
      
      {/* Hero Section - Modern Redesign */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-emerald-950"
      >
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-1/2 -left-1/4 w-[800px] h-[800px] bg-emerald-500/5 rounded-full blur-3xl animate-float-slow"></div>
          <div className="absolute top-1/4 -right-1/4 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-3xl animate-float-medium"></div>
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-gradient-to-t from-emerald-900/80 to-transparent"></div>
          
          {/* Grid Pattern */}
          <div className="absolute inset-0 opacity-20 [mask-image:radial-gradient(ellipse_at_center,transparent_10%,black)]">
            <div className="absolute inset-0 [background-image:linear-gradient(to_right,#4a4a4a_1px,transparent_1px),linear-gradient(to_bottom,#4a4a4a_1px,transparent_1px)] bg-[size:60px_60px]"></div>
          </div>
          
          {/* Animated Orbs */}
          <motion.div 
            className="absolute top-1/4 left-1/4 w-4 h-4 bg-emerald-400 rounded-full"
            animate={{
              y: [0, -30, 0],
              scale: [1, 1.2, 1],
              opacity: [0.7, 1, 0.7]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div 
            className="absolute top-2/3 right-1/3 w-3 h-3 bg-cyan-400 rounded-full"
            animate={{
              y: [0, -20, 0],
              scale: [1, 1.3, 1],
              opacity: [0.5, 0.9, 0.5]
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          />
        </div>
        
        {/* Content Container */}
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 sm:pt-24 lg:pt-32 pb-16 sm:pb-24 lg:pb-32 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-24 items-center min-h-[calc(100vh-5rem)]">
            
            {/* Left Column - Content */}
            <motion.div 
              className="text-center lg:text-left order-1 lg:order-1"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="inline-flex items-center px-4 py-2 rounded-full border border-emerald-400/20 bg-emerald-900/20 backdrop-blur-sm mb-8 group"
              >
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  className="mr-3"
                >
                  <div className="w-4 h-4 rounded-full bg-gradient-to-br from-emerald-400 to-cyan-400" />
                </motion.div>
                <span className="text-sm font-medium bg-gradient-to-r from-emerald-300 to-cyan-300 bg-clip-text text-transparent">
                  Professional Trading Platform
                </span>
                <motion.div 
                  className="ml-2 w-2 h-2 rounded-full bg-emerald-400"
                  animate={{ opacity: [0.6, 1, 0.6] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                />
              </motion.div>
              
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 sm:mb-8 tracking-tight leading-tight"
              >
                <motion.span 
                  className="block text-slate-200"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                >
                  Master the art of
                </motion.span>
                <motion.span 
                  className="block mt-2 md:mt-3 lg:mt-4 bg-gradient-to-r from-emerald-300 via-cyan-300 to-emerald-300 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0, backgroundPosition: '200% center' }}
                  transition={{ 
                    delay: 0.5, 
                    duration: 0.8,
                    backgroundPosition: { 
                      duration: 3,
                      repeat: Infinity,
                      repeatType: 'reverse',
                      ease: 'linear'
                    }
                  }}
                >
                  crypto trading
                </motion.span>
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="text-base sm:text-lg md:text-xl text-slate-300 mb-8 sm:mb-10 max-w-lg mx-auto lg:mx-0 leading-relaxed"
              >
                Advanced cryptocurrency trading platform with institutional-grade tools and real-time market analytics.{" "}
                <span className="text-emerald-300 font-medium">Start trading professionally today.</span>
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
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col sm:flex-row gap-4 sm:gap-5 justify-center lg:justify-start"
              >
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className="relative group"
                >
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-xl blur opacity-70 group-hover:opacity-100 transition duration-300 group-hover:duration-200"></div>
                  <Button 
                    size="lg" 
                    className="relative w-full sm:w-auto px-8 py-6 text-base font-medium bg-gradient-to-r from-emerald-600 to-cyan-600 text-white rounded-xl shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/30 transition-all duration-300"
                    onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    <span className="relative z-10 flex items-center">
                      Start Trading Now
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </Button>
                </motion.div>
                
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className="relative group"
                >
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="relative w-full sm:w-auto px-8 py-6 text-base font-medium border-emerald-400/30 text-emerald-100 hover:bg-emerald-900/30 hover:border-emerald-400/50 hover:text-white transition-all duration-300"
                    onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    <span className="relative z-10 flex items-center">
                      Explore Features
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </Button>
                </motion.div>
              </motion.div>
              
              {/* Stats Row */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="mt-12 sm:mt-16 pt-8 sm:pt-10 border-t border-emerald-400/10"
              >
                <div className="grid grid-cols-3 gap-6 sm:gap-8">
                  {[
                    { value: '500K+', label: 'Active Traders' },
                    { value: '$2.5B+', label: 'Volume Traded' },
                    { value: '99.9%', label: 'Uptime' }
                  ].map((stat, index) => (
                    <motion.div 
                      key={stat.label}
                      className="text-center lg:text-left"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.9 + (index * 0.1), duration: 0.6 }}
                    >
                      <div className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-emerald-300 to-cyan-300 bg-clip-text text-transparent">
                        {stat.value}
                      </div>
                      <div className="mt-1 text-sm sm:text-base text-slate-400">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
            
            {/* Visual Element - Shows on desktop only */}
            <motion.div 
              className="hidden lg:flex items-center justify-center relative order-2 lg:order-2"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="relative z-10 w-full max-w-xl"
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
                />
              </motion.div>
            </motion.div>
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
