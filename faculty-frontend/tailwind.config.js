const colors = {
  green: "#ADFFB0",
  yellow: "#FDFF85",
  red: "#FF9797",
  blue: "#D2D6DE",
  purple: "#E2A6FF",
  cyan: "#6CE5FF",
  background: "#FAFAFD",
  "gray-0": "#FFFFFF",
  "gray-10": "#ECEEF2",
  "gray-20": "#D2D6DE",
  "gray-30": "#A5ABB5",
  "gray-40": "#6C717A",
  "gray-60": "#4C4F56",
  "gray-70": "#303134",
  "gray-80": "#1E2023",
  "blue-10": "#ECEEF2",
  "blue-20": "#E8B6FF",
  "lightblue-10": "#A5ABB5",
  "lightblue-20": "#6C717A",
  "lightblue-30": "#DEE1FC",
  "lightblue-40": "#F4F6FF",
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    colors,
    extend: {},
  },
  plugins: [],
  safelist: [
    ...Object.keys(colors).map((x) => `text-${x}`),
    ...Object.keys(colors).map((x) => `bg-${x}`),
    //...Object.keys(colors).map(x => `border-${x}`),
  ],
};
