//@ts-check
import React, { FC } from 'react'
import styled from 'styled-components'
import { Container } from 'react-bootstrap'

const H1: FC = styled.h1`
	text-align: center;
`

const Login: FC = (): JSX.Element => {
	return (
		<Container>
			<H1>Login</H1>
		</Container>
	)
}

export default Login
