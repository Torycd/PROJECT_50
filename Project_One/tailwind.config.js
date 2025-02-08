/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Serif: ["DM Serif Display"],
        Karla: ["Karla"],
      },
    },
  },
  plugins: [],
};
