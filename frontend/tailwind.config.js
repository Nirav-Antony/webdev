
/** @type {import('tailwindcss').Config} */
export default{
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        RageItalic: ['"Rage-Italic"'],
      },
    },
    container: {
      center: true, // This will center the container on the page
    },
  },
  plugins: [],
};