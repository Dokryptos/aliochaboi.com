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
        themeColor: {
          DEFAULT: "#92AE87",
        },
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      width: {
        tablet: "640px",
        laptop: "1024px",
        desktop: "1440px",
      },
      maxWidth: {
        tablet: "640px",
        laptop: "1024px",
        desktop: "1440px",
      },
      screens: {
        tablet: "640px",
        laptop: "1024px",
        desktop: "1440px",
        "pointer-fine": { raw: "(pointer: fine)" },
        "pointer-coarse": { raw: "(pointer: coarse)" },
      },
    },
  },
  plugins: [],
} satisfies Config;
