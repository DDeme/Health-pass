//@ts-check
import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom'
import * as serviceWorker from './serviceWorker'

import './css-reset.css'
import Layout from './components/Layout'

import { ThemeProvider, createGlobalStyle } from 'styled-components'
import theme, { ThemeI } from './theme'

import Translater from './i18n'

const GlobalStyle = createGlobalStyle<{ theme: ThemeI }>`
  html, body, #root {
		height: 100%;
		background-color: ${({ theme }): string => theme.color.purple};
  }
`

ReactDOM.render(
	<StrictMode>
		<ThemeProvider theme={theme}>
			<GlobalStyle />
			<Translater>
				<Layout />
			</Translater>
		</ThemeProvider>
	</StrictMode>,
	document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
