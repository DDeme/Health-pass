import React from 'react'
// import { Scanner } from '../../components/Scanner/index';
import { verifyPass } from '../../services'

const Scanning = () => {
	const res = JSON.stringify(verifyPass())
	return <span>{res}</span>
}

export default Scanning
