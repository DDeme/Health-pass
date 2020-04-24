const express = require('express');
const router = express.Router();

const Reason = {
  title: "Quarantine",
  type: 'reason',
  message: "You may have been in contact with infected person.",
  published: new Date().toISOString(),
  end: new Date().toISOString(),
}

router.post("/", (req, res, next) => {
  res.send(Reason)
})

module.exports = router