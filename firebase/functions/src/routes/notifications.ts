import { Router } from 'express'
import { notificationsResolver } from '../graphql/resolvers/notifications'
const router = Router()

router.post('/', async (req, res, next) => {
	const nottifications = await notificationsResolver()
	res.send(nottifications)
})

export default router
