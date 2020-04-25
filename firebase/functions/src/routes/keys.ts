import { Router } from "express";
import { keysResolver } from '../graphql/resolvers/keys';
const router = Router()




router.get("/", (req, res, next) => {
    res.send({ keys: keysResolver });
});

export default router;

