//@ts-check
import React, { useState } from 'react'
import styled, { css } from 'styled-components'
import { Link as LinkR } from 'react-router-dom'
import Icon from '../Icon'
import { routes } from '../../routes'

const Wrapper: any = styled.div`
	background-color: ${({ theme }) => theme.color.purple};
	cursor: pointer;
	user-select: none;
	width: 30px;
	height: 30px;
`

const List: any = styled.ul<{ active: boolean }>`
	display: flex;
	flex-direction: column;
	justify-content: stretch;
	align-items: stretch;
	background-color: ${({ theme }) => theme.color.purple};
	position: absolute;
	text-transform: capitalize;
	left: 0;
	top: 100%;
	max-width: 320px;
	width: 100%;
	transform: translateX(-100%);
	transition: all 0.5s;
	opacity: 0;
	z-index: 1;
	height: 100vh;
	overflow: auto;

	${({ active }) =>
		active &&
		css`
			opacity: 1;
			transform: translateX(0);
		`}
`

const Item = styled.li`
	padding: 1px 0;
`

const Split = styled.li`
	flex: 1;
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

const HamburgerMenu: any = props => {
	const [state, setState] = useState(props.initialState || false)

	return (
		<Wrapper active={state} className={props.className} hovering={props.hovering} onClick={() => setState(!state)}>
			<Icon name={props.visibleMenu ? 'bars' : 'arrow'} />
			<List active={state}>
				{routes.map((route, i) =>
					route.split ? (
						<Split key={i} />
					) : (
						route.visible && (
							<Item key={i}>
								{route.link ? <Link to={route.link}>{route.label}</Link> : <Title>{route.label}</Title>}
							</Item>
						)
					)
				)}
			</List>
		</Wrapper>
	)
}

export default HamburgerMenu
