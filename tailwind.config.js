/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  daisyui: {
    themes: [
      {
        weCareTheme: {
          primary: "#F74F22",
          secondary: "#222328",
          // accent: "#000000",
          accent: "#DD5E12",
          // neutral: "#000000",
          neutral: "#F74F22",
          // "base-100": "#ffff",
          "base-100": "#FFFFFF",

          "--color1": "#FFAC00",
          "--color2": "#FBF7F4",
          "--color3": "#233038",
        },
      },
    ],
  },

  plugins: [require("daisyui")],
};
