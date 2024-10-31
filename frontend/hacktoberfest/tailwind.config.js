/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'header-green': '#50DA4C',
        'header-yellow': '#DDBB8E',
        'background-black': '#1C1C1C',
        'light-text': '#D1E2E8',
        'pink-button-active': '#FF8BFF',
        'pink-button': '#C401C4',
        'yellow-text': '#F3F0E0',
      },
      fontFamily: {
        'spaceGrotesk': ['Space Grotesk', 'sans-serif']
      },
      backgroundImage: {
        'logo': 'url("./assets/Logo.png")',
        'headerBackground': 'url("./assets/Header-background.png")'
      }
    },
  },
  plugins: [],
}

