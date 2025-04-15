/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  safelist: [
    'bg-yellow-glow',
    'bg-primary',
    'hover:bg-yellow-dark',
    'hover:bg-accent',
    'text-primary',
    'border-primary',
    'shadow-glow',
    'shadow-glow-lg',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FFB800', // Warm yellow
        secondary: '#FFD700', // Golden yellow
        accent: '#FFF1C1', // Light yellow glow
        'yellow-glow': '#FFFBEB', // Very light yellow for backgrounds
        'yellow-dark': '#CC9200', // Darker yellow for hover states
      },
      boxShadow: {
        glow: '0 0 15px rgba(255, 184, 0, 0.2)', // Yellow glow effect
        'glow-lg': '0 0 30px rgba(255, 184, 0, 0.25)', // Larger yellow glow
      },
    },
  },
  plugins: [],
} 