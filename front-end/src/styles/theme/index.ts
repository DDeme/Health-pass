//@ts-check
import process from 'process'

let theme = {
	mode: process.env.NODE_ENV,
	fontFamily: 'Arial, Helvetica, sans-serif',
	color: {
		white: '#fff',
		black: '#000',
		green: '#5CB85C',
		red: '#D9534F',
		blue: '#0275D8',
		purple: '#6202EE',
	},
}

export type ThemeI = typeof theme
export default theme
