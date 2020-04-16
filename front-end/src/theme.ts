//@ts-check
import { common } from '@material-ui/core/colors'
import {
	createMuiTheme,
	responsiveFontSizes,
	Theme,
} from '@material-ui/core/styles'

let theme: Theme = createMuiTheme({
	palette: {
		primary: {
			50: common.white, // white
			100: common.black, // black
			200: '#5CB85C', // green
			300: '#D9534F', // red
			400: '#0275D8', // blue
			500: '#6202EE', // purple
		},
	},
})

theme = responsiveFontSizes(theme)

export type ThemeI = typeof theme
export default theme
