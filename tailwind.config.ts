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
      'sideBar': "0 35px 60px -15px rgba(0,0,0.1)"
    },backgroundImage: {
      'hero': "url('/bg2.jpg')",
      'aboutUs': "url('/aboutUs-bg.png')",
      'featured': "url('/features-1.png')",
      'lineUp': "url('/texture-2.png')",
      'footer': "url('/footer-bg.jpg')",
      'contactUs': "url('/contactUs.png')",
      'productLineUp': "url('/productLineUp-bg.png')"
    }
  },
  plugins: [],
};
export default config;
