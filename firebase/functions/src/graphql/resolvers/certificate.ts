import { getHealthCertificate } from '../../lib/getHealthCertificate'
import { getUser } from '../../models/User'
import { getReason } from '../../models/Reason'

const getCodeData = (user: any, reason: any) => {
	return {
		name: user.name,
		age: user.name,
		region: user.country,
		country: user.country,
		movementAllowed: reason === null ? true : false,
	}
}

export const certificateResolver = async () => {
	const user = await getUser('4bn7fpnMvjJY2SydSeUp')
	const reason = await getReason('4bn7fpnMvjJY2SydSeUp')
	const codeData = getCodeData(user, reason)

	return getHealthCertificate(codeData)
}
