//@ts-check
import React, { FC } from 'react'
import './reset.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import { ThemeProvider, createGlobalStyle } from 'styled-components'
import theme, { ThemeI } from './theme'

const GlobalStyle = createGlobalStyle<{ theme: ThemeI }>`
  html, body, #root {
		font-family: ${({ theme }) => theme.fontFamily};
		height: 100%;
		background-color: ${({ theme }): string => theme.color.purple};
  }
`

const Styler: FC = (props): JSX.Element => (
	<ThemeProvider theme={theme}>
		<GlobalStyle />
		{props.children}
	</ThemeProvider>
)

export default Styler
