import {heroui} from '@heroui/theme';
import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/components/(accordion|button|date-input|date-picker|input|select|divider|ripple|spinner|form|calendar|popover|listbox|scroll-shadow).js"
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
        "WorkSans": ["Work Sans", "sans-serif"]
      },
    },
  },
  plugins: [heroui()],
} satisfies Config;
