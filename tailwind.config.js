/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.{html,js}'],
  theme: {
    extend: {},
    screens: {
      'mobile': {'max' : '400px'},
      'sm': {'max' : '640px'},
      'md': {'max': '860px'},
      'tablet': {'max' :'1024px'},
      'xl': '1025px',
      '2xl': '1536px',
      'laptop': '700px',
    },  
  },
  plugins: [],
}

