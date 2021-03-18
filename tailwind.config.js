module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      animation:{
        'spin-slow':'spin 6s linear infinite',
        'side-spin':'side_spin 4s linear infinite',
        'ping-slow':'ping_slow 4s linear infinite'
      },
      keyframes: {
        side_spin:{
          '0%, 25%':{
              transform:'rotateY(40deg)'
          },
          '100%':{
            transform: 'rotateY(-40deg)'
          }
        },
        ping_slow:{
          '0%, 25%':{
            transform:'scale(1.10)'
          },
          '30%,70%':{
            transform:'scale(0.8)'
          },
          '100%':{
            transform:'scale(1)'
          }
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
