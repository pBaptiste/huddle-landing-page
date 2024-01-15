/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				'secondary': ['"Open Sans Variable"', 'sans-serif'],
			},
			colors: {
				'secondary' : '#684BB1',
				'hover' : '#E880E8',
				'accent' : '#FF52C1',
			},
			boxShadow: {
				'card' : '2px 4px 9px 3px rgba(0, 0, 0, 0.26)',
			},
			backgroundImage: {
				'mobile' : 'url(./src/images/bg-mobile.svg)',
				'desktop' : 'url(./src/images/bg-desktop.svg)',
			},
			container: {
				padding: {
				  DEFAULT: '2.25rem',
				  xl: '0',
				},
			},
		},
	},
	plugins: [],
}
