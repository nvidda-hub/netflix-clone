module.exports = {
  content: ["./src/**/*.{js, jsx, html}"],
  theme: {
    extend: {
      colors: {
        'navbar': "linear-gradient(to top 0%, rgb(0, 0, 0, 0.3) 50%)",
      },
      height: (theme) => ({
        "90v": "90vh",
      }),
    },
  },
  plugins: [],
}