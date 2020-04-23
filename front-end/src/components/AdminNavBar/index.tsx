import React, { useState } from 'react'
import styled from 'styled-components'
import { Link as LinkR } from 'react-router-dom'
import Button from '../Button'

const Wrapper = styled.div`
	background-color: ${({ theme }) => theme.color.purple};
	color: ${({ theme }) => theme.color.white};
	display: inline-block;
	position: fixed;
	left: 0;
	top: 0;
	overflow: hidden;
	z-index: 1000;
`

const Btn = styled(Button)`
	font-size: 14px;
	border-radius: 0;
`

const List = styled.ul`
	font-size: 14px;
`

const Item = styled.li`
	padding: 1px 0;
`

const Link = styled(LinkR)`
	display: block;
	color: inherit;
	text-decoration: none;
	padding: 5px 10px;
	font-size: inherit;

	&:hover {
		background-color: ${({ theme }) => theme.color.white};
		color: ${({ theme }) => theme.color.purple};
	}
`

const Title = styled.p`
	font-weight: bold;
	border: 1px solid ${({ theme }) => theme.color.white};
	border-width: 1px 0;
	padding: 5px;
`

const AdminNavBar: any = props => {
	const [show, setShow] = useState(false)

	return (
		<Wrapper className={props.className}>
			<Btn onClick={() => setShow(!show)}>{show ? 'close' : 'admin menu'}</Btn>
			{show && (
				<List>
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
						<Title>Settings</Title>{' '}
					</Item>
					<Item>
						<Link to="/settings-icon">Icons</Link>
					</Item>
					{/* 
				<Item><Link to="/settings-theme">Theme</Link></Item>
				<Item><Link to="/settings-cssReset">Reset css</Link></Item>
				<Item><Link to="/settings-translation">Translation</Link></Item>
			*/}
				</List>
			)}
		</Wrapper>
	)
}

export default AdminNavBar
