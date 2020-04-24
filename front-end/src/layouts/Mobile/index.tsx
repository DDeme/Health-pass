import React from 'react'
import styled from 'styled-components'
import { Container as ContainerC, Menu } from '../../components'

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	flex: 1;
`

const Container = styled(ContainerC)`
	justify-content: flex-start;
	padding-top: 0;
`

const Mobile: any = props => (
	<Wrapper className={props.className}>
		<Menu />
		<Container>{props.children}</Container>
	</Wrapper>
)

export default Mobile
