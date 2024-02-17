import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{js,ts}[x]"],
  theme: {
    extend: {},
    supports: {
      grid: 'display: grid',
    },
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
} satisfies Config;

