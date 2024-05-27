import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{js,ts}[x]"],
  theme: {
    extend: {
      colors: {
        background: '#011C26',
        footer: '#04222f',
        primaryDark: '#052838',
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

