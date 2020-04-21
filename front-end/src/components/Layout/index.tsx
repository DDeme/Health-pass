//@ts-check
import React, { FC } from 'react'
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
import { Home, Login, Loading, Result } from '../../Pages'

import styled from 'styled-components'

const Nav: FC = styled.nav`
	position: absolute;
	top: 0;
	left: 0;
`

const Layout: FC = (): React.ReactElement => {
	return (
		<BrowserRouter>
			<Nav>
				<ul>
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/login">Login</Link>
					</li>
					<li>
						<Link to="/result">Result</Link>
					</li>
					<li>
						<Link to="/loading">Loading</Link>
					</li>
				</ul>
			</Nav>
			<Switch>
				<Route exact path="/">
					<Home />
				</Route>
				<Route path="/login">
					<Login />
				</Route>
				<Route path="/result">
					<Result />
				</Route>
				<Route path="/loading">
					<Loading />
				</Route>
			</Switch>
		</BrowserRouter>
	)
}

export default Layout
