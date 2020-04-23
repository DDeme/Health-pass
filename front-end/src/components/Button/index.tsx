import React from 'react'
import styled, { css } from 'styled-components'

const Wrapper: any = styled.button<{ hovering: boolean }>`
	display: inline-block;
	text-transform: uppercase;
	cursor: pointer;
	max-width: 280px;
	width: 100%;
	padding: 15px 20px;
	text-align: center;
	background-color: ${({ theme }) => theme.color.purple};
	color: ${({ theme }) => theme.color.white};
	border: 2px solid ${({ theme }) => theme.color.purple};
	border-radius: 18px;
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
	text-align: center;

	${({ hovering }) =>
		hovering &&
		css`
			&:hover {
				background-color: ${({ theme }) => theme.color.white};
				color: ${({ theme }) => theme.color.purple};
			}

			&:focus {
				outline: 0;
			}
		`}
`

const Button = props => {
	return (
		<Wrapper {...props} hovering={props.hover || true}>
			{props.children}
		</Wrapper>
	)
}
export default Button
