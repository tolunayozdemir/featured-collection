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
        borderColor: "rgba(0,0,0, 40%)",
      },
      fontSize: {
        title: "31.25px",
        titleSm: "20px",
        small: "12.8px",
      },
      lineHeight: {
        button: "17.48px",
        large: "40.62px",
        mid: "26px",
        normal: "20.48px",
      },
      fontFamily: {
        title: ["'ITC Avant Garde Gothic Std', sans-serif"],
      },
    },
  },
  plugins: [],
};
