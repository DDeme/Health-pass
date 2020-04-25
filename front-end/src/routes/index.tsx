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
	TestReusults,
	Notifications,
	Help,
	NotFound,
} from '../pages'
import { ListIcons } from '../settings'

const showDevLinks = false

export const routes = [
	{ visible: showDevLinks, label: 'Pages' },
	{
		visible: showDevLinks,
		label: 'Loading Screen',
		link: '/loading',
		component: Loading,
	},
	{
		visible: showDevLinks,
		label: 'NotFound',
		link: '/notfound',
		component: NotFound,
	},
	{
		visible: showDevLinks,
		label: 'Start Screen',
		link: '/',
		component: Loading,
		exact: true,
	},
	{ visible: showDevLinks, label: 'Home', link: '/home', component: Home },
	{ visible: showDevLinks, label: 'Login', link: '/login', component: Login },
	{
		visible: showDevLinks,
		label: 'Verification',
		link: '/verification',
		component: Verification,
	},
	{
		visible: true,
		label: 'Help',
		link: '/help',
		component: Help,
	},
	{ visible: true, label: 'Results', link: '/results', component: Results },
	{ visible: true, label: 'My status', link: '/mystatus', component: MyStatus },
	{ visible: true, label: 'Test reusults', link: '/test-reusults', component: TestReusults },
	{ visible: true, label: 'Notifications', link: '/notifications', component: Notifications },
	{ visible: true, label: 'Scanning', link: '/scanning', component: Scanning },
	{ visible: showDevLinks, label: 'Settings' },
	{
		visible: showDevLinks,
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
							route.link && <Route key={i} path={route.link} exact={route.exact} component={route.component} />
					)}
				</Switch>
			</BrowserRouter>
		</React.Suspense>
	)
}

export default Routing
