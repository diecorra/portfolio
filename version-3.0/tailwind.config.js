/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        text: ['Poppins', 'sans-serif'],
      },
      colors: {
        primary: '#130F49',
        secondary: '#34a1cd',
      },
    },
  },
  plugins: [],
};
