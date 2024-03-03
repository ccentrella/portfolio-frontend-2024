import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{js,ts}[x]"],
  theme: {
    extend: {
      colors: {
        background: '#011C26',
        primary: '#024854'
      },
    },
    supports: {
      grid: 'display: grid',
    },
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
} satisfies Config;

