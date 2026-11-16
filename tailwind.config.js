/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        'xs': '390px',
      },
      colors: {
        'primary': '#df6302',
        'secondary': '#FFFFFF'
      },
      fontFamily: {
        dmSans: "DM Sans, sans-serif !important",
        fontAwesome: "Font Awesome 6 Free",
        pacifico: "Pacifico, cursive",
      },
      backgroundImage: {
        card: "url(/images/card.png)",
        delivery: "url(/images/4.jpg)",
        gradient: "linear-gradient(rgb(0 0 0 / 50%),rgb(0 0 0 / 50%)), url(/assets/images/api.jpg)",
        // phone: "url(/images/background2.png)",
        phone: "url(/images/phone9.png)",
        phoneTwo: "url(/images/testimonials.png)",
        strip: "linear-gradient(rgb(38 25 51 / 60%),rgb(25 25 51 / 60%)),url(/images/6.jpg)",
        stripTwo: "linear-gradient(rgb(38 25 51 / 60%),rgb(25 25 51 / 60%)),url(/images/customer.jpg)",
        responsiveHero: "linear-gradient(rgb(38 25 51 / 60%),rgb(25 25 51 / 60%)),url(/images/res.png)",
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      keyframes: {
        blink: {
          "0%": {
            opacity: "1",
          },
          "50%": {
            opacity: "0",
          },
          "100%": {
            opacity: "1",
          },
        },
        bounce: {
          '0%': {transform: 'translateY(0)'},
          '50%': {transform: 'translateY(-20px)'},
          '100%': {transform: 'translateY(0)'},
        },
        gelatine: {
          "from, to": {transform: 'scale(1, 1)'},
          "25%": {transform: 'scale(0.9, 1.1)'},
          "50%": {transform: 'scale(1.1, 0.9)'},
          "75%": {transform: 'scale(0.95, 1.05)'}
        },
        bounceTwo: {
          "0%, 20%, 50%, 80%, 100%": {transform: 'translateY(0)'},
          "40%": {transform: 'translateY(-30px)'},
          "60%": {transform: 'translateY(-15px)'},
        }
      },
      animation: {
        blink: "blink 0.7s infinite",
        gelatine: "gelatine 0.5s infinite",
        bounceTwo: " bounceTwo 2s ease infinite",
        bounce: " bounce 1s ease-in infinite"
      },
    },
  },
  plugins: [],
};