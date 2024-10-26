/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryBlue: "#0D6EFD",
        backgroundWhite: "#FFFFFF",
        lightGrey: "#F8F9FA",
        darkGrey: "#495057",
      },
    },
  },
  plugins: [],
};
