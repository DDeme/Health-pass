//@ts-check
import React from 'react'
import styled from 'styled-components'
import { Logo, Container, ContainerEnumType } from '../../components'

const Wrapper: any = styled(Container)`
	background-color: ${({ theme }) => theme.color.purple};
`

const Home: any = (): JSX.Element => {
	return (
		<Wrapper type={ContainerEnumType.COL}>
			<Logo />
		</Wrapper>
	)
}

export default Home
