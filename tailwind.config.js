/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  daisyui: {
    themes: [
      {
        weCareTheme: {
          primary: "#F74F22",
          secondary: "#222328",
          accent: "#DD5E12",
          neutral: "#F74F22",
          "base-100": "#FFFFFF",

          "--color1": "#FFAC00", //yellow
          "--color2": "#FBF7F4", //light yellow
          "--color3": "#233038",
          "--color4": "#ffff", //white
          "--color5": "#9ca3af", //gray-400
          "--color6": "#6b7280", //gray-500
          "--color7": "#e5e7eb", //gray-200
          "--color8": "#000000", //black
          "--color9": "#d1d5db", //gray-300

          "--icon1_Highlight": "#FEEDE8", //we educate
          "--icon2_Highlight": "#e9cc8a2e", //we help
          "--icon3_Highlight": "#EAF8FC", //we build
          "--icon4_Highlight": "#EAFBF3", //we donate
          "--icon_Hover": "#ffff", //we donate

          "--card_background": "#ffff", //we donate
          "--filter_background": "#6b7280",
          "--thead": "#9ca3af",
          "--volunteer_form": "#FBF7F4",
          "--create_form": "#d1d5db",
        },
      },
      {
        halloween: {
          // ...require("daisyui/src/theming/themes")["[data-theme=halloween]"],
          ...require("daisyui/src/theming/themes")["halloween"],
          primary: "#F74F22",
          secondary: "#222831",
          accent: "#DD5E12",
          neutral: "#F74F22",
          "base-100": "#31363F",
          "--color1": "#FFAC00",
          "--color2": "#222831",
          "--color3": "#233038",
          "--color8": "#d1d5db",

          "--card_background": "#222831",
          "--icon1_Highlight": "#222831", //we educate
          "--icon2_Highlight": "#222831", //we help
          "--icon3_Highlight": "#222831", //we build
          "--icon4_Highlight": "#222831", //we donate

          "--icon_Hover": "#374151", //we donate
          "--filter_background": "#222831",
          "--thead": "#222831",
          "--volunteer_form": "#374151",
          "--create_form": "#374151",
        },
      },
    ],
  },

  plugins: [require("daisyui")],
};
