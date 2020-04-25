import { Router } from "express";
const router = Router()


const getKeys = () => {
    const keys = [{
        key: "public_key",
        validUntil: new Date().toISOString(),
    }];
    return keys
}

router.get("/", (req, res, next) => {
    res.send(getKeys());
});

export default router;

