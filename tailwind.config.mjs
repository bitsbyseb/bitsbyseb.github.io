/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
export default {
	darkMode:'selector',
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				'sans': ["Space Mono", ...defaultTheme.fontFamily.sans],
			},
			colors: {
				'primary': '#1B1B1B',
				'secondary': '#6CC6E5',
				'terciary': '#79D2CE',
				'quaternary': '#DAFFFB'
			},
		},

	},
	plugins: [],
}
