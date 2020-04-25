import React from 'react'
import styled from 'styled-components'
import {
	StatusBar,
	BoxShaddow as BoxShaddowC,
	Icon,
	ContainerEnumType,
	ContainerEnumPosition,
	Container,
	QrCertificate,
	UserInfoBlog,
} from '../../components'
import { Mobile } from '../../layouts'
import { Link as LinkR } from 'react-router-dom'
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

const IconNotification = styled(Icon)`
	opacity: 0.5;
	&:before {
		color: ${({ theme }) => theme.color.black};
	}
`

const BoxShaddow = styled(BoxShaddowC)`
	display: inline-block;
	padding: 25px;
`

const Title = styled.h3`
	font-size: 24px;
	margin-left: 30px;
`

const Description = styled.p`
	font-size: 16px;
	padding-top: 20px;
	line-height: 24px;
`

const Link = styled(LinkR)`
	display: inline-block;
	text-transform: uppercase;
	font-weight: bold;
	color: ${({ theme }) => theme.color.purple};
	font-size: 14px;
	text-decoration: none;

	&:hover {
		text-decoration: underline;
	}
`

const Success = () => {
	const { t } = useTranslation()

	const data = {
		name: 'John Deo',
		age: 24,
		country: 'Slovakia',
	}

	return (
		<Mobile>
			<StatusBar state={true} />
			<Content type={ContainerEnumType.COL}>
				<BoxShaddow type={ContainerEnumType.COL}>
					<Container x={ContainerEnumPosition.LEFT}>
						<IconNotification name="notification" />
						<Title>{t('results.notification.title')}</Title>
					</Container>
					<Description>{t('results.notification.description')}</Description>
					<Container x={ContainerEnumPosition.RIGHT}>
						<Link to="/mystatus">{t('results.notification.link')}</Link>
					</Container>
				</BoxShaddow>
				<ImageQRCode certificateToken={'test'} />
				<UserInfoBlog data={data} />
			</Content>
		</Mobile>
	)
}

export default Success
