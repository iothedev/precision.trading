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
          1: '#070707',
          2: '#101010',
          3: '#080808',
          4: '#050505'
        },
        foreground: {
          1: '#fff',
          2: '#dff6e652'
        },
        border: {
          1: '#1C1C1C'
        }
      },
      boxShadow: {
        'inner': 'inset 0px 4px 4px 0px rgba(22, 28, 24, 0.4)',
      },
    },
  },
  plugins: [],
};
