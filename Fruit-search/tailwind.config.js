// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        violetTheme: {
          900: '#653A64',
          700: '#81527A',
          500: '#996893',
          300: '#B489AC',
          100: '#D9BDBF',
        },
      },
    },
  },
  plugins: [],
}
