import { Router } from 'express'
import { testResultsResolver } from '../graphql/resolvers/testResults'
const router = Router()

router.post('/', async (req, res, next) => {
	const data = await testResultsResolver()
	res.send(data)
})

export default router
