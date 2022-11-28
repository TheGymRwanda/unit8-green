/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        show: "show 4s ease 0.5s 1 normal forwards",
        underlay: "underlay 1s ease 0s 1 normal forwards",
      },
      keyframes: {
        show: {
          "0%": { opacity: "0" },
          "100%": {
            opacity: "1",
          },
        },
        underlay: {
          "0% ": {
            transform: "translateX(0)",
          },

          "100%": {
            transform: "translateX(6.25rem)",
          },
        },
      },
      boxShadow: {
        pictures: "-0.625rem -0.0313rem 5.625rem 0.4375rem rgba(0, 0, 0, 0.12)",
      },
      screens: {
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
      },
      fontFamily: {
        sans: ["Neufile Grotes", "arial"],
      },
      maxWidth: {
        90: "90rem",
      },
    },
    letterSpacing: {
      thin: "-0.015em",
      thiner: "-0.0125em",
    },
  },
  plugins: [],
};
