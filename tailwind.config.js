/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#5B3A29',
        secondary: '#C89B63',
        accent: '#E3B04B',
        background: '#F5EBD9',
        surface: '#FFFFFF',
        textPrimary: '#2E1C13',
        textSecondary: '#6B4A3A',
        muted: '#9C7C6A',
        border: '#E0D3C2',
        success: '#7A9B76',
        warning: '#D8A24C',
      },
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        sans: ['Poppins', 'sans-serif'],
      },
      maxWidth: {
        container: '1200px',
      },
      borderRadius: {
        card: '14px',
        button: '30px',
      },
      boxShadow: {
        card: '0 10px 30px rgba(0,0,0,0.08)',
        soft: '0 4px 12px rgba(0,0,0,0.05)',
      },
    },
  },
  plugins: [],
}
