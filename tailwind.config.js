const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: ['./*.html'],
  theme: {
    screens:{
      sm:'480px',
      md:'768px',
      sm:'976px',
      sm:'1440px',
    },
    extend: {
       spacing:{
        '126': '30rem',
        '128': '32rem',
       },
       colors:{
         mainBackground:'#F7FAFF',
         primaryBlue:'#022B69',
         darkColor:'#011627',
         normalBlue:'#E2EEFF',
         lightBlue:'#9FC5FF',
         secondaryColor:'#00DBC5',
         lightGray:'#6C6C6C',
         anotherGray:'#F5F5F5'
       },
       fontFamily: {
        sans: ['Poppins', ...defaultTheme.fontFamily.sans]
       },
    },
  },
  plugins: [],
}
