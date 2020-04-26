import { db } from '../lib/db'
import { mapEvent } from '../graphql/resolvers/reason'

export const getNotifications = async (id: string) => {
	const notificationRef = db
		.collection('userdata')
		.doc(id)
		.collection('notifications')
	const snapshot = await notificationRef
		.orderBy('publishedUnix', 'desc')
		.limit(10)
		.get()

	if (snapshot.empty) {
		return []
	}

	const docs: any[] = []
	snapshot.forEach(doc => {
		docs.push(doc.data())
	})
	return docs.map(mapEvent)
}
