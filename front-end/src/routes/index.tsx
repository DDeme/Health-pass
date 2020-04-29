//@ts-check
import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { PUBLIC_URL, SHOW_DEV_LINKS } from '../env'

import {
	Home,
	Scanning,
	Login,
	Verification,
	Results,
	MyStatus,
	TestResults,
	Notifications,
	Help,
	NotFound,
	VerifyByPhoneNumber,
	Loading,
	ScanResult,
} from '../pages'
import { ListIcons } from '../settings'

export const routes = [
	{ visible: SHOW_DEV_LINKS, label: 'Pages' },
	{ visible: true, label: 'My profile' },
	{
		visible: SHOW_DEV_LINKS,
		label: 'Loading Screen',
		link: '/loading',
		component: Loading,
	},
	{
		visible: SHOW_DEV_LINKS,
		label: 'NotFound',
		link: '/notfound',
		component: NotFound,
	},
	{ visible: SHOW_DEV_LINKS, label: 'Home', link: '/', component: Home, exact: true },
	{ visible: SHOW_DEV_LINKS, label: 'Login', link: '/login', component: Login },
	{
		visible: SHOW_DEV_LINKS,
		label: 'Verification',
		link: '/verification',
		component: Verification,
	},
	{
		visible: SHOW_DEV_LINKS,
		label: 'Verification by phone',
		link: '/verification-by-phone',
		component: Verification,
	},
	{
		visible: SHOW_DEV_LINKS,
		label: 'Scan result',
		link: '/scan-result',
		component: ScanResult,
	},
	{ visible: true, label: 'My certificate', link: '/results', component: Results },
	{ visible: true, label: 'Print certificate', link: '/results-print', component: Results },
	{ visible: true, label: 'My status', link: '/mystatus', component: MyStatus },
	{ visible: true, label: 'Test results', link: '/test-reusults', component: TestResults },
	{ visible: true, label: 'Notifications', link: '/notifications', component: Notifications },
	{
		visible: true,
		label: 'Log out',
		link: '/home',
		component: Home,
	},
	{ visible: true, split: true },
	{ visible: true, label: 'Verify by scanning', link: '/scanning/:certificate?', component: Scanning },
	{
		visible: true,
		label: 'Verify by phone number',
		link: '/verify',
		component: VerifyByPhoneNumber,
	},
	{
		visible: true,
		label: 'Help',
		link: '/help',
		component: Help,
	},
	{ visible: true, split: true },
	{ visible: SHOW_DEV_LINKS, label: 'Settings' },
	{
		visible: SHOW_DEV_LINKS,
		label: 'Icons',
		link: '/settings-icon',
		component: ListIcons,
	},
]

const Routing: any = (): any => {
	return (
		<BrowserRouter basename={PUBLIC_URL}>
			<Switch>
				{routes.map(
					(route, i) =>
						route.link && <Route key={i} path={route.link} exact={route.exact} component={route.component} />
				)}
			</Switch>
		</BrowserRouter>
	)
}

export default Routing
