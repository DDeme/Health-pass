import React from 'react'
import styled from 'styled-components'
import {
	StatusBar,
	ContainerEnumType,
	Container,
	QrCertificate,
	UserInfoBlog,
	NotificationBlog,
} from '../../components'
import { Mobile } from '../../layouts'

const Content: any = styled(Container)`
	max-width: 350px;
	padding: 60px 0;
`

const ImageQRCode: any = styled(QrCertificate)`
	display: inline-block;
	width: 100%;
	margin-top: 30px;
`

const Success = () => {
	const props = {
		name: 'John Deo',
		age: 24,
		country: 'Slovakia',
		status: true,
	}

	return (
		<Mobile>
			<StatusBar state={props.status} />
			<Content type={ContainerEnumType.COL}>
				<NotificationBlog show={true} />
				<ImageQRCode certificateToken={'test'} />
				<UserInfoBlog data={props} />
			</Content>
		</Mobile>
	)
}

export default Success
