/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      height: {
        'srceen-navbar-player': 'calc(100vh - 6rem - 6rem)'
      }
    },
  },
  plugins: [],
};
