import React from 'react'
import styled from 'styled-components'
import {
	StatusBar,
	ContainerEnumType,
	Container,
	QrCertificate,
	UserInfoBlog,
	NotificationBlog,
	Icon,
} from '../../components'
import { Mobile } from '../../layouts'
import { useTranslation } from 'react-i18next'

const Content: any = styled(Container)`
	max-width: 350px;
	padding: 60px 0;
`

const ImageQRCode: any = styled(QrCertificate)`
	display: inline-block;
	width: 100%;
	margin-top: 30px;
`

const Title = styled.h2`
	position: relative;
	z-index: 2;
	padding: 30px 15px 15px;
	font-size: 18px;
	font-weight: bold;
	color: ${({ theme }) => theme.color.white};
`

const IconStatus = styled(Icon)`
	height: 60px;
	width: 60px;

	&:before {
		font-size: 60px;
		height: 60px;
		width: 60px;
	}
`

const Success = () => {
	const { t } = useTranslation()

	const props = {
		name: 'John Deo',
		age: 24,
		country: 'Slovakia',
		positive: true,
	}

	return (
		<Mobile>
			<StatusBar state={props.positive}>
				<>
					<IconStatus name={props.positive ? 'close' : 'check'} />
					<Title>{props.positive ? t('results.positive.title') : t('results.negative.title')}</Title>
				</>
			</StatusBar>
			<Content type={ContainerEnumType.COL}>
				<NotificationBlog show={true} />
				<ImageQRCode certificateToken={'test'} />
				<UserInfoBlog data={props} />
			</Content>
		</Mobile>
	)
}

export default Success
