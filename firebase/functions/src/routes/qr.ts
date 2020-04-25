import { Router } from "express";
import { getHealthCertificate } from '../lib/getHealthCertificate';
import * as qr from "qr-image";
import { getRandomUSer } from '../lib/getRandomUser';

const router = Router();

router.get('/valid', (req, res, next) => {
    const code = qr.image(getHealthCertificate(getRandomUSer()), { type: "svg" });
    res.type("svg")
    code.pipe(res)
});

router.get("/invalid", (req, res, next) => {

  const code = qr.image(getHealthCertificate(getRandomUSer(false)), {
    type: "svg",
  });
  res.type("svg")
  code.pipe(res)
});

export default router;