module.exports = {
  content: [
    './app/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './pages/**/*.{js,jsx}'
  ],
  theme: {
    extend: {
      colors: {
        brand: { DEFAULT: '#4f46e5', soft: '#eef2ff' },
        accent: '#10b981',
        warn: '#f59e0b'
      },
      boxShadow: {
        card: '0 4px 12px rgba(15, 23, 42, 0.04)'
      },
      borderRadius: {
        xl: '0.75rem',
        '2xl': '1rem'
      }
    }
  },
  plugins: []
}
