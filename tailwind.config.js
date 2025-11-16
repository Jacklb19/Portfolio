module.exports = {
  theme: {
    extend: {
      animation: {
        'fade-out': 'fadeOut 1s ease-out forwards',
      },
      keyframes: {
        fadeOut: {
          '0%': { opacity: '0.6', transform: 'scale(0)' },
          '50%': { opacity: '0.4', transform: 'scale(1)' },
          '100%': { opacity: '0', transform: 'scale(1.2)' },
        }
      }
    }
  }
}
