export default {
    content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
    darkMode: "class",
    theme: {
      extend: {
        colors: {
          "surface-container-lowest": "#0e0e0f",
          "surface-container-high": "#2a2a2b",
          "on-surface": "#e5e2e3",
          "tertiary": "#ffffff",
          "surface-container-low": "#1c1b1c",
          "primary-container": "#c3f400",
          "on-surface-variant": "#c4c9ac",
          "secondary-container": "#00eefc",
          "surface-container": "#201f20",
          "surface-variant": "#353436",
          "surface": "#131314",
          "secondary-fixed-dim": "#00dbe9",
          "background": "#131314",
          "primary": "#ffffff",
          "surface-container-highest": "#353436",
          "on-background": "#e5e2e3",
          "on-primary-fixed": "#161e00",
          "surface-dim": "#131314"
        },
        borderRadius: {
          DEFAULT: "0.25rem",
          md: "0.375rem",
          lg: "0.5rem",
          xl: "0.75rem",
          full: "9999px"
        },
        spacing: {
          gutter: "24px"
        },
        fontFamily: {
          "body-base": ["Inter", "sans-serif"],
          "headline-md": ["Space Grotesk", "sans-serif"],
          "headline-lg": ["Space Grotesk", "sans-serif"],
          "display-xl": ["Space Grotesk", "sans-serif"],
          "technical-sm": ["Inter", "sans-serif"]
        }
      }
    },
    plugins: []
  };