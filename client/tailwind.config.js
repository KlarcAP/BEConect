/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        darkBackground: "#1a202c",
        darkText: "#f7fafc",
        lightBackground: "#f3f4f6",
        lightText: "#1a202c",
      },
    },
  },
  plugins: [],
};
