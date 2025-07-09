
import { motion } from "framer-motion";
import { ArrowRight, Command } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import { FeaturesSection } from "@/components/features/FeaturesSection";
import { PricingSection } from "@/components/pricing/PricingSection";
import LogoCarousel from "@/components/LogoCarousel";
import TestimonialsSection from "@/components/TestimonialsSection";
import Footer from "@/components/Footer";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { RingAnimation } from "@/components/3d/RingAnimation";
import { CrystalAnimation } from "@/components/3d/CrystalAnimation";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      {/* Hero Section with Shire background */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative container px-4 pt-40 pb-20 min-h-screen flex items-center"
        style={{
          backgroundImage: 'url("/images/e010f861-6384-4cb3-8fe7-fc751708e7fa.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        {/* Enhanced overlay with Shire-like colors */}
        <div className="absolute inset-0 bg-gradient-to-br from-shire-900/80 via-shire-800/60 to-emerald-900/80 backdrop-blur-sm" />
        
        {/* 3D Ring Animation */}
        <RingAnimation />
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="inline-block mb-4 px-4 py-1.5 rounded-full glass shire-glow relative z-10"
        >
          <span className="text-sm font-medium text-emerald-200">
            <Command className="w-4 h-4 inline-block mr-2" />
            Journey into Digital Trading
          </span>
        </motion.div>
        
        <div className="max-w-4xl relative z-10">
          <h1 className="text-5xl md:text-7xl font-cinzel mb-4 tracking-tight text-left">
            <span className="text-emerald-100">
              <TextGenerateEffect words="Master the art of" />
            </span>
            <br />
            <span className="text-gradient font-medium">
              <TextGenerateEffect words="crypto trading" />
            </span>
          </h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-lg md:text-xl text-emerald-200 mb-8 max-w-2xl text-left font-serif"
          >
            Embark on your cryptocurrency adventure with ancient wisdom and modern technology.{" "}
            <span className="text-emerald-100 font-medium">Begin your quest today.</span>
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 items-start"
          >
            <Button size="lg" className="button-gradient text-white border-emerald-400 border shadow-lg shire-glow">
              Begin Your Journey
            </Button>
            <Button size="lg" variant="link" className="text-emerald-200 hover:text-emerald-100 floating-animation">
              Explore Realms <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </motion.div>
        </div>
      </motion.section>

      {/* Logo Carousel with hobbit hole background */}
      <div 
        className="relative"
        style={{
          backgroundImage: 'url("/images/177c7197-0b34-4e0b-95aa-8775ec677a72.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-shire-900/90 via-emerald-900/80 to-shire-800/90" />
        <div className="relative z-10">
          <LogoCarousel />
        </div>
      </div>

      {/* Features Section with Rivendell background */}
      <div 
        id="features" 
        className="relative"
        style={{
          backgroundImage: 'url("/images/f55465c6-d402-4363-85b9-30df198c9c22.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-rivendell-900/85 via-emerald-900/75 to-rivendell-800/90" />
        <div className="relative z-10">
          <div className="container px-4 py-12 text-center">
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
          backgroundImage: 'url("/images/68e26d92-dff3-4b67-ba3d-46e9d5db72f2.png")',
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
          backgroundImage: 'url("/images/1313e572-d902-4708-8db3-dfec29001e52.png")',
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
        className="container px-4 py-20 relative"
        style={{
          backgroundImage: 'url("/images/e8f0fee3-63d4-487c-8b37-bd1fa88575ec.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-mordor-900/80 via-emerald-900/70 to-mordor-800/85" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="rivendell-shimmer backdrop-blur-lg border border-emerald-400/30 rounded-2xl p-8 md:p-12 text-center relative z-10 shire-glow"
        >
          <h2 className="text-3xl md:text-4xl font-cinzel font-bold mb-4 text-emerald-100">
            Ready to claim your treasure?
          </h2>
          <p className="text-lg text-emerald-200 mb-8 max-w-2xl mx-auto font-serif">
            Join the fellowship of traders who have discovered the power of our enchanted platform.
          </p>
          <Button size="lg" className="button-gradient text-white border-emerald-400 border shadow-xl shire-glow floating-animation">
            Forge Your Account
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </motion.div>
      </section>

      {/* Footer with creature background */}
      <div 
        className="relative"
        style={{
          backgroundImage: 'url("/images/1f747d7e-0025-4f65-b0dd-3264135dfbdf.png")',
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
