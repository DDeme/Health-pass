import React from 'react'
import styled, { css } from 'styled-components'
import Container, { ContainerEnumType } from '../Container'

const Wrapper = styled(Container)<{ state: boolean }>`
	padding-top: 30px;
	flex: initial;

	&:after {
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
					background-color: ${({ theme }) => theme.color.red};
					&:after {
						background-color: ${({ theme }) => theme.color.red};
					}
			  `
			: css`
					background-color: ${({ theme }) => theme.color.green};
					&:after {
						background-color: ${({ theme }) => theme.color.green};
					}
			  `}
`

const StatusBar: any = props => (
	<Wrapper className={props.className} state={props.state} type={props.type || ContainerEnumType.COL}>
		{props.children}
	</Wrapper>
)

export default StatusBar
