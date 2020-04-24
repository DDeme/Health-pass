import React from 'react'
import styled from 'styled-components'
import { Container, Menu } from '../../components'

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	justify-content: center;
	flex: 1;
	text-align: center;
`

const Heading = styled(Menu)`
	background-color: ${({ theme }) => theme.color.purple};
	position: relative;
	z-index: 3;
	padding: 20px;
`

const Mobile: any = props => (
	<Wrapper className={props.className}>
		<Heading />
		<Container>{props.children}</Container>
	</Wrapper>
)

export default Mobile
