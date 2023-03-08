/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#4FAF43",
        secondary: "#222222",
      },
      container: {
        center: true,
        screens: {
          xl: "1200px",
        },
      },
      screens: {
        xs: "550px",
        xxs: "420px",
      },
    },
  },
  plugins: [],
};
