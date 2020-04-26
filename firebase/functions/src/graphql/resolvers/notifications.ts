// const getNotifications = () => {
// 	const tests = [
// 		{
// 			title: 'NEGATIVE',
// 			type: 'TEST_RESULT',
// 			message:
// 				'You have been tested negative. To minimize risk you should stay at home',
// 			published: new Date().toISOString(),
// 			publishedUnix: new Date().getTime(),
// 			end: new Date().toISOString(),
// 		},
// 		{
// 			title: 'NEGATIVE',
// 			type: 'TEST_RESULT',
// 			message:
// 				'You have been tested negative. To minimize risk you should stay at home',
// 			publishedUnix: new Date().getTime(),
// 			published: new Date().toISOString(),
// 			end: new Date().toISOString(),
// 		},
// 		{
// 			title: 'POSITIVE',
// 			type: 'TEST_RESULT',
// 			message:
// 				'Plese follow your country orders, advisories. Your medical person will soon contact you.',
// 			published: new Date().toISOString(),
// 			publishedUnix: new Date().getTime(),
// 			end: new Date().toISOString(),
// 		},
// 		{
// 			title: 'Quarantine',
// 			type: 'REASON',
// 			message: 'You may have been in contact with infected person.',
// 			published: new Date().toISOString(),
// 			publishedUnix: new Date().getTime(),
// 			end: new Date().toISOString(),
// 		},
// 	]
// 	return tests
// }

import { getNotifications } from '../../models/Notifications'
import { mapEvent } from './reason'

export const notificationsResolver = async () => {
	const result = await getNotifications('4bn7fpnMvjJY2SydSeUp')
	return result.map(mapEvent)
}
