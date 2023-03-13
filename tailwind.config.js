/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [

    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

  ],
  theme: {

    fontSize: {

      xs: "0.75rem",
      sm: "0.875rem",
      tiny: "0.875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "5xl": "3rem",
    },
    
    extend: {

      fontFamily: {
        mainfont: ['"bebas-neue-pro"', 'sans-serif'],
        bitfont: ['"2bit"', 'sans-serif'],
        
      },

      colors: { 
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        tertiary: "var(--tertiary)",
        dark: "var(--dark)",
        light: "var(--light)",

      }
    },
  },
  plugins: [require("daisyui")],

  
};




