/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Inter UI', 'sans-serif']
			},
			colors: {
				primary: '#FFFF66',
				secondary: '#6A02C4'
			}
		}
	},
	plugins: []
}
