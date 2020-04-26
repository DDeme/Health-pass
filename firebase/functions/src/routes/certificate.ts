import { Router } from 'express'
import { certificateResolver } from '../graphql/resolvers/certificate'

const router = Router()

router.post('/', async (req, res, next) => {
	const certificate = await certificateResolver()
	console.log(certificate)
	res.send({
		certificate,
	})
})

export default router
