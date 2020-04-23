import React from 'react'
// import { Scanner } from '../../components/Scanner/index';
import { verifyPass } from '../../services/verifyPass';

export const Scanning = () => {
	 const res = JSON.stringify(verifyPass())
	return <span>{res}</span>
}	
