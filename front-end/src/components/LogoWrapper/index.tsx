import React from 'react'
import styled from 'styled-components'
import Logo from '../Logo'

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	justify-content: center;
	flex: 1;
	text-align: center;
	margin-top: 20px;
`

const Heading = styled(Logo)`
	position: relative;
	z-index: 1;
	flex: 1;

	&:after {
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

const LogoWrapper: any = props => (
	<Wrapper className={props.className}>
		<Heading />
		{props.children}
	</Wrapper>
)

export default LogoWrapper
