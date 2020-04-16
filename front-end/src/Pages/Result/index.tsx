//@ts-check
import React, { FC } from 'react'
import styled from 'styled-components'
import { Container } from '@material-ui/core'

const H1: FC = styled.h1`
	text-align: center;
`

const Result: FC = (): JSX.Element => {
	return (
		<Container>
			<H1>Result</H1>
		</Container>
	)
}

export default Result
