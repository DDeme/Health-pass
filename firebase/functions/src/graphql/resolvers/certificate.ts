
import { getHealthCertificate } from '../../lib/getHealthCertificate'

const getUser = () => {
    return {
        name: "John Doe",
        age: "28",
        region: "Poprad",
        country: "Slovakia",
        movementAllowed: true,
    }
}

const User = getUser()
const certificate = getHealthCertificate(User)


export const certificateResolver = () => {
    return certificate
}