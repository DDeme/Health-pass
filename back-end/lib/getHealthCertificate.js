const jwt = require("jsonwebtoken");
const HEALTH_CERTIFICATION_VALIDITY = '24h'; 


const getHealthCertificate = (user) => {
    const token = jwt.sign(user, "private key", {
      expiresIn: HEALTH_CERTIFICATION_VALIDITY,
    });   

    return token 
}


module.exports = getHealthCertificate
