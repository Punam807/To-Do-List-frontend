/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        priority: {
          low: '#22c55e',    // green
          medium: '#f59e0b', // orange
          high: '#ef4444',   // red
        }
      }
    },
  },
  plugins: [],
}
