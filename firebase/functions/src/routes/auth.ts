import * as express from 'express'
import { setAccess } from '../models/Access'
import { findUserBycitizenID } from '../models/User'
import {
	setAuthorization,
	getAuthorization,
	deleteAuthorization,
} from '../models/Authorization'

const router = express.Router()

router.post('/login', async (req, res) => {
	// const { country, citizen_id, phone } = req.body

	const user = await findUserBycitizenID(req.body.citizen_id)
	if (user.length !== 0 && user[0].id !== undefined) {
		const { authorization_token } = await setAuthorization(user[0].id)
		res.send({ authorization_token })
	}
	res.sendStatus(401)
})

router.post('/confirmation', async (req, res) => {
	const result = await getAuthorization(req.body.authorization_token)
	if (
		result !== null &&
		result !== undefined
		//&&
		// 		result.verification_code === req.body.verification_code
	) {
		const { access_token } = await setAccess(result.id)
		await deleteAuthorization(result.authorization_token)
		res.send({ access_token })
	}
	res.sendStatus(401)
})

export default router
