/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      width: {
        '128': '62.5rem', // 512px (32 * 16px)
      },
    },
  },
  plugins: [],
};