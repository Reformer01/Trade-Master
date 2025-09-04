import { useState, useRef, Suspense, lazy } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FeatureTab } from "./FeatureTab";
import { features } from "@/config/features";
import { motion } from "framer-motion";

// Import FeatureContent directly instead of using lazy loading to prevent potential hydration issues
import FeatureContent from "./FeatureContent";

export const FeaturesSection = () => {
  const [activeTab, setActiveTab] = useState(features[0].title);
  const contentRef = useRef<HTMLDivElement>(null);

  const handleTabChange = (value: string) => {
    setActiveTab(value);
    // Smooth scroll to the top of the content when tab changes
    if (contentRef.current) {
      contentRef.current.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <section className="w-full py-16 sm:py-20 lg:py-24 relative">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Background Elements */}
      <div className="absolute -z-10 top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute -top-1/3 -left-1/4 w-[800px] h-[800px] bg-emerald-500/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 -right-1/4 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
      </div>
      
      {/* Header Section */}
      <div className="max-w-3xl mb-16 sm:mb-20 lg:mb-24 relative">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-block mb-3 px-4 py-1.5 text-xs font-medium bg-emerald-500/10 text-emerald-300 rounded-full border border-emerald-500/20"
        >
          Powerful Features
        </motion.div>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-4xl sm:text-5xl md:text-6xl font-cinzel font-normal mb-4 sm:mb-6 tracking-tight text-left leading-tight"
        >
          Advanced Trading
          <br />
          <span className="text-gradient font-medium">Features & Tools</span>
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-base sm:text-lg text-slate-300 text-left leading-relaxed max-w-2xl"
        >
          Experience professional-grade trading tools and features designed for both novice and experienced crypto traders.
        </motion.p>
      </div>

      <Tabs 
        value={activeTab} 
        onValueChange={handleTabChange}
        className="w-full relative"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-12">
          {/* Left side - Tab triggers */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-5 space-y-3 sm:space-y-4"
          >
            <TabsList className="flex flex-col w-full bg-slate-900/30 backdrop-blur-md border border-slate-800/50 rounded-2xl p-2 h-auto space-y-2 hidden lg:flex">
              {features.map((feature) => {
                const isActive = activeTab === feature.title;
                return (
                  <TabsTrigger
                    key={feature.title}
                    value={feature.title}
                    className={`w-full ${
                      isActive 
                        ? 'bg-slate-800/50 shadow-md border-slate-700/50 text-emerald-300' 
                        : 'hover:bg-slate-800/30 focus-visible:ring-2 focus-visible:ring-emerald-400/50 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 focus-visible:outline-none'
                    } transition-all duration-300 p-0 border-0 group`}
                    asChild
                  >
                    <div 
                      role="tab"
                      aria-selected={isActive}
                      aria-controls={`${feature.title.toLowerCase().replace(/\s+/g, '-')}-tab`}
                      id={`${feature.title.toLowerCase().replace(/\s+/g, '-')}-tab-trigger`}
                      tabIndex={isActive ? 0 : -1}
                      className="w-full h-full focus:outline-none"
                    >
                      <FeatureTab
                        title={feature.title}
                        description={feature.description}
                        icon={feature.icon}
                        isActive={isActive}
                      />
                    </div>
                  </TabsTrigger>
                );
              })}
            </TabsList>
          </motion.div>

          {/* Mobile Tabs - Horizontal Scrollable with Gradient Fade */}
          <div className="lg:hidden w-full -mx-4">
            {/* Scroll indicator */}
            <div className="text-center text-xs text-slate-400 mb-1 flex items-center justify-center">
              <span className="mr-1">←</span> Scroll to see more
            </div>
            <div className="overflow-x-auto pb-2 px-4 relative">
              {/* Gradient fade effect on the right side */}
              <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-slate-900 to-transparent z-10 pointer-events-none"></div>
              <div className="flex space-x-2 w-max min-w-full pr-8">
              {features.map((feature) => {
                const isActive = activeTab === feature.title;
                return (
                  <button
                    key={`mobile-${feature.title}`}
                    onClick={() => handleTabChange(feature.title)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-colors ${
                      isActive 
                        ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30' 
                        : 'bg-slate-800/30 text-slate-300 hover:bg-slate-700/50'
                    }`}
                    aria-selected={isActive}
                    aria-controls={`${feature.title.toLowerCase().replace(/\s+/g, '-')}-tab`}
                    id={`mobile-${feature.title.toLowerCase().replace(/\s+/g, '-')}-tab-trigger`}
                  >
                    {feature.title}
                  </button>
                );
              })}
              </div>
              {/* Gradient fade effect on the left side when scrolled */}
              <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-slate-900 to-transparent z-10 pointer-events-none opacity-0 transition-opacity duration-300" 
                   style={{ opacity: activeTab !== features[0].title ? 1 : 0 }}
              ></div>
              {/* Scroll indicator */}
              <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-slate-900 to-transparent z-10 pointer-events-none opacity-0 transition-opacity duration-300" 
                   style={{ opacity: activeTab !== features[features.length - 1].title ? 1 : 0 }}
              ></div>
            </div>
          </div>

          {/* Right side - Tab content with images */}
          <motion.div 
            ref={contentRef}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="lg:col-span-7 mt-6 lg:mt-0 overflow-y-auto max-h-[calc(100vh-200px)] pr-2"
          >
            {features.map((feature) => (
              <TabsContent
                key={feature.title}
                value={feature.title}
                id={`${feature.title.toLowerCase().replace(/\s+/g, '-')}-tab`}
                aria-labelledby={`${feature.title.toLowerCase().replace(/\s+/g, '-')}-tab-trigger`}
                role="tabpanel"
                className="mt-0 h-full relative group focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/50 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 rounded-lg"
                tabIndex={0}
              >
                <Suspense 
                  fallback={
                    <div className="h-64 flex items-center justify-center">
                      <div className="animate-pulse text-slate-400">Loading...</div>
                    </div>
                  }
                >
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                  >
                    <FeatureContent
                      title={feature.title}
                      description={feature.longDescription}
                      image={feature.image}
                      ctaText={feature.ctaText}
                      ctaLink={feature.ctaLink}
                      isNew={feature.isNew}
                    />
                  </motion.div>
                </Suspense>
              </TabsContent>
            ))}
          </motion.div>
        </div>
      </Tabs>
      </div>
    </section>
  );
};