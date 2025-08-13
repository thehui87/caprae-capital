// tailwind.config.js
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        mint: "rgb(var(--mint) / <alpha-value>)",
        beige: "rgb(var(--beige) / <alpha-value>)",
        navy: "rgb(var(--navy) / <alpha-value>)",
      },
      opacity: {
        50: "0.5",
      },
    },
  },
  plugins: [],
};
