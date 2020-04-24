import React from 'react'
import styled, { css } from 'styled-components'
import Icon from '../Icon'

const Wrapper: any = styled.div<{ state: boolean }>`
	position: relative;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100%;
	padding-top: 30px;

	&:after {
		box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
		position: absolute;
		content: '';
		border-radius: 50%;
		height: 50px;
		bottom: -25px;
		left: 0;
		right: 0;
		width: 100%;
		z-index: 0;
	}

	${({ state }) =>
		state
			? css`
					background-color: ${({ theme }) => theme.color.green};
					&:after {
						background-color: ${({ theme }) => theme.color.green};
					}
			  `
			: css`
					background-color: ${({ theme }) => theme.color.red};
					&:after {
						background-color: ${({ theme }) => theme.color.red};
					}
			  `}
`

const IconStatus = styled(Icon)`
	position: relative;
	z-index: 2;
	display: inline-block;
	height: 60px;
	width: 60px;
	color: ${({ theme }) => theme.color.white};

	&:before {
		color: ${({ theme }) => theme.color.white};
		font-size: 60px;
	}
`

const StatusBar: any = props => {
	return (
		<Wrapper className={props.className} state={props.state}>
			{props.children}
			<IconStatus name={props.state ? 'check' : 'close'} />
			{props.children}
		</Wrapper>
	)
}
export default StatusBar
