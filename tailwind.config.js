/** @type {import('tailwindcss').Config} */
export default {
  // In Tailwind v4, content detection is automatic, 
  // but we can explicitly define it here for clarity.
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['"Lato"', 'sans-serif'],
      },
      colors: {
        gold: {
          500: '#FFD700',
          600: '#D4AF37',
        }
      }
    },
  },
  plugins: [],
}
