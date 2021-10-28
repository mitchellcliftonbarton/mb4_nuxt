module.exports = {
  purge: [
     './components/**/*.{vue,js}',
     './layouts/**/*.vue',
     './pages/**/*.vue',
     './plugins/**/*.{js,ts}',
     './nuxt.config.{js,ts}',
   ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      red: '#ff4646',
      grey: '#c4c4c4',
      white: '#fff',
      black: '#000',
      transparent: 'transparent'
    },
    fontFamily: {
      'bed-times': ['Bed Times', 'Times New Roman', 'serif']
    },
    fontSize: {
      base: ['1.8rem', '1.2']
    },
    flex: {
      '0-0': '0 0 auto',
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
  corePlugins: {
    container: false,
  }
}
