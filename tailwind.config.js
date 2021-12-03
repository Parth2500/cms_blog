module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'regal-blue': '#14213d',
        'gold-orange': '#fca311',
        'platinum': '#E5E5E5'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
