import {ThemePlugin} from "theme-plugin";
import type {Config} from "tailwindcss";
import animatePlugin from "tailwindcss-animate";

const config: Config = {
  darkMode: ["class"],
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  plugins: [animatePlugin, ThemePlugin],
};

export default config;
