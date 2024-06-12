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
        "custom-gradient":
          "linear-gradient(to right, #C82090 50%, #6A14D1 50%)",
      },
      colors: {
        "b-pink": " #C82090",
        "b-darkPink": "#A01A73",
        "b-black": "#0B0B0B",
        "b-green": "#00BA72",
        "b-white": "#FAFAFA",
        "b-ash": "#484848",
        "b-grey": "#828282",
        "b-grey-2": "#F5F4F6",
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
        "b-dark-grey": "#828282",
        "b-light-grey": "#E7E7E7",
      },
      backgroundColor: {
        "bg-green-1": "#009E74",
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
