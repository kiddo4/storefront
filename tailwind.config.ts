import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        inter: ["Inter var"],
        "mon": ["Montserrat"],
        "mon-medium": ["MontserratMedium"],
        "mon-semibold": ["MontserratSemiBold"],
        "mon-bold": ["MontserratBold"],
        "space": ["SpaceMono"],
        "space-bold": ["SpaceMonoBold"],
        "arimo": ["Arimo"],
        "arimo-bold": ["ArimoBold"],
      },
    },
  },
  plugins: [require('tailwindcss-font-inter')],
}
export default config
