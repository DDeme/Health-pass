const express = require('express');
const router = express.Router();

const Reason = {
  reason_enum: 0,
  message_enum: 0,
  start: new Date().toISOString(),
  end: new Date().toISOString(),
}

router.post("/", (req, res, next) => {
  res.send(Reason)
})

module.exports = router