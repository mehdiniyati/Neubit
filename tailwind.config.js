const withMT = require("@material-tailwind/react/utils/withMT");

const { nextui } = require("@nextui-org/react");

module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      bor: "#00FFA3",
      greenText: "#00FFA3",
      buttongreen: "#00FFA3",
      dark: "#070707",
      green: "#00FFA3",
      gray: "#DCDCDC",
      bgButton: "#1a1b1b",
      dark2: "#13141A",
      dark3: "#18191F",
    },
  },
  darkMode: "class",
  plugins: [require("tailwindcss-animated"), nextui()],
});
