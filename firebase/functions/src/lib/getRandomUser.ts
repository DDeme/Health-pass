import * as faker from 'faker'

const getRandomInt = (min: number, max: number) => {
	const MIN = Math.ceil(min)
	const MAX = Math.floor(max)
	return Math.floor(Math.random() * (MAX - MIN)) + MIN //The maximum is exclusive and the minimum is inclusive
}

export const getRandomUser = (movementAllowed = true): Model.User => {
	return {
		name: faker.name.findName(),
		age: `${getRandomInt(15, 76)}`,
		region: faker.address.county(),
		country: faker.address.country(),
		movementAllowed,
	}
}
