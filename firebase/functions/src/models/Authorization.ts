import { db } from '../lib/db'
import { v4 as uuidv4 } from 'uuid'

const getVerficationCode = (): string =>
	`${Math.floor(100000 + Math.random() * 900000)}`

export const setAuthorization = async (
	id: string,
	verification_code: string = getVerficationCode(),
	authorization_token: string = uuidv4()
) => {
	const data = {
		id,
		verification_code,
		authorization_token,
	}

	await db.collection('2fa').doc(authorization_token).set(data)
	return data
}

export const getAuthorization = async (authorization_token: string) => {
	const cityRef = db.collection('2fa').doc(authorization_token)
	const doc = await cityRef.get()
	return !doc.exists ? null : doc.data()
}

export const deleteAuthorization = async (authorization_token: string) => {
	return await db.collection('2fa').doc(authorization_token).delete()
}
