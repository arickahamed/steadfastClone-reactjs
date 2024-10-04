/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        customCyan: "rgb(0, 183, 149)",
        customWhite: "rgb(255, 255, 255)",
        customBlack: "rgb(23, 23, 23)",
        customBg: "#eff7fe",
      },
      fontFamily: {
        customPoppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
}

