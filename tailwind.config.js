/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        saffron: {
          50: '#FFF8EA',
          100: '#FFF1D6',
          200: '#FFE4AD',
          300: '#FFD685',
          400: '#FFC85C',
          500: '#FF9933',  // Primary
          600: '#F17F1B',
          700: '#D66400',
          800: '#AC5000',
          900: '#7A3900',
        },
        gold: {
          50: '#FFFEF0',
          100: '#FFFCE0',
          200: '#FFF9C2',
          300: '#FFF6A3',
          400: '#FFF385',
          500: '#FFD700',  // Secondary
          600: '#E6C200',
          700: '#CCB100',
          800: '#b39700',
          900: '#807000',
        },
        maroon: {
          50: '#FCF2F2',
          100: '#F9E6E6',
          200: '#F3CECE',
          300: '#E9A5A5',
          400: '#D66D6D',
          500: '#B04040',
          600: '#9C2929',
          700: '#800000',  // Accent
          800: '#660000',
          900: '#520000',
        },
        cream: {
          50: '#FFFDF9',
          100: '#FFFAF0',
          200: '#FFF7E6',
          300: '#FFF2D9',
          400: '#FFEACC',
          500: '#FFE4BF',
          600: '#FFD499',
          700: '#FFC273',
          800: '#FFB14D',
          900: '#FFA026',
        },
      },
      fontFamily: {
        'heading': ['Cinzel Decorative', 'serif'],
        'body': ['Poppins', 'sans-serif'],
      },
      backgroundImage: {
        'pattern': "url('https://www.transparenttextures.com/patterns/asfalt-light.png')",
      },
    },
  },
  plugins: [],
};