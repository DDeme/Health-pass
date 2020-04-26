import { db } from '../lib/db'

export const findUserBycitizenID = async (citizen_id: string) => {
	const usersRef = db.collection('users')
	const snapshot = await usersRef.where('citizen_id', '==', citizen_id).get()
	if (snapshot.empty) {
		return []
	}

	const docs: any[] = []
	snapshot.forEach(doc => {
		docs.push(doc.data())
	})
	return docs
}

export const getUser = async (id: string) => {
	const userRef = db.collection('users').doc(id)
	const doc = await userRef.get()
	return !doc.exists ? null : doc.data()
}
