/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx', //arquivos que irao receber estilização
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: 'Inter, sans-serif',
      }
    },
  },
  plugins: [],
}
