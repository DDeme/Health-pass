//@ts-check
import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Icons, AdminNavBar } from '../components'
import { SplashScreen, Loading, Home, Login, Verification } from '../Pages'
import { PUBLIC_URL } from '../const'

const Routing: any = (): any => {
	return (
		<React.Suspense fallback={<Loading />}>
			<BrowserRouter basename={PUBLIC_URL}>
				<AdminNavBar />
				<Switch>
					<Route exact path="/">
						<SplashScreen />
					</Route>
					<Route path="/loading">
						<Loading />
					</Route>
					<Route path="/home">
						<Home />
					</Route>
					<Route path="/login">
						<Login />
					</Route>
					<Route path="/verification">
						<Verification />
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
	)
}

export default Routing
