import React from 'react'
import styled from 'styled-components'
import { Logo, Container } from '../../components'

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	justify-content: center;
	flex: 1;
	text-align: center;
`

const Heading = styled(Logo)`
	position: relative;
	z-index: 1;
	flex: 1;

	&:after {
		box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
		position: absolute;
		content: '';
		background: ${({ theme }) => theme.color.purple};
		border-radius: 50%;
		height: 50px;
		bottom: -25px;
		left: 0;
		right: 0;
		width: 100%;
		z-index: 1;
	}
`

const Navigation: any = props => (
	<Wrapper className={props.className}>
		<Heading />
		<Container>{props.children}</Container>
	</Wrapper>
)

export default Navigation
