/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				primary: '#99148C', //99148C d528bc #836393
				muted: '#888',
			},
			backgroundImage: {
			},
			fontFamily: {
				kodeBold: ['KodeBold', 'sans-serif'],
				kodeMedium: ['KodeMedium', 'sans-serif'],
				kodeRegular: ['KodeRegular', 'sans-serif'],
				kodeSemibold: ['KodeSemibold', 'sans-serif'],
				AlluraRegular: ['Allura', 'sans-serif'],
			  },
			maxWidth: {
				container: '1200px'
			}
		},
	},
	plugins: [],
}
