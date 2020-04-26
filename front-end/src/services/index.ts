//@ts-check
import jwt from 'jsonwebtoken'

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

export { verifyPass }
