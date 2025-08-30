/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        carbon: "#0B0B0D",
        onyx: "#16181C",
        graphite: "#23262B",
        ember: "#FF6A00",
        phoenixGold: "#FFC24D",
        silver: "#A8B0B9"
      },
      fontFamily: {
        heading: ["'Bebas Neue'", "system-ui", "sans-serif"],
        body: ["Inter", "system-ui", "sans-serif"]
      },
      boxShadow: {
        glow: "0 0 20px rgba(255,106,0,0.35)"
      }
    },
  },
  plugins: [],
}
