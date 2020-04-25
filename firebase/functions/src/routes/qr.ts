import { Router } from "express";
import { getHealthCertificate } from '../lib/getHealthCertificate';
import * as qr from "qr-image";
const router = Router();


const getUser = (movementAllowed = true) => {
  return {
    name: "John Doe",
    age: "28",
    region: "Poprad",
    country: "Slovakia",
    movementAllowed,
  };
};



router.get('/valid', (req, res, next) => {
    const code = qr.image(getHealthCertificate(getUser()), { type: "svg" });
    res.type("svg");
    code.pipe(res);
});

router.get("/invalid", (req, res, next) => {

  const code = qr.image(getHealthCertificate(getUser(false)), { type: "svg" });
  res.type("svg");
  code.pipe(res);
});

export default router;