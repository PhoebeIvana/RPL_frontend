/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'text-primary': '#222222',
      'text-secondary': '#666666',
      'secondary-300': '#A1C2CE',
      'secondary-500': '#A17C68',
      'tertiary': '#FFE8D1',
      'tertiary-light': '#FFF5EB',
    },
    extend: {},
  },
  plugins: [],
  
}
