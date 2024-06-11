/** @type {import('tailwindcss').Config} */
// const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./containers/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./layouts/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // poppins: ["Poppins", "sans-serif"],
        // barlow: ["Barlow", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
      colors: {
        "b-red-1": " #9B0000",
        "b-red-2": "#C1272D",
        "b-teal-1": " #CAF0F8",
        "b-teal-2": "#EFFBFD",
        "b-blue-1": " #042341",
        "b-green-1": "#1BAA04",
        "b-green-2": "#0E8F1A",
        "b-black-1": "#181818",
        "b-ash-1": "#242424",
      },
      borderWidth: {
        1: "1px",
      },
      borderRadius: {
        4: "4px",
        10: "10px",
        15: "15px",
      },
      borderColor: {
        "b-error-5": "#F04438",
        "b-red-6": "#C1272D",
      },
      backgroundColor: {
        "bg-green-1": "#009E74",
        "bg-red-1": "#D83D3D",
        "bg-blue-1": "#042341",
        "bg-black-1": "#000000",
        "bg-ash-1": "#242424",
      },
      boxShadow: {
        "black-30": "0 2px 2px 0 rgba(0, 0, 0, 0.30)",
        "blue-50": "0 2px 2px 0 rgba(4, 35, 65, 0.50)",
      },
    },
    screens: {
      sm: "390px",
      mob: "620px",
      md: "850px",
      lg: "1024px",
      xl: "1271px",
      "2xl": "1600px",
    },
  },
};
