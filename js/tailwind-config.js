tailwind.config = {
  theme: {
    extend: {
      colors: {
        'navy': '#1a2332',
        'navy-light': '#2a3441',
        'accent': '#64ffda',
        'accent-hover': '#4fd1c7',
        'text-primary': '#e2e8f0',
        'text-secondary': '#94a3b8',
        'glass': 'rgba(255, 255, 255, 0.05)',
        'glass-border': 'rgba(255, 255, 255, 0.1)'
      },
      fontFamily: {
        'display': ['Inter', 'system-ui', 'sans-serif'],
        'mono': ['JetBrains Mono', 'monospace']
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'slide-up': 'slideUp 0.8s ease-out forwards',
        'fade-in': 'fadeIn 1s ease-out forwards',
        'scale-in': 'scaleIn 0.6s ease-out forwards'
      }
    }
  }
};
