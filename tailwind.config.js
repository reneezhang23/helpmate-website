module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "electric-violet": {
          50: "#DBB8FF",
          100: "#D1A3FF",
          200: "#BC7AFF",
          300: "#A852FF",
          400: "#9329FF",
          500: "#7F00FF",
          600: "#6300C7",
          700: "#47008F",
          800: "#2B0057",
          900: "#0F001F",
        },
      },
    },
    container: {
      padding: "2rem",
    },
  },
  plugins: [],
};
