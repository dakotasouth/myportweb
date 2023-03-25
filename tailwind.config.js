/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#eeeeee',
        'secondary': '#bbbbbb',
        'tertiary': '#999999'
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif']
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: '#eeeeee',
            a: {
              color: '#eeeeee',
              '&:hover': {
                color: '#bbbbbb',
              },
            },
            h1: {
              color: '#eeeeee',
            },
            h2: {
              color: '#eeeeee',
            },
            h3: {
              color: '#eeeeee',
            },
          },
        },
      }), 
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
