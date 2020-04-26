import * as express from 'express'
import * as bodyParser from 'body-parser'
import * as cors from 'cors'
// const path from 'path');
// const cookieParser from 'cookie-parser');

import reasonRouter from './routes/reason'
import certificateRouter from './routes/certificate'
import authRouter from './routes/auth'
import testRouter from './routes/test-results'
import keysRounter from './routes/keys'
import notificationsRounter from './routes/notifications'
import qrRouter from './routes/qr'
import { authMiddleware } from './middleware/auth'

const app = express()
app.use(cors({ origin: true }))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use('/auth', authRouter)
app.use('/certificate', authMiddleware, certificateRouter)
app.use('/reason', authMiddleware, reasonRouter)
app.use('/test-results', authMiddleware, testRouter)
app.use('/keys', keysRounter)
app.use('/notifications', authMiddleware, notificationsRounter)
app.use('/qr', qrRouter)
app.get('*', (_, res) => {
	res.status(404).json({ message: 'Not found' })
})

export default app
