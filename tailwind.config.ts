import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      container: {
        center: true,
        padding: "1rem", // Adjust as needed
      },
      fontFamily: {
        sans: ["Satoshi", "Work Sans", "sans-serif"],
        grotesk: ["Cabinet Grotesk", "sans-serif"],
        "Work Sans": ["Work Sans", "sans-serif"]
      },
    },
  },
  plugins: [],
} satisfies Config;
