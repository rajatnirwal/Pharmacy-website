/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  plugins: [require("tailwind-scrollbar-hide")],

  theme: {
    extend: {
      colors: { "primary-color": "#1b5e20" },
    },
  },
  plugins: [],
};
