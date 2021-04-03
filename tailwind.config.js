module.exports = {
  purge: {
    content: [
      "./public/**.html",
      "./**/**.php",
      "./**/**.vue",
    ],
    mode: 'all',
    enabled: true,
    preserveHtmlElements: false,
    options: {
      keyframes: true,
    },
  },
  darkMode: false,
  theme: {
    extend: {
    }
  },
  variants: {
    extend: {
    }
  },
  plugins: [
    // require('@tailwindcss/line-clamp'),
    // require('@tailwindcss/typography'),
    // require('@tailwindcss/forms'),
    // require('@tailwindcss/aspect-ratio'),
  ],
}
