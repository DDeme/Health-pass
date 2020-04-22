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




router.get("/", (req, res, next) => {
    const certificate = getHealthCertificate(User)
  
    res.send({
        certificate
    });
});

module.exports = router;