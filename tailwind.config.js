const colors = require('tailwindcss/colors')

delete colors?.lightBlue

module.exports = {
  purge: ['./src/**/*.{ts,tsx}', './src/pages/**/*.{ts,tsx}'],
  darkMode: false,
  mode: 'jit',
  theme: {
    colors: {
      // You may customize your own custom color here
      primary: '#236AF2',
      secondary: '#FB0046',
      ...colors
    },
    fontFamily: {
      display: ['Inter', 'sans-serif'],
      body: ['Inter', 'sans-serif']
    },
    extend: {
      backgroundImage: {
        'hero-background': "url('/assets/images/hero-background.png')",
        'formulir-background': "url('/assets/images/formulir-background.png')",
        'hero-desa': "url('/assets/images/bgdesa.png')",
        'info-desa': "url('/assets/images/bgdesa1.png')"
      }
    }
  },
  plugins: [require('tailwind-filter-utilities')]
}
