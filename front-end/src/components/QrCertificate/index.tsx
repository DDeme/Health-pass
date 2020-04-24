import React from 'react'
import QRCode from 'qrcode.react'


interface QrCertificateProps {
    certificateToken: string
}

const QrCodeProps = {
    renderAs: 'svg',
    level: 'M',
    size: 256,
}

const QrCertificate = (props: QrCertificateProps) => (
	<QRCode value={props.certificateToken} {...QrCodeProps} />
)


export default QrCertificate
