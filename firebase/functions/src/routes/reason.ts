import { Router } from 'express'
import { reasonResolver } from '../graphql/resolvers/reason'
const router = Router()

router.post('/', async (req, res, next) => {
	const data = await reasonResolver()
	res.send({ reason: data })
})

export default router
