/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // doesn't fully override
      colors: {
        "twitter-blue": "#1DA1F2",
        "task-blue": "#437EF7",
        "greyColor": "#5F6D7E",
        "lightBlue": "#F5FAFF",
        "borderLignt": "#EAEBF0",
        "background": "#2B63D9",
        "contactbg": " #151B28",
        "formbg": "#1C2534",
        "fieldbg": "#2C3444",
        "placeholderColor": "#A5ACBA"
      },

    },
  },
  plugins: [],
}

/*
 screens: {
        // "3xl": "1680px", //creates new and add custom
        // "md": "690px" // modify existing
      }

 screens: {
      // tablet: "690px", // overrides with complete new
    }
*/