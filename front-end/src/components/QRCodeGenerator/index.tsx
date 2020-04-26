//@ts-check
import React from 'react'
import QRCode from 'qrcode.react'

const QrCodeProps = {
	renderAs: 'svg',
	level: 'M',
	size: 256,
}
export interface QRCodeGeneratorProps {
	certificateToken: string
	className?: string
}

const QRCodeGenerator = (props: QRCodeGeneratorProps) => (
	<QRCode className={props.className} value={props.certificateToken} {...QrCodeProps} />
)

export default QRCodeGenerator
