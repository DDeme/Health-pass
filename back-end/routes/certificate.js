const express = require('express');
const router = express.Router();

const getHealthCertificate = require('../lib/getHealthCertificate')


const User = {
  name: "John Doe",
  age: "28",
  region: "Poprad",
  country: "Slovakia",
  movementAllowed: true,
}

const getUser = (id) => {
    return User
}

router.post("/", (req, res, next) => {
    const User = getUser('')
    const certificate = getHealthCertificate(User)
    res.send({
        certificate
    })
})

module.exports = router