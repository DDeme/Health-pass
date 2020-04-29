import { Router } from 'express'
import { getHealthCertificate } from '../lib/getHealthCertificate'
import * as qr from 'qr-image'
import { getRandomUser } from '../lib/getRandomUser'

const router = Router()

const SCANNING_URL = 'http://qr.demecko.com/scanning'

const getCodeUrl = (certificate: string) => `${SCANNING_URL}/${certificate}`

router.get('/valid', (req, res, next) => {
	const code = qr.image(getCodeUrl(getHealthCertificate(getRandomUser())), {
		type: 'svg',
	})
	res.type('svg')
	code.pipe(res)
})

router.get('/invalid', (req, res, next) => {
	const code = qr.image(
		getCodeUrl(getHealthCertificate(getRandomUser(false))),
		{
			type: 'svg',
		}
	)
	res.type('svg')
	code.pipe(res)
})

export default router
