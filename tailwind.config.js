/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        slide: {
          "0%": { translate: "-30%" },
          "100%": { translate: "-50%" },
        },
      },
      animation: { slide: "slide 15s linear infinite" },
      screens: {
        xs: "425px",
      },
      colors: {
        "accent-1": "#312783",
        "accent-2": "#7D3089",
        "neutral-1": "#656565",
      },
      backgroundImage: {
        "gradient-1": "linear-gradient(180deg, #AE4A84 0%, #393185 100%)",
      },
    },
  },
  plugins: [],
};
