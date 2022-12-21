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
        pictures: "-0.001rem -0.001rem 1rem 0.0625rem #E4E4E4",
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
        51.5: "51.5rem",
      },
      minWidth: {
        47.4: "47.4769rem",
        21.8: "21.8125rem",
      },
      minHeight: {
        32.5: "32.5613rem",
        11.9: "11.9375rem",
      },
      spacing: {
        34: "8.5rem",
        31: "7.9375rem",
        26.5: "6.5888rem",
        27: "6.625rem",
        23: "5.7375rem",
        2.25: "0.5313rem",
        17.2: "4.1744rem",
        20.3: "5.3125rem",
        7.06: "2.0625rem",
        2.7: "0.725rem",
        97.9: "25.9831rem",
        2.55: "0.5581rem",
        3.8: "0.8013rem",
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
      fontSize: {
        "7.5xl": "5.375rem",
      },
      gap: {
        13: "3.875rem",
        81: "20.75rem",
        98: "25.75rem",
        25: "6.3125rem",
      },
      gridTemplateColumns: {
        k: "15.625rem_minmax(0,_1fr)",
      },
      width: {
        78: "19.375rem",
      },
    },
  },
  plugins: [],
};
