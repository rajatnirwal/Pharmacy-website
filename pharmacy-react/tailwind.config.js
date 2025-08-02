/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],

  theme: {
    extend: {
      colors: {
        "primary-color": "#1b5e20",
        "secondary-color": "#4caf50",
      },
    },
  },

  plugins: [require("tailwind-scrollbar-hide")],
};
