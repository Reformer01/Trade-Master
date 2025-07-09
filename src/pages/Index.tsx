
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

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-foreground">
      <Navigation />
      
      {/* Hero Section with Shire background */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative container px-4 pt-40 pb-20 min-h-screen flex items-center"
        style={{
          backgroundImage: 'url("/lovable-uploads/e010f861-6384-4cb3-8fe7-fc751708e7fa.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="inline-block mb-4 px-4 py-1.5 rounded-full glass relative z-10"
        >
          <span className="text-sm font-medium text-amber-200">
            <Command className="w-4 h-4 inline-block mr-2" />
            Journey into Digital Trading
          </span>
        </motion.div>
        
        <div className="max-w-4xl relative z-10">
          <h1 className="text-5xl md:text-7xl font-serif mb-4 tracking-tight text-left">
            <span className="text-amber-100">
              <TextGenerateEffect words="Trade crypto with" />
            </span>
            <br />
            <span className="text-white font-medium">
              <TextGenerateEffect words="wisdom & courage" />
            </span>
          </h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-lg md:text-xl text-amber-200 mb-8 max-w-2xl text-left font-serif"
          >
            Embark on your cryptocurrency adventure with ancient wisdom and modern technology.{" "}
            <span className="text-white">Begin your quest today.</span>
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 items-start"
          >
            <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white border-amber-400 border">
              Begin Your Journey
            </Button>
            <Button size="lg" variant="link" className="text-amber-200 hover:text-white">
              Explore Realms <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </motion.div>
        </div>
      </motion.section>

      {/* Logo Carousel with hobbit hole background */}
      <div 
        className="relative"
        style={{
          backgroundImage: 'url("/lovable-uploads/177c7197-0b34-4e0b-95aa-8775ec677a72.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-emerald-900/80" />
        <div className="relative z-10">
          <LogoCarousel />
        </div>
      </div>

      {/* Features Section with Rivendell background */}
      <div 
        id="features" 
        className="relative"
        style={{
          backgroundImage: 'url("/lovable-uploads/f55465c6-d402-4363-85b9-30df198c9c22.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-emerald-950/85" />
        <div className="relative z-10">
          <FeaturesSection />
        </div>
      </div>

      {/* Pricing Section with concept art background */}
      <div 
        id="pricing" 
        className="relative"
        style={{
          backgroundImage: 'url("/lovable-uploads/68e26d92-dff3-4b67-ba3d-46e9d5db72f2.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-slate-900/90" />
        <div className="relative z-10">
          <PricingSection />
        </div>
      </div>

      {/* Testimonials Section with Gandalf background */}
      <div 
        className="relative"
        style={{
          backgroundImage: 'url("/lovable-uploads/1313e572-d902-4708-8db3-dfec29001e52.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-teal-900/85" />
        <div className="relative z-10">
          <TestimonialsSection />
        </div>
      </div>

      {/* CTA Section with magical ring background */}
      <section 
        className="container px-4 py-20 relative"
        style={{
          backgroundImage: 'url("/lovable-uploads/e8f0fee3-63d4-487c-8b37-bd1fa88575ec.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-amber-900/80" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-amber-950/90 backdrop-blur-lg border border-amber-400/30 rounded-2xl p-8 md:p-12 text-center relative z-10"
        >
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 text-amber-100">
            Ready to claim your treasure?
          </h2>
          <p className="text-lg text-amber-200 mb-8 max-w-2xl mx-auto font-serif">
            Join the fellowship of traders who have discovered the power of our enchanted platform.
          </p>
          <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white border-amber-400 border">
            Forge Your Account
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </motion.div>
      </section>

      {/* Footer with creature background */}
      <div 
        className="relative"
        style={{
          backgroundImage: 'url("/lovable-uploads/1f747d7e-0025-4f65-b0dd-3264135dfbdf.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-slate-900/90" />
        <div className="relative z-10">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Index;
