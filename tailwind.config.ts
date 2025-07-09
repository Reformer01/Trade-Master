
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sans: ['Geist', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
        cinzel: ['Cinzel', 'serif'],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // Middle-earth inspired palette
        shire: {
          50: "hsl(120, 60%, 95%)",
          100: "hsl(120, 55%, 90%)",
          200: "hsl(120, 50%, 80%)",
          300: "hsl(120, 45%, 70%)",
          400: "hsl(120, 40%, 60%)",
          500: "hsl(120, 35%, 50%)",
          600: "hsl(120, 30%, 40%)",
          700: "hsl(120, 25%, 30%)",
          800: "hsl(120, 20%, 20%)",
          900: "hsl(120, 15%, 10%)",
        },
        rivendell: {
          50: "hsl(210, 80%, 95%)",
          100: "hsl(210, 75%, 90%)",
          200: "hsl(210, 70%, 80%)",
          300: "hsl(210, 65%, 70%)",
          400: "hsl(210, 60%, 60%)",
          500: "hsl(210, 55%, 50%)",
          600: "hsl(210, 50%, 40%)",
          700: "hsl(210, 45%, 30%)",
          800: "hsl(210, 40%, 20%)",
          900: "hsl(210, 35%, 10%)",
        },
        mordor: {
          50: "hsl(0, 30%, 95%)",
          100: "hsl(0, 35%, 90%)",
          200: "hsl(0, 40%, 80%)",
          300: "hsl(0, 45%, 70%)",
          400: "hsl(0, 50%, 60%)",
          500: "hsl(0, 55%, 50%)",
          600: "hsl(0, 60%, 40%)",
          700: "hsl(0, 65%, 30%)",
          800: "hsl(0, 70%, 20%)",
          900: "hsl(0, 75%, 10%)",
        }
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' }
        },
        shimmer: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' }
        },
        glow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(34, 197, 94, 0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(34, 197, 94, 0.6)' }
        }
      },
      animation: {
        marquee: 'marquee 40s linear infinite',
        float: 'float 6s ease-in-out infinite',
        shimmer: 'shimmer 3s ease-in-out infinite',
        glow: 'glow 2s ease-in-out infinite'
      }
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
