import React from 'react'
// import { Scanner } from '../../components/Scanner/index';
import { verifyPass } from '../../services'
import { QrCertificate } from '../../components'

const certificate =
	'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiSm9obiBEb2UiLCJhZ2UiOiIyOCIsInJlZ2lvbiI6IlBvcHJhZCIsImNvdW50cnkiOiJTbG92YWtpYSIsIm1vdmVtZW50QWxsb3dlZCI6dHJ1ZSwiaWF0IjoxNTg3Njc5NzA4LCJleHAiOjE1ODc3NjYxMDh9.oLzlPFFxzzbxtqV9gtnAJkAg6OYlPKSPxqOeBlWRNug'

const Scanning = () => {
	const res = JSON.stringify(verifyPass(certificate))
	return (
		<span>
			adafasdf
			<QrCertificate certificateToken={certificate} />
			{res}
		</span>
	)
}

export default Scanning
