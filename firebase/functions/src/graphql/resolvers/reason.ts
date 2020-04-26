import { getReason } from '../../models/Reason'

// const Reason = {
// 	title: 'Quarantine',
// 	type: 'REASON',
// 	message: 'You may have been in contact with infected person.',
// 	publishedUnix: new Date().getTime(),
// 	published: new Date().toISOString(),
// 	end: new Date().toISOString(),
// }

export const mapEvent = (
	result: FirebaseFirestore.DocumentData | null | undefined
) => {
	if (result !== null && result !== undefined) {
		return {
			title: result.title,
			type: result.type,
			message: result.message,
			publishedUnix: result.publishedUnix,
			published: result.published,
			end: result.end,
		}
	}
	return null
}

export const reasonResolver = async () => {
	const result = await getReason('4bn7fpnMvjJY2SydSeUp')
	return result
}
