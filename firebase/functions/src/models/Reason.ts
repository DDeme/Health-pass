import { db } from '../lib/db'
import { mapEvent } from '../graphql/resolvers/reason'

export const getReason = async (id: string) => {
	const cityRef = db.collection('userdata').doc(id).collection('reason').doc(id)
	const doc = await cityRef.get()

	if (doc.exists) {
		const reason = doc.data()

		if (reason && new Date(reason.end).getTime() < new Date().getTime()) {
			// ADD NOTIFICATION ABOUT END OF reason
			await deleteReason(id)
			return null
		}
	}
	return !doc.exists ? null : mapEvent(doc.data())
}

export const deleteReason = async (id: string) => {
	return await db
		.collection('userdata')
		.doc(id)
		.collection('reason')
		.doc(id)
		.delete()
}
