//@ts-check
import React, { FC } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Home from '../../Pages/Home'
import Login from '../../Pages/Login'
import Result from '../../Pages/Result'
import Loading from '../../Pages/Loading'

import styled from 'styled-components'

const Nav: FC = styled.nav`
	position: absolute;
	top: 0;
	left: 0;
`

const Layout: FC = (): React.ReactElement => {
	return (
		<Router>
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
		</Router>
	)
}

export default Layout
