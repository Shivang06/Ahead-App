/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './sections/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // fontFamily:{
      //   sans: ['var(--font-inter)']
      //   // mono: ['var(--font-mono)'],
      // },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        transparent: 'transparent',
        bgPeach:"#FEF7F1",
        darkPeach:"#FAE8DC",
        borderGrey:"#F6F6F6",
        bgBlue:"#EEEBFE",
        bgMobile:"#DBD3F8"
      },
    },

  },
  plugins: [],
}