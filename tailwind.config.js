export default {
  content: [
    "./index.html",
    "./js/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        gold: "#ffc430",
        "gold-light": "#ffb700",
        rose: "#fa7188",
        dark: "#000000",
      },
      keyframes: {
        slideInUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        pulseGold: {
          "0%, 100%": { color: "#ffc430" },
          "50%": { color: "#ffb700" },
        },
        cardHover: {
          "0%": { transform: "translateY(0) scale(1)" },
          "100%": { transform: "translateY(-8px) scale(1.05)" },
        },
      },
      animation: {
        "slide-in": "slideInUp 0.6s ease-out both",
        "fade-in": "fadeIn 1s ease-out both",
        "pulse-gold": "pulseGold 2s infinite",
        "card-hover": "cardHover 0.4s ease-out forwards",
      },
    },
  },
  plugins: [],
};
