/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    maxWidth: {
      container: "1440px",
      contentContainer: "1140px",
      containerSmall: "1024px",
      containerxs: "768px",
    },
    extend: {
      screens: {
        xs: "320px",
        sm: "375px",
        sml: "500px",
        md: "667px",
        mdl: "768px",
        lg: "960px",
        lgl: "1024px",
        xl: "1280px",
      },
      fontFamily: {
        bodyFont: ["Montserrat", "sans-serif"],
        titleFont: ["Inter", "san-serif"],
      },
      boxShadow: {
        navbarShadow: "0 10px 30px -10px rgba(2,12,27,0.7)",
        projectShadow: "0px 3px 8px (0, 0, 0, 0.24)",
        glass: "0 8px 32px 0 rgba(0, 0, 0, 0.37)"
      },
      colors: {
        bodyColor: "#020617", // slate-950 (Vercel/Linear dark)
        bodyColorLight: "#0F172A", // slate-900
        textGreen: "#64ffda", 
        textLight: "#F8FAFC", // slate-50
        textDark: "#94A3B8", // slate-400
        hoverColor: "rgba(100,255,218,0.1)",
        card: "#0F172A", // slate-900
        cardHover: "#1E293B", // slate-800
        glassBg: "rgba(15, 23, 42, 0.7)", 
        glassBorder: "rgba(255, 255, 255, 0.05)"
      },
      animation: {
        'spin-slow': 'spin 8s linear infinite',
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
