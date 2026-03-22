module.exports = {
  plugins: {
    tailwindcss: {
      config: './tailwind.config.js',
    },
    autoprefixer: {
      overrideBrowserslist: [
        'last 4 versions',
        '> 1%',
        'not dead',
        'not IE 11',
      ],
    },
  },
}