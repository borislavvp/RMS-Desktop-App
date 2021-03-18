const { fontFamily, spacing } = require("tailwindcss/defaultTheme");
module.exports = {
   purge: {
    // Uncomment for faster build time
    // enabled:true,
    enabled:
      process.env.NODE_ENV === "production",
    content: [
      "./src/**/*.pcss",
      "./src/**/*.css",
      "./src/**/*.sass",
      "./src/**/*.html",
      "./src/**/*.js",
      "./src/**/*.ts"
    ],
  },
  darkMode: 'class', // or 'media' or false
  theme: {
    extend: {
      maxHeight: {
        ...spacing
      },
      fontFamily: {
        sans: ["Open Sans", "Source Sans Pro", ...fontFamily.sans]
      },
      borderRadius: {
        '5xl':'5rem'
      }
    },
  },
  variants: {
    extend: {
      boxShadow: ["responsive", "hover", "focus", "group-hover"]
    },
  },
  plugins: [],
}
