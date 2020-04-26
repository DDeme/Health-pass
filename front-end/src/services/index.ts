//@ts-check
import jwt from 'jsonwebtoken'
import { format } from 'date-fns'

interface Certificate {
	name: string
	age: string
	region: string
	country: string
	movementAllowed: boolean
	iat: number
	exp: number
}

interface VerifiedCertificate extends Certificate {
	expired: boolean
	validUntil: string
}

// const verifyJWT = (token): boolean => true

const parseJWT = token => {
	const data = jwt.decode(token)

	return data
}

const verifyPass = (token?: string, publickeys?: string[]) => {
	return parseJWT(token)
}

const formatDate = date => format(new Date(date), 'dd.MM.yyyy HH:mm')

export { verifyPass, formatDate }
