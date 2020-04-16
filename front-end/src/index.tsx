//@ts-check
import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom'
import * as serviceWorker from './serviceWorker'

import './css-reset.css'
import Layout from './components/Layout'

import CssBaseline from '@material-ui/core/CssBaseline'
import {
	ThemeProvider as StyledThemeProvider,
	createGlobalStyle,
} from 'styled-components'
import { ThemeProvider as MaterialThemeProvider } from '@material-ui/core/styles'
import theme, { ThemeI } from './theme'

import Translater from './i18n'

const GlobalStyle = createGlobalStyle<{ theme: ThemeI }>`
  html, body, #root {
		height: 100%;
		background-color: ${({ theme }): string => theme.palette.primary[500]};
  }
`

ReactDOM.render(
	<StrictMode>
		<StyledThemeProvider theme={theme}>
			<MaterialThemeProvider theme={theme}>
				<GlobalStyle />
				<CssBaseline />
				<Translater>
					<Layout />
				</Translater>
			</MaterialThemeProvider>
		</StyledThemeProvider>
	</StrictMode>,
	document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
