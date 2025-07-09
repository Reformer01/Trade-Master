
import { motion } from "framer-motion";

const LogoCarousel = () => {
  const logos = [
    "/images/1f747d7e-0025-4f65-b0dd-3264135dfbdf.png", // Advanced Trading Interface
    "/logos/logoipsum-381.svg", // Portfolio Management
    "/logos/logoipsum-custom-logo (2).svg", // Security & Verification
    "/logos/logoipsum-custom-logo (3).svg", // Performance Analytics
    "/logos/logoipsum-custom-logo (4).svg", // Partner logo 1
    "/logos/logoipsum-custom-logo (5).svg", // Partner logo 2
    "/logos/logoipsum-custom-logo (6).svg", // Partner logo 3
    "/logos/logoipsum-custom-logo (7).svg", // Partner logo 4
    "/logos/logoipsum-custom-logo.svg", // Partner logo 5
  ];

  const extendedLogos = [...logos, ...logos, ...logos];

  return (
    <div className="w-full overflow-hidden bg-background/50 backdrop-blur-sm py-12 mt-20">
      <motion.div 
        className="flex space-x-16"
        initial={{ opacity: 0, x: "0%" }}
        animate={{
          opacity: 1,
          x: "-50%"
        }}
        transition={{
          opacity: { duration: 0.5 },
          x: {
            duration: 15, // Reduced from 25 to 15 seconds
            repeat: Infinity,
            ease: "linear",
            delay: 0.5
          }
        }}
        style={{
          width: "fit-content",
          display: "flex",
          gap: "4rem"
        }}
      >
        {extendedLogos.map((logo, index) => (
          <motion.img
            key={`logo-${index}`}
            src={logo}
            alt={`Partner logo ${index + 1}`}
            className="h-8 object-contain"
            initial={{ opacity: 0.5 }}
            whileHover={{ 
              opacity: 1,
              scale: 1.05,
              transition: { duration: 0.2 }
            }}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default LogoCarousel;
