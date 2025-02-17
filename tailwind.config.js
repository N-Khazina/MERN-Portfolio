/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#212121",
        secondary: "#e5e7eb",
        tertiary: "#ff6f00",
      },
      screens: {
        sm: { max: "900px" }, 
        lg: { max: "2024px" },
      },
    },
  },
  plugins: [],
};

