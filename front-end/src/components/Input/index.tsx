//@ts-check
import React, { useState } from 'react'
import styled, { css } from 'styled-components'

const Wrapper = styled.div`
	position: relative;
	color: ${({ theme }) => theme.color.pruple};
	width: 100%;
	height: 50px;
`

const Title: any = styled.input<{ active: boolean; value: string }>`
	position: absolute;
	overflow: hidden;
	z-index: 1;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	width: 100%;
	padding: 15px 25px;
	font-size: 16px;
	background-color: ${({ theme }) => theme.color.white};
	color: ${({ theme }) => theme.color.black};
	border: 1px solid rgba(0, 0, 0, 0.5);
	border-radius: 4px;
	transition: all 0.2s;

	::placeholder {
		color: rgba(0, 0, 0, 0.5);
		opacity: ${({ value }) => value && !!value.length && 0};
		opacity: ${({ active }) => !active && 0};
	}

	${({ active }) =>
		active &&
		css`
			border-color: ${({ theme }) => theme.color.purple};
			outline: 0;
			border-width: 2px;
		`}

	&:focus {
		outline: 0;
	}

	&:hover {
		border-color: ${({ theme }) => theme.color.pruple};
	}
`

const Lable: any = styled.label<{ active: boolean }>`
	color: ${({ theme }) => theme.color.pruple};
	position: absolute;
	z-index: 3;
	background-color: ${({ theme }) => theme.color.white};
	top: 50%;
	left: 15px;
	padding: 5px;
	text-align: left;
	color: rgba(0, 0, 0, 0.5);
	transform: translateY(-50%);
	transition: all 0.2s;

	${({ active }) =>
		active &&
		css`
			width: auto;
			color: ${({ theme }) => theme.color.purple};
			transform: translate(-5px, -33px) scale(0.8);
			padding: 0 5px;
		`}
`

const Information: any = styled.span<{ valid: boolean }>`
	display: block;
	width: 100%;
	text-align: left;
	color: ${({ theme }) => theme.color.purple};
	padding: 5px 15px 0;
	font-size: 12px;

	${({ valid }) =>
		valid &&
		css`
			color: ${({ theme }) => theme.color.red};
		`}
`

type InputProps = {
	className: string
	type: string
	name?: string
	register?: string
	value?: string
	placeholder?: string
	error?: string
	info?: string
	label?: string
}

const Input: any = React.forwardRef(
	({ className, type, name, register, value, placeholder, error, info, label }: InputProps, ref) => {
		const [activeLabel, setActiveLabel] = useState(false)
		return (
			<>
				<Wrapper className={className}>
					<Title
						type={type}
						name={name}
						ref={register}
						active={activeLabel || (value && !!value.length)}
						id={name}
						placeholder={placeholder}
						onFocus={() => setActiveLabel(true)}
						onBlur={() => setActiveLabel(false)}
					/>
					<Lable active={activeLabel || (value && !!value.length)} htmlFor={name}>
						{label}
					</Lable>
				</Wrapper>
				<Information valid={error}>{error ? error : info}</Information>
			</>
		)
	}
)

export default Input
