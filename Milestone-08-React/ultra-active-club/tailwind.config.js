/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#a854f7",

          secondary: "#c90adb",

          accent: "#fccdbf",

          neutral: "#2C252D",

          "base-100": "#ffffffff",

          info: "#A8BAE6",

          success: "#18CD9D",

          warning: "#F6A831",

          error: "#FB2723",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};

