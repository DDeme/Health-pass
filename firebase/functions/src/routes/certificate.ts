import { Router } from 'express';
import { certificateResolver } from '../graphql/resolvers/certificate';


const router = Router();

router.post("/", (req, res, next) => {    
    res.send({
        certificate: certificateResolver()
    })
})

export default router;