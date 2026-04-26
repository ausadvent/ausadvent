import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
      '3xl': '1920px'
    },
    extend: {
      colors: {
        // Your existing colors
        primaryWhite: '#F9FAFB',
        secondaryWhite: '#E5E7EB',
        blueHigher: '#1E3A8A',
        // NEW brand-specific mindfulness palette
        brand: {
          primary: "#2563EB",     // Blue 600
          "primary-dark": "#1E40AF", // Blue 800
          "primary-soft": "#DBEAFE", // Blue 100
          secondary: "#F59E0B",   // Amber 500
          "secondary-soft": "#FEF3C7", // Amber 100
          text: "#374151",        // Grey 700
        },
      },
      backgroundImage: {
        "brand-flow": "linear-gradient(to right, #172554, #2563EB)",
        "brand-warmth": "linear-gradient(to right, #F59E0B, #FBBF24)",
      },
      keyframes: {
        'open-menu': { '0%': { transform: 'scaleY(0)' }, '100%': { transform: 'scaleY(1)' } },
        'open-services': { '0%': { transform: 'scaleY(0) scaleX(0)' }, '100%': { transform: 'scaleY(1) scaleX(1)' } },
      },
      animation: {
        'open-menu': 'open-menu 0.5s ease-in forwards',
        'close-menu': 'close-menu 0.5s ease-in-out forwards',
        'open-services': 'open-services 0.5s ease-in-out forwards',
        'close-services': 'close-services 0.5s ease-in-out forwards'
      },
    },
  },
  plugins: [],
}
export default config