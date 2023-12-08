/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        Strongcyan: "#26c0ab", //primarycolor
        lightGrayishCyan: "#c5e4e7",
        veryDarkCyan: "#00494d",
        Gray: "#808080",
        Darkgrayishcyan: "#5e7a7d",
        Grayish: "#7f9c9f",
        Verylightgrayishcyan: "#f4fafa",
        White: "#ffffff",
      },
      fontFamily: {
        mano: ["Space Mono", "monospace"],
      },
    },
  },
  plugins: [],
};
