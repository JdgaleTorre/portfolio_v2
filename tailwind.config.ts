import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      primary: {
        light: "#64CCC5",
        DEFAULT: "#64CCC5",
        dark: "#64CCC5",
      },
      secondary: {
        light: "#001C30",
        DEFAULT: "#001C30",
        dark: "#001C30",
      },
    },
  },
  plugins: [],
} satisfies Config;
