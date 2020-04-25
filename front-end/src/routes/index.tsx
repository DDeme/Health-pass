//@ts-check
import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { PUBLIC_URL } from '../env'

import {
	Loading,
	Home,
	Scanning,
	Login,
	Verification,
	Results,
	MyStatus,
} from '../pages'
import { ListIcons } from '../settings'

export const routes = [
	{ visible: true, label: 'Pages' },
	{
		visible: true,
		label: 'Loading Screen',
		link: '/loading',
		component: Loading,
	},
	{
		visible: true,
		label: 'Start Screen',
		link: '/',
		component: Loading,
		exact: true,
	},
	{ visible: true, label: 'Home', link: '/home', component: Home },
	{ visible: true, label: 'Scanning', scanning: '/login', component: Scanning },
	{ visible: true, label: 'Login', link: '/login', component: Login },
	{
		visible: true,
		label: 'Verification',
		link: '/verification',
		component: Verification,
	},
	{ visible: true, label: 'Results', link: '/results', component: Results },
	{ visible: true, label: 'My status', link: '/mystatus', component: MyStatus },
	{ visible: true, label: 'Settings' },
	{
		visible: true,
		label: 'Icons',
		link: '/settings-icon',
		component: ListIcons,
	},
]

const Routing: any = (): any => {
	return (
		<React.Suspense fallback={<Loading />}>
			<BrowserRouter basename={PUBLIC_URL}>
				<Switch>
					{routes.map(
						(route, i) =>
							route.link && (
								<Route
									key={i}
									path={route.link}
									exact={route.exact}
									component={route.component}
								/>
							)
					)}
				</Switch>
			</BrowserRouter>
		</React.Suspense>
	)
}

export default Routing
