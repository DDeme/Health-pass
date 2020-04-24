const express = require("express");
const router = express.Router();

const getNotifications = () => {
    return []
}


router.get('/', (req, res, next) => {
  const data = getNotifications() 


  res.send(data);
});

module.exports = router;