import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      boxShadow: {
        warm: "0 12px 36px rgba(31,31,31,0.08)",
      },
    },
  },
} satisfies Config;
