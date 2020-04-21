//@ts-check
import React, { FC } from 'react'
import styled from 'styled-components'
import { Container } from 'react-bootstrap'

const Wrapper: FC = styled(Container)`
	display: flex;
	align-items: center;
	justify-content: center;
	height: 100%;
`

const H1: FC = styled.h1`
	color: ${({ theme }) => theme.color.white};
	text-align: center;
`

const Login: FC = (): JSX.Element => {
	return (
		<Wrapper>
			<H1>Login</H1>
		</Wrapper>
	)
}

export default Login
