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

const certificate =
	'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiSm9obiBEb2UiLCJhZ2UiOiIyOCIsInJlZ2lvbiI6IlBvcHJhZCIsImNvdW50cnkiOiJTbG92YWtpYSIsIm1vdmVtZW50QWxsb3dlZCI6dHJ1ZSwiaWF0IjoxNTg3Njc5NzA4LCJleHAiOjE1ODc3NjYxMDh9.oLzlPFFxzzbxtqV9gtnAJkAg6OYlPKSPxqOeBlWRNug'

// const verifyJWT = (token): boolean => true

const parseJWT = (token = certificate) => {
	const data = jwt.decode(token)

	return data
}

const verifyPass = (token?: string, publickeys?: string[]) => {
	return parseJWT()
}

export { verifyPass }
