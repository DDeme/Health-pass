import React from 'react'
import styled from 'styled-components'

// import { Scanner } from '../../components/Scanner/index';
import { verifyPass } from '../../services'
import { Container, ContainerEnumType, ContainerEnumPosition, QrCertificate } from '../../components'
import { Mobile } from '../../layouts'
// import { useTranslation } from 'react-i18next'

const Content: any = styled(Container)`
	max-width: 320px;
	width: 100%;
	padding: 30px 20px;
`
const certificate =
	'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiSm9obiBEb2UiLCJhZ2UiOiIyOCIsInJlZ2lvbiI6IlBvcHJhZCIsImNvdW50cnkiOiJTbG92YWtpYSIsIm1vdmVtZW50QWxsb3dlZCI6dHJ1ZSwiaWF0IjoxNTg3Njc5NzA4LCJleHAiOjE1ODc3NjYxMDh9.oLzlPFFxzzbxtqV9gtnAJkAg6OYlPKSPxqOeBlWRNug'

const Scanning = () => {
	const res = JSON.stringify(verifyPass(certificate))
	return (
		<Mobile>
			<Content type={ContainerEnumType.COL} x={ContainerEnumPosition.TOP}>
				<QrCertificate certificateToken={certificate} />
				{res}
			</Content>
		</Mobile>
	)
}

export default Scanning
