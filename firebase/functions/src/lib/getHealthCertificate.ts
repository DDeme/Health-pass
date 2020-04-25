import * as jwt from 'jsonwebtoken'
const HEALTH_CERTIFICATION_VALIDITY = '24h'; 


export const getHealthCertificate = (user: any): string => {
    const token = jwt.sign(user, "private key", {
      expiresIn: HEALTH_CERTIFICATION_VALIDITY,
    });   

    return token 
}


