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
        show: "show 0.3s ease 0s 1 normal forwards",
      },
      boxShadow: {
        pictures: "-0.625rem -0.0313rem 5.625rem 0.4375rem rgba(0, 0, 0, 0.12)",
      },
      keyframes: {
        show: {
          "0%": { opacity: "1" },
          "100%": {
            opacity: "1",
          },
        },
        dropdown: {
          "0%": { transform: "translateY(-100px)" },
          "100%": {
            position: "relative",
            transform: "translateY(0px)",
          },
        },
      },
      screens: {
        desktop: "1440px",
        tablet: "1024px",
        ipad: "52.125rem",
        mobile: "24.375rem",
      },
      colors: {
        purple: "#5602E0",
        secondary: {
          50: "#E4E4E4",
          100: "#9A9A9A",
        },
      },
      fontFamily: {
        sans: ["Neufile Grotes", "arial"],
      },
      maxWidth: {
        90: "90rem",
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
      },
    },
  },
  plugins: [require("daisyui")],
  plugins: [],
};
