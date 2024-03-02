const colors = {
  green: "#ADFFB0",
  yellow: "#FDFF85",
  red: "#FF9797",
  blue: "#4D5EFF",
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
  "blue-10": "#2735BB",
  "blue-20": "#0D1877",
  "lightblue-10": "#8EA7FF",
  "lightblue-20": "#C5D5FF",
  "lightblue-30": "#E2E9FF",
  "lightblue-40": "#F4F6FF",
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    colors,
    fontSize: {
      /* 1rem = 16px */
      h1: [
        "60px",
        {
          lineHeight: "110%",
          letterSpacing: "0",
          fontWeight: "800",
        },
      ],
      h2: [
        "44px",
        {
          lineHeight: "100%",
          letterSpacing: "0",
          fontWeight: "700",
        },
      ],
      h3: [
        "36px",
        {
          lineHeight: "120%",
          letterSpacing: "0",
          fontWeight: "700",
        },
      ],
      h4: [
        "26px",
        {
          lineHeight: "130%",
          letterSpacing: "0",
          fontWeight: "600",
        },
      ],
      h5: [
        "22px",
        {
          lineHeight: "auto",
          letterSpacing: "0",
          fontWeight: "500",
        },
      ],
      body: [
        "20px",
        {
          lineHeight: "140%",
          letterSpacing: "0",
          fontWeight: "600",
        },
      ],
      secondary: [
        "1rem",
        {
          lineHeight: "150%",
          letterSpacing: "0",
          fontWeight: "500",
        },
      ],
      tags: [
        "1rem",
        {
          lineHeight: "150%",
          letterSpacing: "0",
          fontWeight: "600",
        },
      ],
      buttons: [
        "24px",
        {
          lineHeight: "130%",
          letterSpacing: "0",
          fontWeight: "600",
        },
      ],
      "text-buttons": [
        "20px",
        {
          lineHeight: "140%",
          letterSpacing: "0",
          fontWeight: "600",
        },
      ],
    },
    extend: {},
  },
  plugins: [],
  safelist: [
    ...Object.keys(colors).map((x) => `text-${x}`),
    ...Object.keys(colors).map((x) => `bg-${x}`),
    ...Object.keys(colors).map((x) => `border-${x}`),
  ],
};
