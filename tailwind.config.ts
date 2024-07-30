import type {Config} from "tailwindcss";
import animatePlugin from "tailwindcss-animate";
import {ThemePlugin} from "./plugins/tailwind";

const config: Omit<Config, "content"> = {
  plugins: [animatePlugin, ThemePlugin],
};

export default config;
