import { getAccess } from '../models/Access'
import { getUser } from '../models/User'
import { Request, Response, NextFunction } from 'express'

export const authMiddleware = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	const acc = await getAccess(req.body.access_token)
	console.log(acc)

	if (acc !== null && acc !== undefined) {
		const user = await getUser(acc.id)
		console.log(user)

		if (user !== null) {
			req.body.user = user
			next()
		} else {
			res.sendStatus(401)
		}
	}
}
