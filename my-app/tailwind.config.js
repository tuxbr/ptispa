/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      
      fontFamily: {
        'netflix-sans': ['Netflix Sans', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
        'montserrat': ['Montserrat', 'sans-serif'],
      },
  
      fontFamily: {
        oswald: ['Oswald', 'sans-serif'],
      },
  
      borderRadius: {
        '2xl': '1rem',
      },
  
      fontSize: {
        'custom-title': '70px',
      },
  
      minWidth: {
        'title': '2rem',
        'descri': '1rem',
      },
    },
  },
  plugins: [],
};
