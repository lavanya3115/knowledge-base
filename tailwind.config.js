import {nextui} from '@nextui-org/theme'

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    './src/layouts/**/*.{js,ts,jsx,tsx,mdx}',
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [nextui()],
}


// import { nextui } from '@nextui-org/theme';
// const withMT = require('@material-tailwind/react/utils/withMT');

// /** @type {import('tailwindcss').Config} */
// module.exports = withMT({
//   content: [
//     './index.html',
//     './src/layouts/**/*.{js,ts,jsx,tsx,mdx}',
//     './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
//     './src/components/**/*.{js,ts,jsx,tsx,mdx}',
//     './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
//     './node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}',
//     './node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}',
//   ],
//   theme: {
//     extend: {},
//   },
//   darkMode: 'class',
//   plugins: [nextui(), require('@tailwindcss/forms')],
// });
