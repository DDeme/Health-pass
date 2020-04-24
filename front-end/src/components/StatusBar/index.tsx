import React from 'react'
import styled, { css } from 'styled-components'
import Icon from '../Icon'
import Container, { ContainerEnumType } from '../Container'

const Wrapper = styled(Container)<{ state: boolean }>`
	padding-top: 30px;
	flex: initial;

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
	height: 60px;
	width: 60px;

	&:before {
		font-size: 60px;
		height: 60px;
		width: 60px;
	}
`

const StatusBar: any = props => (
	<Wrapper
		className={props.className}
		state={props.state}
		type={props.type || ContainerEnumType.COL}>
		{props.children}
		<IconStatus name={props.state ? 'check' : 'close'} />
		{props.children}
	</Wrapper>
)

export default StatusBar
