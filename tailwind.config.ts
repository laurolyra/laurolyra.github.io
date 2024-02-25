import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary-light': '#FEFAE0',
        'primary-dark': '#283618',
        'contrast-dark': '#606c38',
        'contrast-light': '#DDA15E',
        'borders-lines': '#BC6C25',
        'text-dark': '#FFFFFF',
        'text-light': '#000000',
      },
      opacity: {
        sixty: '.60', //example
      },
    },
  },
  plugins: [],
};
export default config;
