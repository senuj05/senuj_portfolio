/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        accent: {
          yellow: '#FFD700',
          orange: '#FFA500',
        },
      },
      fontFamily: {
        'nanum-myeongjo': ['var(--font-nanum-myeongjo)', 'serif'],
        'fraunces': ['var(--font-fraunces)', 'serif'],
      },
    },
  },
  plugins: [],
}

