
module.exports = {
  mode: 'jit',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {    
      fontFamily: {
        "Oswald": ["Oswald", 'sans-serif'], 
        "Roboto": ["Roboto", 'sans-serif'], 
      },
    },
  },
  plugins: [],
}
