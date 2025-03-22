/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        cinzel: ['Cinzel', 'serif'],
        cormorant: ['Cormorant Garamond', 'serif'],
      },
      colors: {
        'primary-bg': 'var(--primary-bg)',
        'secondary-bg': 'var(--secondary-bg)',
        'accent': 'var(--accent-color)',
      },
    },
  },
  plugins: [],
}