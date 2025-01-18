import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/hooks/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {

      charcoal: "#264653",
      persian: "#289D8f",
      yellow: "#E9C46A",
      orange: "#F4A261",
      red: "#E76F51",
      white: '#E0FBFC',
      green: '#37FFA8',
      teal: "#00ADB5",
      gray: "#EEEEEE",
      almostBlack: "#393E46",
      black: '#222831',
      transparent: 'transparent',
    },
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(circle, var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      screens: {
        'xs-h': { raw: '(max-height: 667px)' },
        '3xl': '1920px',
      },
    },
  },
  plugins: [],
}
export default config
