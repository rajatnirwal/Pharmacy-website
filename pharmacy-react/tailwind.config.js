/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
<<<<<<< HEAD
  plugins: [require("tailwind-scrollbar-hide")],

=======
>>>>>>> abhi_branch
  theme: {
    extend: {
      colors: { "primary-color": "#1b5e20" },
    },
  },
<<<<<<< HEAD
  plugins: [],
=======
  plugins: [require("tailwind-scrollbar-hide")], // ✅ Keep only this
>>>>>>> abhi_branch
};
