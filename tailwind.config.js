/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        headerFont: ["Playfair Display", "serif"],
        bodyFont: ["Montserrat", "sans-serif"],
      },
      colors: {
        primaryColor: "#627D7D",
        backgroundLight: "#F2ECE4",
        backgroundMedium: "#BDD4D4",
        lightText: "#fff",
        designColor: "#c4cfde",
        design2Color: "#955F27",
        titleColor: "#fff",
        title2Color: "#2E5252",
        title3Color: "#264241",
        varDark: "#2E5252",
        static: "#799392",
        hover: "#C1D1D0",
        buttonColor: "#F2ECE4",
        buttonHover: "#FFCBAA",
  

      },
      borderWidth: {
        outline: "1.5px",
      },
      styling: {
        margin: "0px",
      },
      backgroundImage: {
        "hero-image": "url('./waves.png')",
      },
    },
  },
  plugins: [],
};
