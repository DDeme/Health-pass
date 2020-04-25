import { Router } from "express";
import { notificationsResolver } from '../graphql/resolvers/notifications';
const router = Router();




router.post("/", (req, res, next) => {
  res.send(notificationsResolver());
});

export default router;
