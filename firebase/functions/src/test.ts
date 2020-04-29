import * as faker from 'faker'
console.log(faker.phone.phoneFormats())

const num = faker.phone.phoneNumber()

console.log(num)
