import { Router } from 'express';
import { getHealthCertificate } from '../lib/getHealthCertificate'

const router = Router();


const getUser = () => {
    return {
        name: "John Doe",
        age: "28",
        region: "Poprad",
        country: "Slovakia",
        movementAllowed: true,
    }
}

router.post("/", (req, res, next) => {
    const User = getUser()
    const certificate = getHealthCertificate(User)
    res.send({
        certificate
    })
})

export default router;