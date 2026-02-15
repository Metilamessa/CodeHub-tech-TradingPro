/** @type {import('tailwindcss').Config} */
const config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#f0b90b",
        "primary-hover": "#d9a50a",
        "background-dark": "#0b0e11",
        "card-dark": "#161a1e",
        "surface-dark": "#161A1E",
        "border-dark": "#2b3139",
        "text-primary": "#EAECEF",
        "text-secondary": "#848E9C",
        "legal-header": "#eaecef",
        "legal-body": "#848e9c",
        positive: "#0ecb81",
        negative: "#f6465d",
        "accent-blue": "#3b82f6",
        "accent-purple": "#a855f7"
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"]
      },
      borderRadius: {
        DEFAULT: "0.5rem",
        custom: "0.5rem"
      },
      boxShadow: {
        glass: "0 8px 32px 0 rgba(0, 0, 0, 0.37)",
        glow: "0 0 20px rgba(59, 130, 246, 0.15)",
        "gold-glow": "0 0 20px rgba(240, 185, 11, 0.15)"
      }
    }
  },
  plugins: []
};

export default config;


