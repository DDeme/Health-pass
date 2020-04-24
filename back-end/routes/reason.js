const express = require('express');
const router = express.Router();

const Reason = {
  reason: "Quarantine",
  message: "You may have been in contact with infected person.",
  start: new Date().toISOString(),
  end: new Date().toISOString(),
}

router.post("/", (req, res, next) => {
  res.send(Reason)
})

module.exports = router