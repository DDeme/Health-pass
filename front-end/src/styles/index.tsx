//@ts-check
import React, { FC } from 'react'
import './reset.css'

import { ThemeProvider, createGlobalStyle } from 'styled-components'
import theme, { ThemeI } from './theme'

const GlobalStyle = createGlobalStyle<{ theme: ThemeI }>`
  html, body, #root {
		font-family: ${({ theme }) => theme.fontFamily};
		font-size: ${({ theme }) => theme.fontSize};
		height: 100%;
	}

	#root {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	
	* {
		box-sizing: border-box;
	}
`

const Styler: FC = (props): JSX.Element => (
	<ThemeProvider theme={theme}>
		<GlobalStyle />
		{props.children}
	</ThemeProvider>
)

export default Styler
