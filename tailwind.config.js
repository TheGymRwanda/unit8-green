/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
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
