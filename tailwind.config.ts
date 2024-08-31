import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize: {
        s12: "12px",
        s13: "13px",
        s14: "14px",
        s15: "15px",
        s16: "16px",
        s17: "17px",
        s18: "18px",
        s19: "19px",
        s20: "20px",
      },
      fontWeight: {
        'w100' : '100',
        'w200' : '200',
        'w300' : '300',
        'w400' : '400',
        'w500' : '500',
        'w600' : '600',
        'w700' : '700',
        'w800' : '800',
        'w900' : '900',
      },
      backgroundImage: {
        'back-pattern': "url('/back-pattern.png')",
        'zarafe': "url('/zarafe.png')",
      }
    },
  },
  plugins: [],
};
export default config;
