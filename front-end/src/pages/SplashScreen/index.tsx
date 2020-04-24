//@ts-check
import React, { FC } from 'react'
import styled from 'styled-components'
import { Logo, Container } from '../../components'

const Wrapper: FC = styled(Container)`
	background-color: ${({ theme }) => theme.color.purple};
	flex: 1;
	width: 100%;
`

const Home: FC = (): JSX.Element => {
	return (
		<Wrapper>
			<Logo />
		</Wrapper>
	)
}

export default Home
