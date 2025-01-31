import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    boxShadow: {
      'custom-light': '0 0 10px #313131',
      'custom-dark': '5px 5px  10px #0a0c0e, -5px -5px 10px #14161c',
    },
    extend: {
      colors: {
        green: {
          DEFAULT: '#00f260',
        },
        dark: {
          DEFAULT: '#010101',
          50:  '#090a0c',  // Lightest dark shade (slightly lighter than 100)
          100: '#0a0b0e',  // Background variant
          200: '#16181d',  // Card background, Secondary backgrounds
          300: '#16181d',  // Borders, Muted text
          400: '#1b1d22',  // Slightly deeper shade for separation
          500: '#0f1115',  // Base theme color, buttons
          600: '#181a1f',  // Interactive elements, hover effects
          700: '#202125',  // Secondary text, deep UI elements
          800: '#25272c',  // Darker buttons, icons, navigation
          900: '#2a2c31',  // Darkest contrast
        },
      },
    },
  },
  variants: {
    extend: { baxShadow: ['dark'] },
  },
  plugins: [],
} satisfies Config;
