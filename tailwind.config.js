const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      bor: "#00FFA3",
      greenText: "#00FFA3",
      buttongreen: "#00FFA3",
      dark: "#070707",
      green: "#00FFA3",
      gray: "#DCDCDC",
      bgButton: "#313334",
    },
  },
  plugins: [require("tailwindcss-animated")],
});
