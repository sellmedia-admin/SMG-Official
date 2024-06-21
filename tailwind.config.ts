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
          "linear-gradient(to right, #C82090 0%, #C82090 25%, #6A14D1 75%, #6A14D1 100%);",
        "darkCustom-gradient":
          "linear-gradient(to right, #b41d82 0%, #5f12bc 25%, #5f12bc 75%, #5f12bc 100%);",
        "hero-bg": "url(/imgs/hero-bg.png)",
        "home-bg": "url(/imgs/home-bg.png)",
        "mobile-bg": "url(/imgs/mobileHome-bg.png)",
        "aboutUs-bg": "url(/imgs/about-us-bg.png)",
      },

      colors: {
        "b-pink": "#C82090",
        "b-darkPink": "#A01A73",
        "b-black": "#0B0B0B",
        "b-green": "#00BA72",
        "b-white": "#FAFAFA",
        "b-ash": "#484848",
        "b-ash1": "#232323",
        "b-ash2": "#303030",
        "b-grey": "#828282",
        "b-grey-2": "#F5F4F6",
        "b-light-green": "#E6FDF4",
        "b-lightPink": "#FAE9F4",
        "b-pry-purple": "#F0E8FA",
      },
      borderWidth: {
        1: "1px",
      },
      borderRadius: {
        4: "4px",
        10: "10px",
        15: "15px",
        20: "20px",
      },
      borderColor: {
        "bd-ash": "#484848",
        "bd-grey-1": "#c3c3c3",
        "bd-dark-grey": "#828282",
        "bd-light-grey": "#E7E7E7",
      },
      backgroundColor: {
        "bg-green-1": "#009E74",
      },
      boxShadow: {
        "black-30": "0 2px 2px 0 rgba(0, 0, 0, 0.30)",
        "blue-50": "0 2px 2px 0 rgba(4, 35, 65, 0.50)",
        "pale-blue": "0px 16px 40px rgba(112, 144, 176, 0.2)",
        "dark-blue": "0 4px 20px  rgba(4, 60, 72, 0.08)",
      },
    },
    // screens: {
    //   sm: "390px",
    //   mob: "620px",
    //   md: "850px",
    //   lg: "1024px",
    //   xl: "1271px",
    //   "2xl": "1600px",
    // },
  },
};
