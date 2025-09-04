import { BarChart3, ShieldCheck, Wallet, ArrowUpDown } from "lucide-react";

export const features = [
  {
    title: "Advanced Trading Interface",
    description: "Professional-grade trading tools with real-time market data.",
    longDescription: "Experience lightning-fast order execution with our advanced trading interface. Access real-time market data, advanced charting tools, and technical indicators to make informed trading decisions. Our intuitive design makes complex trading strategies simple to execute.",
    icon: <BarChart3 className="w-5 h-5" />,
    image: "/images/1f747d7e-0025-4f65-b0dd-3264135dfbdf.png",
    ctaText: "Explore Trading Tools",
    ctaLink: "#trading",
    isNew: true
  },
  {
    title: "Portfolio Management",
    description: "Track and optimize your cryptocurrency portfolio in real-time.",
    longDescription: "Get a comprehensive view of your digital assets with our powerful portfolio management tools. Track your investments, monitor performance, and analyze your trading history across multiple exchanges. Set price alerts and get personalized insights to maximize your returns.",
    icon: <Wallet className="w-5 h-5" />,
    image: "/images/68e26d92-dff3-4b67-ba3d-46e9d5db72f2.png",
    ctaText: "View Portfolio Features",
    ctaLink: "#portfolio"
  },
  {
    title: "Security & Verification",
    description: "Enterprise-grade security to protect your assets and data.",
    longDescription: "Your security is our top priority. We implement industry-leading security measures including two-factor authentication, biometric login, and cold storage for digital assets. Our KYC/AML verification process ensures a safe trading environment for all users.",
    icon: <ShieldCheck className="w-5 h-5" />,
    image: "/images/177c7197-0b34-4e0b-95aa-8775ec677a72.png",
    ctaText: "Learn About Security",
    ctaLink: "#security"
  },
  {
    title: "Performance Analytics",
    description: "Advanced analytics to track and improve your trading performance.",
    longDescription: "Gain valuable insights into your trading performance with our advanced analytics dashboard. Track your win/loss ratio, average returns, and risk metrics. Our AI-powered tools help you identify patterns and optimize your trading strategy for better results.",
    icon: <ArrowUpDown className="w-5 h-5" />,
    image: "/images/e010f861-6384-4cb3-8fe7-fc751708e7fa.png",
    ctaText: "View Analytics",
    ctaLink: "#analytics",
    isNew: true
  }
];