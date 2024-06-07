/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#042954",

          "secondary": "#F000B8",

          "accent": "#051F3E",

          "neutral": "#B0A9A8",

          "base-100": "#F0F1F2",

          "info": "#3ABFF8",

          "success": "#36D399",

          "warning": "#FBBD23",

          "error": "#F87272",
        },
      },
      
    ],
  },
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      keyframes:{
          "color": {
            "0% " : {color: "#b38514"}
          }
      },
      animation:{
          "text-color" : 'color 1.5s ease-in-out infinite'
      }
    }
  },
  
  plugins: [require("daisyui")],
}

