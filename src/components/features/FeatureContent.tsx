import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface FeatureContentProps {
  image: string;
  title: string;
  description?: string;
  ctaText?: string;
  ctaLink?: string;
  isNew?: boolean;
}

const FeatureContent = ({ 
  image, 
  title, 
  description, 
  ctaText = "Learn more",
  ctaLink = "#",
  isNew = false
}: FeatureContentProps) => {
  return (
    <div className="h-full flex flex-col">
      {/* Image container with glass effect */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="relative rounded-2xl overflow-hidden bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 flex-1 flex items-center justify-center p-6 sm:p-8"
      >
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-20 -right-20 w-40 h-40 bg-emerald-500/5 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-cyan-500/5 rounded-full blur-3xl"></div>
        </div>
        
        {/* Main image */}
        <motion.div 
          className="relative z-10 w-full h-full flex items-center justify-center"
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <img
            src={image}
            alt={title}
            className="w-full h-auto max-h-[400px] object-contain"
          />
        </motion.div>
        
        {/* New Feature Badge */}
        {isNew && (
          <motion.div 
            className="absolute -top-3 -right-3 w-16 h-16 bg-emerald-500/10 backdrop-blur-sm rounded-full border border-emerald-400/20 flex items-center justify-center text-emerald-300 text-xs font-medium"
            animate={{ 
              y: [0, -5, 0],
              rotate: [0, 5, -5, 0]
            }}
            transition={{ 
              duration: 6, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
          >
            <div className="absolute inset-0 rounded-full bg-emerald-500/10 animate-pulse"></div>
            <span className="relative z-10">New</span>
          </motion.div>
        )}
      </motion.div>
      
      {/* Content */}
      <div className="mt-6">
        <motion.h3 
          className="text-xl sm:text-2xl font-medium text-slate-100 mb-3"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          {title}
        </motion.h3>
        
        {description && (
          <motion.p 
            className="text-slate-400 mb-6 text-sm sm:text-base leading-relaxed"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            {description}
          </motion.p>
        )}
        
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <Button 
            variant="outline" 
            className="group border-emerald-400/20 text-emerald-300 hover:bg-emerald-500/10 hover:border-emerald-400/30 transition-colors"
            onClick={() => window.location.href = ctaLink}
          >
            {ctaText}
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default FeatureContent;