/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme'
export default {
	darkMode:'class',
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily:{
				'sans':["Space Mono",...defaultTheme.fontFamily.sans],
			},			
			colors:{
				'primary':'#1B1B1B',
				'secondary':'#6CC6E5',
				'terciary':'#79D2CE',
				'quaternary':'#DAFFFB'
			},
		},
	},
	plugins: [],
}
