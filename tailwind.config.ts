import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // COLORI PER ILLUME
        'illume-mattone': '#642d3a',
        'illume-panna': '#ffefcc',
        
      },
    },
  },
  plugins: [],
};
export default config;

