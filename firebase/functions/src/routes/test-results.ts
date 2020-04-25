
import { Router } from "express";
import { testResultsResolver } from '../graphql/resolvers/testResults';
const router = Router();



router.post("/", (req, res, next) => {
  res.send(testResultsResolver);
});

export default router;


