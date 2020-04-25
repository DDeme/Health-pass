import React from 'react'
import QRCode from 'qrcode.react'

const QrCodeProps = {
	renderAs: 'svg',
	level: 'M',
	size: 256,
}
export interface QrCertificateProps {
	certificateToken: string
	className?: string
}

const QrCertificate = (props: QrCertificateProps) => (
	<QRCode
		className={props.className}
		value={props.certificateToken}
		{...QrCodeProps}
	/>
)

export default QrCertificate
