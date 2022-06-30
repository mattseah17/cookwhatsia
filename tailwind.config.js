/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/components/*.{js,jsx}",
    "./src/App.js",
    "./public/index.html",
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ["Nunito"],
        body2: ["Italiana"]
      },
    },
  },
  plugins: [],
};
