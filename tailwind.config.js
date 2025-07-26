/** @type {import('tailwindcss').Config} */
export default {
  content: [
  "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
],
  theme: {
    extend: {
      colors: {
        background: "#0a0f1e",       // fondo general (más oscuro)
        backgroundAlt: "#111827",    // fondo secciones
        card: "#1f2937",             // tarjetas y bloques
        text: "#f1f5f9",             // texto principal
        textMuted: "#94a3b8",        // texto secundario
        primary: "#0284c7",          // azul moderno oscuro
        primaryHover: "#0ea5e9",     // celeste vibrante
      },
    },
  },
  plugins: [],
}

