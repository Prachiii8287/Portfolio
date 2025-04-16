// tailwind.config.js
/** @type {import('tailwindcss').Config} */
// export default {
//     content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
//     theme: {
//       extend: {
//         keyframes: {
//           float: {
//             '0%, 100%': { transform: 'translateY(0) translateX(0)' },
//             '25%': { transform: 'translateY(-20px) translateX(10px)' },
//             '50%': { transform: 'translateY(-10px) translateX(-10px)' },
//             '75%': { transform: 'translateY(-30px) translateX(5px)' },
//           },
//         },
//         // animation: {
//         //   float: 'float 3s ease-in-out infinite',
//         //   'float-slow': 'float 6s ease-in-out infinite',
//         //   'float-fast': 'float 1.5s ease-in-out infinite',
//         // },
//         animation: {
//             float: 'float 10s ease-in-out infinite',
//             gradient: 'gradient 15s ease infinite',
//           },
//           backgroundSize: {
//             '400%': '400% 400%',
//           },
//       },
//     },
//     plugins: [],
//   };
  
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      keyframes: {
        float: {
          '0%': { transform: 'translate(0px, 0px) rotate(0deg)' },
          '25%': { transform: 'translate(20px, -30px) rotate(5deg)' },
          '50%': { transform: 'translate(-20px, -50px) rotate(-5deg)' },
          '75%': { transform: 'translate(-30px, -30px) rotate(3deg)' },
          '100%': { transform: 'translate(0px, 0px) rotate(0deg)' }
        }
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 8s ease-in-out infinite',
        'float-fast': 'float 4s ease-in-out infinite'
      }
    },
  },
  plugins: [],
};