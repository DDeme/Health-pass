//@ts-check
import React, { FC } from 'react'
import styled from 'styled-components'
import { Container } from 'react-bootstrap'

const H1: FC = styled.h1`
	text-align: center;
`

const Home: FC = (): JSX.Element => {
	return (
		<Container>
			<H1>Home</H1>
		</Container>
	)
}

export default Home
