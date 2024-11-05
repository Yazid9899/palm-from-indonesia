import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        green:  {
          1: "#4baf47"
        },
        orange: {
          1: "#ff9100"
        }
      },
    },
    boxShadow: {

    },backgroundImage: {
      'hero': "url('/bg2.jpg')",
      'aboutUs': "url('/aboutUs-bg.png')",
      'featured': "url('/features-1.png')",
      'lineUp': "url('/texture-2.png')",
      'footer': "url('/footer-bg.jpg')"
    }
  },
  plugins: [],
};
export default config;
