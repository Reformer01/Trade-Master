import { motion } from "framer-motion";
import { ReactNode } from "react";

interface FeatureTabProps {
  icon: ReactNode;
  title: string;
  description: string;
  isActive: boolean;
}

export const FeatureTab = ({ icon, title, description, isActive }: FeatureTabProps) => {
  return (
    <motion.div 
      className={`
        w-full flex items-start gap-3 sm:gap-4 p-4 sm:p-5 rounded-xl
        transition-all duration-300 relative overflow-hidden
        ${isActive 
          ? 'bg-slate-800/50 backdrop-blur-md border border-slate-700/50 shadow-lg shadow-emerald-500/10' 
          : 'hover:bg-slate-800/30 hover:border-slate-700/30 border border-transparent'
        }
      `}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {isActive && (
        <motion.div
          layoutId="activeTab"
          className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 to-transparent"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
        />
      )}
      <div className="relative z-10 flex items-start gap-3 sm:gap-4 w-full min-w-0">
        <motion.div 
          className={`flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-lg ${
            isActive 
              ? 'bg-emerald-500/10 text-emerald-400' 
              : 'bg-slate-700/50 text-slate-400'
          }`}
          whileHover={{ rotate: 5, scale: 1.05 }}
          transition={{ duration: 0.2 }}
        >
          {icon}
        </motion.div>
        <div className="text-left min-w-0 flex-1">
          <motion.h3 
            className={`font-medium text-sm sm:text-base leading-tight mb-1 ${
              isActive ? 'text-emerald-300' : 'text-slate-200'
            }`}
            layoutId={`title-${title}`}
          >
            {title}
          </motion.h3>
          <motion.p 
            className="text-xs sm:text-sm text-slate-400 leading-relaxed break-words hyphens-auto"
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            {description}
          </motion.p>
        </div>
      </div>
    </motion.div>
  );
};