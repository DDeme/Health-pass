import { Router } from "express";
import { reasonResolver } from '../graphql/resolvers/reason';
const router = Router();



router.post("/", (req, res, next) => {
  res.send(reasonResolver())
})

export default router;
