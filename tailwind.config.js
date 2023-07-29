/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    colors: {
      primary: 'var(--color-primary)',
      secondary: 'var(--color-secondary)',
      tertiary: 'var(--color-tertiary)',
      white: '#fff',
      transparent: 'var(--color-transparent)',
      danger: 'var(--color-danger)',
    },
  },
  plugins: [],
}

