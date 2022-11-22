/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        purple: "#5602E0",
        "dark-gray": "#9A9A9A",
        "light-gray": "#E4E4E4",
      },
      fontFamily: {
        sans: ["Neufile Grotes", "arial"],
      },
    },
  },
  plugins: [],
};
