/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        moveRight: {
          '0%': { transform: 'translateX(0)', opacity: '1' },
          '100%': { transform: 'translateX(100vw)', opacity: '0' },
        },
        fadeTrail: {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
      },
      animation: {
        moveRight: 'moveRight 5s linear infinite',
        fadeTrail: 'fadeTrail 1.5s ease-out infinite',
      },
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
