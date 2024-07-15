/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: {
          1: '#4DFF7E'
        },
        background: {
          1: '#000'
        },
        foreground: {
          1: '#fff',
          2: '#dff6e652'
        },
        border: {
          1: '#1C1C1C'
        }
      }
    },
  },
  plugins: [],
};
