import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        md: "2rem",
        lg: "4rem",
      },
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        primary: "#2E7D32",
        secondary: "#4CAF50",
        accent: "#8BC34A",
        earth: "#795548",
        background: "#F8FAF8",
        surface: "#FFFFFF",
        textPrimary: "#1E293B",
        textSecondary: "#64748B",
      },
      fontFamily: {
        heading: ["var(--font-plus-jakarta-sans)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
        accent: ["var(--font-playfair-display)", "serif"],
      },
      borderRadius: {
        xl: "24px",
        "2xl": "32px",
      },
      boxShadow: {
        soft: "0 10px 40px -10px rgba(0,0,0,0.08)",
        medium: "0 20px 40px -10px rgba(0,0,0,0.12)",
      },
      screens: {
        xs: "375px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1440px",
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "spin-slow": "spin 20s linear infinite",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
