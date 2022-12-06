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
      dark: '#232323',
      malvis: '#B81C26',
      malvisblue: '#232323',
      ...colors
    },
    fontFamily: {
      display: ['Inter', 'sans-serif'],
      body: ['Inter', 'sans-serif']
    },

    extend: {
      backgroundImage: {
        bglaw: "url('/assets/images/bglaw.png')",
        'malvis-about': "url('/assets/images/malvis-about.png')",
        'malvis-logo': "url('/assets/icons/malvis-logo.png')",
        'bg-owner': "url('/assets/images/bg-owner.png')",
        'bg-team': "url('/assets/images/bg-team.png')",
        'formulir-background': "url('/assets/images/formulir-background.png')",
        'hero-desa': "url('/assets/images/bgdesa.png')",
        'info-desa': "url('/assets/images/bgdesa1.png')"
      }
    }
  },
  plugins: [require('tailwind-filter-utilities')]
}
