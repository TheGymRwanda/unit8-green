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
        secondary: {
          50: "#E4E4E4",
          100: "#9A9A9A",
        },
      },
     fontFamily: {
        'sans' : ['Neufile Grotes','arial'],
        
      },maxWidth: {
          '82': '82rem',
        },
    },
    letterSpacing: {
      thin: '-0.015em',
    }
  },
  plugins: [],
};
