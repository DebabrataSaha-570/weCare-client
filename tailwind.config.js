/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  daisyui: {
    themes: [
      {
        weEatTheme: {
          primary: "#F74F22",
          secondary: "#222328",
          accent: "#DD5E12",
          neutral: "#F74F22",

          "--color1": "#FFAC00",
          "--color2": "#FBF7F4",
        },
      },
    ],
  },

  plugins: [require("daisyui")],
};
