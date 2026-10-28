import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: { extend: { colors: {
    brand: { DEFAULT: "#8B5CF6", dark: "#6D28D9", deep: "#2E1065", lilac: "#C4B5FD" },
    bg: "#0B0912", card: "#15111F", ink: "#F5F3FF", muted: "#A8A3B8",
  } } },
  plugins: [],
};
export default config;
