import React, { useState } from 'react'
import styled, { css } from 'styled-components'
import { Link as LinkR } from 'react-router-dom'
import Icon from '../Icon'

const Wrapper: any = styled.div`
	display: inline-block;
	background-color: ${({ theme }) => theme.color.purple};
	cursor: pointer;
	user-select: none;
	min-width: 30px;
	min-height: 30px;
`

const List: any = styled.ul<{ active: boolean }>`
	background-color: ${({ theme }) => theme.color.purple};
	position: absolute;
	text-transform: uppercase;
	left: 0;
	top: 100%;
	max-width: 320px;
	width: 100%;
	transform: translateX(-100%);
	transition: all 0.5s;
	opacity: 0;
	z-index: 1;

	${({ active }) =>
		active &&
		css`
			opacity: 1;
			transform: translateX(0);
		`}

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

const Item = styled.li`
	padding: 1px 0;
`

const Link = styled(LinkR)`
	position: relative;
	z-index: 3;
	color: ${({ theme }) => theme.color.white};
	display: block;
	padding: 15px 10px;
	font-size: 18px;
	text-decoration: none;

	&:hover {
		text-decoration: underline;
	}
`

const Title = styled.p`
	position: relative;
	z-index: 3;
	font-weight: bold;
	color: ${({ theme }) => theme.color.white};
	border: 1px solid ${({ theme }) => theme.color.white};
	border-width: 1px 0 0;
	padding: 15px 10px;
	font-size: 18px;
`

const Checkbox: any = styled(Icon)`
	display: inline-block;
	position: relative;
	z-index: 3;

	&:before {
		font-size: 22px;
		width: 24px;
		height: 24px;
		color: ${({ theme }) => theme.color.white};
		position: absolute;
		top: 50%;
		left: 50%;
		bottom: 0;
		right: 0;
		transform: translate(-50%, -50%);
	}
`

const HamburgerMenu: any = props => {
	const [state, setState] = useState(props.initialState || false)

	return (
		<Wrapper
			active={state}
			className={props.className}
			hovering={props.hovering}
			onClick={() => setState(!state)}>
			<Checkbox name={props.visibleMenu ? 'bars' : 'arrow'} />
			<List active={state}>
				<Item>
					<Title>Pages</Title>
				</Item>
				<Item>
					<Link to="/">Splash Screen</Link>
				</Item>
				<Item>
					<Link to="loading">Loading Screen</Link>
				</Item>
				<Item>
					<Link to="/home">Home</Link>
				</Item>
				<Item>
					<Link to="/login">Login</Link>
				</Item>
				<Item>
					<Link to="/verification">Verification</Link>
				</Item>
				<Item>
					<Link to="/results">Results</Link>
				</Item>
				<Item>
					<Title>Settings</Title>
				</Item>
				<Item>
					<Link to="/settings-icon">Icons</Link>
				</Item>
				{/* <Item>
						<Link to="/settings-theme">Theme</Link>
					</Item>
					<Item>
						<Link to="/settings-cssReset">Reset css</Link>
					</Item>
					<Item>
						<Link to="/settings-translation">Translation</Link>
					</Item> */}
			</List>
		</Wrapper>
	)
}

export default HamburgerMenu
