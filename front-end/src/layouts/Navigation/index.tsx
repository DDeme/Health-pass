import React from 'react'
import { Link as LinkR } from 'react-router-dom'
import styled from 'styled-components'
import { Logo, Container as ContainerC, Icon } from '../../components'

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	justify-content: center;
	flex: 1;
	text-align: center;
`

const Heading = styled(Logo)`
	background-color: ${({ theme }) => theme.color.purple};
	position: relative;
	z-index: 1;

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
		z-index: 0;
	}
`

const Link = styled(LinkR)`
	position: absolute;
	left: 0;
	top: 0;
	bottom: 0;
	width: 70px;
	height: 100%;

	&:hover {
		background-color: ${({ theme }) => theme.color.purple};
	}
`

const IconArrow = styled(Icon)`
	height: 100%;
`

const Container = styled(ContainerC)`
	padding: 25px 0;
`

const Navigation: any = props => (
	<Wrapper className={props.className}>
		<Heading>
			<Link to="/home">
				<IconArrow name="arrow" />
			</Link>
		</Heading>
		<Container>{props.children}</Container>
	</Wrapper>
)

export default Navigation
