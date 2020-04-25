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
	max-width: 320px;
	text-align: center;
	padding: 50px 20px;
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

const IconNotification = styled(Icon)`
	height: 60px;
	width: 60px;

	&:before {
		color: ${({ theme }) => theme.color.red};
		font-size: 60px;
		height: 60px;
		width: 60px;
	}
`

const NotFound = () => {
	const { t } = useTranslation()

	return (
		<Mobile>
			<IconNotification name="notification" />
			<Title>{t('error.title')}</Title>
		</Mobile>
	)
}

export default NotFound
