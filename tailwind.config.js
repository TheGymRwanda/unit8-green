/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        dropdown: "dropdown 0.3s ease 0s 1 normal forwards",
      },
      boxShadow: {
        pictures: "-0.625rem -0.0313rem 5.625rem 0.4375rem rgba(0, 0, 0, 0.12)",
      },
      keyframes: {
        dropdown: {
          "0%": { transform: "translateY(-100px)" },
          "100%": {
            position: "relative",
            transform: "translateY(0px)",
          },
        },
      },
      screens: {
        large: "100rem",
        desktop: "90rem",
        tablet: "64rem",
        ipad: "52.125rem",
        mobile: "24.375rem",
      },

      colors: {
        purple: "#5602E0",
        secondary: {
          50: "#E4E4E4",
          100: "#9A9A9A",
        },
        gray:{
          50:"#EDEDED"
        }
      },
      fontSize:{
         2:"1.75rem"
      },
      fontFamily: {
        sans: ["Neufile Grotes", "arial"],
      },
      maxWidth: {
        18:"18.875rem",
        29:"29.8125rem",
        90: "90rem",
        '90%': "90%",
      },
      maxHeight:{
        25:'25.086875rem',
      },
      minWidth:{
        18:"18.875rem",
        29:"29.8125rem",
      },
      minHeight:{
        25:'25.086875rem',
        26:'25.625rem',
      },
      spacing:{
        2.3:"2.375rem",
        34: '8.625',
        33: '8.4375',
        35:'7.9375rem',
        29:"7.788125",

      },
      margin: {
        18: "4.4375rem",
      },
      padding: {
        4.5: "1.1219rem",
        5.5: "1.3256rem",
      },
      letterSpacing: {
        thin: "-0.015rem",
        thiner: "-0.0125rem",
      },
      gap: {
        13: "3.875rem",
        81: "20.75rem",
      },
      gridTemplateColumns: {
        k: "15.625rem_minmax(0,_1fr)",
      },
      width: {
        78: "19.375rem",
        90:"90rem",
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
};
