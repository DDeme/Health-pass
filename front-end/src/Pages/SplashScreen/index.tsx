//@ts-check
import React, { FC } from 'react'
import styled from 'styled-components'
import { Logo } from '../../components'

const Wrapper: FC = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	height: 100%;
`

const Home: FC = (): JSX.Element => {
	return (
		<Wrapper>
			<Logo />
		</Wrapper>
	)
}

export default Home
