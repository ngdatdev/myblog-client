import type { Config } from "tailwindcss";

export default {
  important: true,
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    boxShadow: {
      primary: "4px 8px 30px 0 #b1c4da59",
      secondary: " 0px 2px 8px 0px",
      third: "1px 1px 20px 0px #749dce4b",
      four: "1px 1px 20px 0px rgba(21, 222, 89, 0.5)"
    },

    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primaryPink: "#ec4899",
        primaryGreen: "#16f2b3",
        primaryPurple: "#0285c780",
        secondaryDark: "#0284C7",
        secondary: "#CFE9FA",
        secondaryLight: "#F7FCFE",
        secondaryLighter: "#F6F8FB",
      },
    },
  },
  plugins: [],
} satisfies Config;
