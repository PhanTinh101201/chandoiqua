module.exports = {
  important: true,
  content: ['./src/modules/**/*.{js,ts,jsx,tsx}', './src/common/**/*.{js,ts,jsx,tsx}'],
  media: false,
  theme: {
    extend: {
      colors: {
        primary: '#fc7679',
        'primary-strong': '#cb6669',
        'primary-strong-100': '#FE9699',
        'primary-light-100': '#FCEAEA',
        pink: {
          DEFAULT: '#FE9699',
        },
        gray: {
          DEFAULT: '#dddddd',
          darker: '#555555',
        },
        orange: {
          DEFAULT: '#FCAD0E',
        },
        black: {
          lighter: '#4D4D4D',
          'lighter-1': '#777777',
        },
      },
    },
    screens: {
      xl: { max: '1279px' },
      lg: { max: '1023px' },
      md: { max: '767px' },
      sm: { max: '639px' },
    },
  },
  corePlugins: {
    preflight: false,
  },
  mode: 'jit',
};
