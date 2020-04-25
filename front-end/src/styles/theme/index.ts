//@ts-check
import process from 'process'

let theme = {
	mode: process.env.NODE_ENV,
	fontFamily: 'Arial, Helvetica, sans-serif',
	fontSize: '16px',
	color: {
		white: '#fff',
		black: '#000',
		lightblack: '#2A2C2E',
		purple: '#6202EE',
		green: '#5CB85C',
		red: '#D9534F',
		blue: '#0275D8',
	},
}

export type ThemeI = typeof theme
export default theme
