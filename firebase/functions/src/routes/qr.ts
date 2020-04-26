import { Router } from 'express'
import { getHealthCertificate } from '../lib/getHealthCertificate'
import * as qr from 'qr-image'
import { getRandomUser } from '../lib/getRandomUser'

const router = Router()

router.get('/valid', (req, res, next) => {
	const code = qr.image(getHealthCertificate(getRandomUser()), { type: 'svg' })
	res.type('svg')
	code.pipe(res)
})

router.get('/invalid', (req, res, next) => {
	const code = qr.image(getHealthCertificate(getRandomUser(false)), {
		type: 'svg',
	})
	res.type('svg')
	code.pipe(res)
})

export default router
