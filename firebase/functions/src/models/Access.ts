import { db } from '../lib/db'
import { v4 as uuidv4 } from 'uuid'

export const setAccess = async (
	id: string,
	access_token: string = uuidv4()
) => {
	const data = {
		id,
		access_token,
	}

	await db.collection('access').doc(access_token).set(data)
	return data
}

export const getAccess = async (access_token: string) => {
	const cityRef = db.collection('access').doc(access_token)
	const doc = await cityRef.get()
	return !doc.exists ? null : doc.data()
}

export const deleteAccess = async (access_token: string) => {
	return await db.collection('access').doc(access_token).delete()
}
