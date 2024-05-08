// tailwind.config.js
module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        Urbanist: ["Urbanist", "sans-serif"],
      },
      fontSize: {
        "6xl": "64px",
      },
      colors: {
        green: "#127780",
        lightBlack: "#161616",
        greyScale: "#424242",
        yellow: "#FFD300",
        lightBlue: "#F6FAFD",
        darkPink: "#F75555",
        softPeach: "#EEEEEE",
        lavenderPeach: "#E0E0E0",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
