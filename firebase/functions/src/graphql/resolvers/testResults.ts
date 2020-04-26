import { getTestResults } from '../../models/TestResults'
import { mapEvent } from './reason'
// const getTests = () => {
// 	const tests = [
// 		{
// 			title: 'NEGATIVE',
// 			type: 'TEST_RESULT',
// 			message:
// 				'You have been tested negative. To minimize risk you should stay at home',
// 			published: new Date().toISOString(),
// 			end: new Date().toISOString(),
// 		},
// 		{
// 			title: 'NEGATIVE',
// 			type: 'TEST_RESULT',
// 			message:
// 				'You have been tested negative. To minimize risk you should stay at home',
// 			published: new Date().toISOString(),
// 			end: new Date().toISOString(),
// 		},
// 		{
// 			title: 'POSITIVE',
// 			type: 'TEST_RESULT',
// 			message:
// 				'Plese follow your country orders, advisories. Your medical person will soon contact you.',
// 			published: new Date().toISOString(),
// 			end: new Date().toISOString(),
// 		},
// 	]
// 	return tests
// }

export const testResultsResolver = async () => {
	const result = await getTestResults('4bn7fpnMvjJY2SydSeUp')
	return result.map(mapEvent)
}
