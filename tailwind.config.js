module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    backgroundColor: (theme) => ({
      ...theme("colors"),
      primary: "#E10000",
      secondary: "#002672",
      danger: "#e3342f",
      ["primary-100"]: "#CCE2FF",
      ["primary-300"]: "#66A7FF",
      ["primary-500"]: "#006DFF",
      ["primary-600"]: "#0098D9",
      ["primary-700"]: "#0057CC",
      ["primary-900"]: "#004199",
      ["dark-50"]: "#E6E6E6",
      ["dark-100"]: "#666666",
      ["dark-300"]: "#4D4D4D",
      ["dark-500"]: "#333333",
      ["dark-600"]: "#33333380",
      ["dark-700"]: "#1A1A1A",
      ["dark-900"]: "#101113"
    }),
    textColor: (theme) => ({
      ...theme("colors"),
      primary: "#EB4337",
      secondary: "#153993",
      danger: "#e3342f",
      title: "#333",
      time: "#636F82",
      link: "#0098D9",
      basic: "#303B50",
      darker: "#091E42",
      lighter: "#636F82",
      ["primary-100"]: "#CCE2FF",
      ["primary-300"]: "#66A7FF",
      ["primary-500"]: "#006DFF",
      ["primary-700"]: "#0057CC",
      ["primary-900"]: "#004199",
      ["dark-100"]: "#E6E6E6",
      ["dark-300"]: "#CCCCCC",
      ["dark-500"]: "#B3B3B3",
      ["dark-700"]: "#999999",
      ["dark-800"]: "#1A1A1A",
      ["dark-900"]: "#808080",
      ["error-red-100"]: "#FF8086",
      ["error-red-300"]: "#FF464F",
      ["error-red-500"]: "#A1374C",
      ["error-warring-100"]: "#FFC195",
      ["error-warring-300"]: "#FF8A34",
      ["error-warring-500"]: "#B87236"
    }),
    borderColor: (theme) => ({
      ...theme("colors"),
      primary: "#dfe1e6",
      secondary: "#153993",
      danger: "#e3342f",
      ["dark-500"]: "#333333"
    }),
    screens: {
      xs: "475px",
      sm: "640px",
      md: "768px",
      ct: "992px",
      tb: "900px",
      lg: "1024px",
      xl: "1280px",
      ["2xl"]: "1400px",
      ["3xl"]: "1920px"
    }
  },
  variants: {
    extend: {}
  },
  plugins: [require("@tailwindcss/line-clamp")]
}
