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
      'text-white': '#FFFFFF',
      'secondary-300': '#A1C2CE',
      'secondary-500': '#A17C68',
      'secondary-700':'#826251',
      'secondary':'#666666',
      'tertiary': '#FFE8D1',
      'black':'#000000',
      'tertiary-light': '#FFF5EB',
      'text-tertiary':'#999999',
    },
    extend: {},
  },
  plugins: [],
  
}
