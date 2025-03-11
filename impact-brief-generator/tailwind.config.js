/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
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
        clay: {
          50: "#f9f9fb",
          100: "#f3f3f6",
          200: "#e7e7ed",
          300: "#d1d1dd",
          400: "#a9a9c2",
          500: "#8585a8",
          600: "#6b6b93",
          700: "#5a5a7b",
          800: "#494964",
          900: "#3d3d52",
          950: "#25252f",
        },
        notion: {
          50: "#fafafa",
          100: "#f5f5f5",
          200: "#e5e5e5",
          300: "#d4d4d4",
          400: "#a3a3a3",
          500: "#737373",
          600: "#525252",
          700: "#404040",
          800: "#262626",
          900: "#171717",
          950: "#0a0a0a",
        },
        vibrant: {
          purple: "#8A63D2",
          blue: "#3E92CC",
          teal: "#2EC4B6",
          green: "#29D884",
          yellow: "#FFD166",
          orange: "#FF9F1C",
          pink: "#FF5E7A",
          red: "#EF476F",
        },
        pastel: {
          purple: "#D4C1EC",
          blue: "#BDE0FE",
          teal: "#A8E6CF",
          green: "#B8F2E6",
          yellow: "#FEF9C7",
          orange: "#FFD8BE",
          pink: "#FFC8DD",
          red: "#FFAFCC",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
        "spin-slow": {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
        "gradient-shift": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        "fade-in": {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        "fade-up": {
          "0%": { opacity: 0, transform: "translateY(10px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        "pulse-soft": {
          "0%, 100%": { opacity: 1 },
          "50%": { opacity: 0.7 },
        },
        shimmer: {
          "0%": { backgroundPosition: "-1000px 0" },
          "100%": { backgroundPosition: "1000px 0" },
        },
        "bounce-light": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-5px)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "spin-slow": "spin-slow 3s linear infinite",
        "gradient-shift": "gradient-shift 10s ease infinite",
        "fade-in": "fade-in 0.5s ease-out",
        "fade-up": "fade-up 0.5s ease-out",
        "pulse-soft": "pulse-soft 2s ease-in-out infinite",
        shimmer: "shimmer 2s linear infinite",
        "bounce-light": "bounce-light 2s ease-in-out infinite",
        float: "float 3s ease-in-out infinite",
      },
      boxShadow: {
        clay: "0 2px 8px rgba(0, 0, 0, 0.05), 0 1px 2px rgba(0, 0, 0, 0.05)",
        "clay-hover": "0 4px 12px rgba(0, 0, 0, 0.08), 0 2px 4px rgba(0, 0, 0, 0.05)",
        notion: "0 1px 3px rgba(0, 0, 0, 0.05), 0 1px 2px rgba(0, 0, 0, 0.1)",
        "notion-hover": "0 4px 8px rgba(0, 0, 0, 0.08), 0 2px 4px rgba(0, 0, 0, 0.05)",
        colorful: "0 4px 12px rgba(138, 99, 210, 0.15)",
        "colorful-hover": "0 8px 16px rgba(138, 99, 210, 0.2)",
      },
      backgroundImage: {
        "gradient-clay": "linear-gradient(135deg, #f9f9fb 0%, #f3f3f6 100%)",
        "gradient-notion": "linear-gradient(to bottom, #ffffff, #f5f5f5)",
        "gradient-vibrant": "linear-gradient(135deg, #8A63D2 0%, #3E92CC 50%, #2EC4B6 100%)",
        "gradient-sunset": "linear-gradient(135deg, #FF5E7A 0%, #FF9F1C 100%)",
        "gradient-spring": "linear-gradient(135deg, #29D884 0%, #FFD166 100%)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}

