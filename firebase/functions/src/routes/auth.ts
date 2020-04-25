import * as express from 'express'

const router = express.Router()
const access_token = '329cc604-cdc9-42cb-b986-783b6920f2d5'
const authorization_token = '3796a6d0-7a9f-4148-b094-ed6d58964560'

// const get2FACode = () => String.format("%06d", number);

// const confirmation_token = '123456'

// TODO: add country
router.post('/login',  (req, res) => {
    res.send({ authorization_token });
});

router.post('/confirmation', (req, res) =>  {
    if (req.body.authorization_token === authorization_token) {
        res.send({ access_token });
    }
    res.send(401)
});

export default router