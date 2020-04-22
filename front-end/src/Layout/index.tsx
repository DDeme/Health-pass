//@ts-check
import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Icons, AdminNavBar } from '../components'
import { SplashScreen, Loading, Navigation, Login } from '../Pages'
import styled from 'styled-components'

const WrapperLaout = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	height: 100%;
`

const Layout: any = (): any => {
	return (
		<WrapperLaout>
			<React.Suspense fallback={<Loading />}>
				<BrowserRouter>
					<AdminNavBar />
					<Switch>
						<Route exact path="/">
							<SplashScreen />
						</Route>
						<Route path="/loading">
							<Loading />
						</Route>
						<Route path="/navigation">
							<Navigation />
						</Route>
						<Route path="/login">
							<Login />
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
		</WrapperLaout>
	)
}

export default Layout
