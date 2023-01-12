/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        30: "7.5rem",
      },
      colors: {
        light: "#666666",
      },
      fontSize: {
        title: "31.25px",
        titleSm: "20px",
        button: "13.8px",
        small: "12.8px",
      },
      lineHeight: {
        button: "17.48px",
        large: "40.62px",
        mid: "26px",
        normal: "20.48px",
      },
      fontFamily: {
        title: ["ITCAvantGardePro"],
      },
    },
  },
  plugins: [],
};
