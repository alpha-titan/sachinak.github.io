module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundSize:{
        '300%':'300%'
      },
      animation:{
        'spin-slow':'spin 6s linear infinite',
        'side-spin':'side_spin 4s linear infinite',
        'ping-slow':'ping_slow 4s linear infinite',
        'gradient-animation':'gradient_animation 3s infinite alternate',
        'snake-run':"snake_run 2s infinite linear"
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
          '0%':{
            transform:'scale(1)'
          },
          '30%':{
            transform:'scale(1.2)'
          },
          '60%':{
            transform:'scale(1)'
          },
          '90%':{
            transform:'scale(0.8)'
          },
          '100%':{
            transform:'scale(1)'
          }
        },
        gradient_animation:{
          '0%':{
            backgroundPosition:'left',
          },
          '100%':{
            backgroundPosition:'right'
          }
        },
        snake_run:{
          '0%':{transform:"scale(0)"},
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
