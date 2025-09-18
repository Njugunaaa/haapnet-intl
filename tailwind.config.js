/** @type {import('tailwindcss').Config} */
const defaultConfig = require("shadcn/ui/tailwind.config")

module.exports = {
  ...defaultConfig,
  content: ["./index.html", "./src/**/*.{js,jsx}", "*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    ...defaultConfig.theme,
    extend: {
      ...defaultConfig.theme.extend,
      colors: {
        ...defaultConfig.theme.extend.colors,
        primary: "#1E40AF",
        accent: "#DC2626",
        neutral: "#F8FAFF",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "Roboto", "sans-serif"],
      },
      maxWidth: {
        container: "1200px",
      },
      backgroundImage: {
        "nav-gradient": "linear-gradient(90deg, #DC2626 0%, #1E40AF 100%)",
        dotted: "radial-gradient(currentColor 1px, transparent 1px)",
      },
      backgroundSize: {
        dots: "20px 20px",
      },
    },
  },
  plugins: [...defaultConfig.plugins, require("tailwindcss-animate")],
}
