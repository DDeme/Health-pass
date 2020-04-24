//@ts-check
import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { SettingsIconLayout } from '../components'

import {
	SplashScreen,
	Loading,
	Home,
	Login,
	Verification,
	Results,
	Scanning,
} from '../pages'

import { PUBLIC_URL } from '../const'

const Routing: any = (): any => {
	return (
		<React.Suspense fallback={<Loading />}>
			<BrowserRouter basename={PUBLIC_URL}>
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
					<Route path="/results">
						<Results />
					</Route>
					<Route path="/settings-icon">
						<SettingsIconLayout />
					</Route>
					<Route path="/scanning">
						<Scanning />
					</Route>
					{/* <Route path="/settings-theme">
					<SettingsIconLayout />
				</Route>
				<Route path="/settings-cssReset">
					<SettingsIconLayout />
				</Route>
				<Route path="/settings-translation">
					<SettingsIconLayout />
				</Route> */}
				</Switch>
			</BrowserRouter>
		</React.Suspense>
	)
}

export default Routing
