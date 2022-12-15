module.exports = {
  content: ["./pages/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {},
  },
  plugins: [
    require("prettier-plugin-tailwindcss"),
    require("tailwind-scrollbar-hide"),
  ],
};
