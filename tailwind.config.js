// tailwind.config.js
module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        Urbanist: ["Urbanist", "sans-serif"],
      },
      colors: {
        green: "#127780",
        lightBlack: "#161616",
        greyscale: "#424242",
        yellow: "#FFD300",
        lightBlue: "#F6FAFD",
        darkPink: "#F75555",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
