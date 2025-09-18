/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1E40AF", // Blue
        accent: "#DC2626",  // Red
        neutral: "#F8FAFF", // White-ish
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
  plugins: [require("tailwindcss-animate")],
}
