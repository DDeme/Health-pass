//@ts-check
import React from 'react'
import QrReader from 'react-qr-reader'

const QRCodeScanner = props => (
	<QrReader
		className={props.className}
		delay={300}
		onScan={props.onScan}
		onError={props.onError}
		style={{ width: '100%' }}
	/>
)

export default QRCodeScanner
