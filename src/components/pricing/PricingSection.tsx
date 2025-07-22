
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CardSpotlight } from "./CardSpotlight";
import { CoinAnimation } from "@/components/3d/CoinAnimation";

const PricingTier = ({
  name,
  price,
  description,
  features,
  isPopular,
  coinColor = "#FFD700"
}: {
  name: string;
  price: string;
  description: string;
  features: string[];
  isPopular?: boolean;
  coinColor?: string;
}) => (
  <CardSpotlight className={`h-full ${isPopular ? "border-emerald-400 shire-glow" : "border-emerald-600/30"} border-2 rivendell-shimmer`}>
    <div className="relative h-full p-6 flex flex-col">
      <CoinAnimation color={coinColor} />
      
      {isPopular && (
        <span className="text-xs font-medium bg-emerald-500/20 text-emerald-300 rounded-full px-3 py-1 w-fit mb-4 border border-emerald-400/30">
          Most Popular
        </span>
      )}
      <h3 className="text-xl font-cinzel font-medium mb-2 text-emerald-100">{name}</h3>
      <div className="mb-4">
        <span className="text-4xl font-bold text-emerald-200">{price}</span>
        {price !== "Custom" && <span className="text-emerald-400">/month</span>}
      </div>
      <p className="text-emerald-300 mb-6 font-serif">{description}</p>
      <ul className="space-y-3 mb-8 flex-grow">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center gap-2">
            <Check className="w-5 h-5 text-emerald-400" />
            <span className="text-sm text-emerald-200">{feature}</span>
          </li>
        ))}
      </ul>
      <Button className="button-gradient w-full text-white shadow-lg">
        Start Trading
      </Button>
    </div>
  </CardSpotlight>
);

export const PricingSection = () => {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
      <div className="max-w-2xl mx-auto text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-cinzel font-normal mb-6 text-emerald-100"
        >
          Choose Your{" "}
          <span className="text-gradient font-medium">Trading Plan</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="text-base sm:text-lg text-emerald-300 font-serif"
        >
          Select the perfect trading plan with advanced features and competitive fees
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
        <PricingTier
          name="Basic Trader"
          price="$0"
          description="Perfect for beginners starting their crypto journey"
          features={[
            "Basic spot trading",
            "Market & limit orders",
            "Basic market analysis",
            "Email support"
          ]}
          coinColor="#CD7F32"
        />
        <PricingTier
          name="Pro Trader"
          price="$29"
          description="Advanced features for serious traders"
          features={[
            "Advanced trading tools",
            "Margin trading up to 10x",
            "Advanced technical analysis",
            "Priority support",
            "API access"
          ]}
          isPopular
          coinColor="#FFD700"
        />
        <PricingTier
          name="Institutional"
          price="Custom"
          description="Enterprise-grade solutions for institutions"
          features={[
            "Custom trading solutions",
            "Unlimited trading volume",
            "OTC desk access",
            "Dedicated account manager",
            "Custom API integration",
            "24/7 priority support"
          ]}
          coinColor="#E5E7EB"
        />
      </div>
    </section>
  );
};
