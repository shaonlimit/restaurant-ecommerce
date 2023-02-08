/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-color": "#F91944",
        "custom-blue": "#0000ff",
      },
      screens: {
        sm: "321px",
        md: "577px",
        lg: "769px",
        xl: "1025px",
      },
    },
  },
  plugins: [],
};
