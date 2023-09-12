/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/views/**/*.edge'],
  theme: {
    fontFamily: {
      // sans: ['Graphik', 'sans-serif'],
      // serif: ['Merriweather', 'serif'],
    },
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

