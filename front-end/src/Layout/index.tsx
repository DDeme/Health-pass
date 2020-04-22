//@ts-check
import React, { FC } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Icons } from '../components'
import { Home, Login, Loading, Result, NotFound } from '../Pages'
import { Container as ContainerB, Nav, Navbar } from 'react-bootstrap'
import styled from 'styled-components'

const WrapperNavbar = styled.div`
	display: ${({ theme }) => theme.mode !== 'dev' && 'none'};

	nav {
		padding: 0;
	}

	button {
		font-size: 8px;
		padding: 2px;
	}

	display: inline-block;
	position: fixed;
	left: 0;
	border-bottom-right-radius: 5px;
	overflow: hidden;

	&:focus,
	&:hover {
		nav {
			padding: 5px;
		}

		button {
			font-size: 15px;
			padding: 4px 12px;
		}
	}
`

const Navigation: FC = () => (
	<WrapperNavbar>
		<Navbar bg="light" expand="lg">
			<Navbar.Toggle aria-controls="basic-navbar-nav" />
			<Navbar.Collapse id="basic-navbar-nav">
				<Nav className="mr-auto">
					<Navbar bg="light">
						<Navbar.Brand>Pages</Navbar.Brand>
					</Navbar>
					<Nav.Link href="notFound">Not Found</Nav.Link>
					<Nav.Link href="/">Loading</Nav.Link>
					<Nav.Link href="/login">Login</Nav.Link>
					<Nav.Link href="/home">Home</Nav.Link>
					<Nav.Link href="/result">Result</Nav.Link>
					<Navbar bg="light">
						<Navbar.Brand>Settings</Navbar.Brand>
					</Navbar>
					<Nav.Link href="/settings-icon">Icons</Nav.Link>
					{/* 
						<Nav.Link href="/settings-theme">Theme</Nav.Link>
						<Nav.Link href="/settings-cssReset">Reset css</Nav.Link>
						<Nav.Link href="/settings-translation">Translation</Nav.Link>
				 */}
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	</WrapperNavbar>
)

const Container = styled(ContainerB)`
	height: 100%;
`

const Layout: any = (): any => {
	return (
		<Container>
			<React.Suspense fallback={<Loading />}>
				<BrowserRouter>
					<Navigation />
					<Switch>
						<Route path="/notFound">
							<NotFound />
						</Route>
						<Route exact path="/">
							<Loading />
						</Route>
						<Route path="/home">
							<Home />
						</Route>
						<Route path="/login">
							<Login />
						</Route>
						<Route path="/result">
							<Result />
						</Route>
						<Route path="/settings-icon">
							<Icons />
						</Route>
						{/* <Route path="/settings-theme">
					<Icons />
				</Route>
				<Route path="/settings-cssReset">
					<Icons />
				</Route>
				<Route path="/settings-translation">
					<Icons />
				</Route> */}
					</Switch>
				</BrowserRouter>
			</React.Suspense>
		</Container>
	)
}

export default Layout
