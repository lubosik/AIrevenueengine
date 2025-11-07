/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-black': '#000000',
        'primary-purple': '#9333EA',
        'accent-purple-light': '#C084FC',
        'accent-purple-glow': '#7C3AED',
        'gray-text': '#9CA3AF',
        'dark-gray-bg': '#0F0F0F',
      },
      fontFamily: {
        'sans': ['Inter', 'sans-serif'],
        'heading': ['Poppins', 'Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

