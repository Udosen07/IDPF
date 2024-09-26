/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Lato", "sans-serif"],
      },
      colors: {
        darkBgDefault: "#030712",
        darkBgSecondary: "#101725",
        darkBgExp: "#1F2937",
        darkBgExpSecondary: "#374151",
        textColor: "#D1D5DB",
      },
    },
  },
  plugins: [],
};
