import type { Config } from 'tailwindcss'

const config: Config = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				'accent-pink': '#C47C90',
				'accent-pink-vivid': '#E75480',				
				'light-gray': '#f5f5f5',
				'medium-gray': '#e5e5e5',
			},
			backgroundImage: {
				'hero-bg': "url('../public/images/rosa-hero.png')",
			},
			fontFamily: {
				roboto: ['var(--font-roboto)', 'sans-serif'],
				spartan: ['var(--font-spartan)', 'sans-serif'],
				lora: ['var(--font-lora)', 'sans-serif'],
				inter: ['var(--font-inter)', 'sans-serif'],
			},
		},
	},
	plugins: [],
}
export default config
