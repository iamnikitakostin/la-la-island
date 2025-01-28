/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: '#1E2328',
        lightGray: '#3B3F46',
        orange: '#f5a201',
        lightYellow: '#FED053',
        darkYellow: '#f4b300',
        white: '#FFFFFF',
        green: '#74a065',
        crimson: '#DC143C'
      },
      fontFamily: {
        base: ['Antonio', 'sans-serif'],
        alt: ['Lora', 'sans-serif'],
      },
      keyframes: {
        fadeOutAnimation: {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
        slideBottom: {
          '0%': { transform: 'translateY(-25%)' },
          '100%': { transform: 'translateY(0)' },
        },
      },
      animation: {
        fadeOut: 'fadeOutAnimation 0.5s ease-in-out forwards',
        slideBottom: 'slideBottom 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both',
      },
      spacing: {
        sectionPadding: '4rem 6rem',
      },
    },
  },
  plugins: []
}