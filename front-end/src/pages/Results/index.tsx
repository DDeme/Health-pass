import React, { FC } from 'react'
import styled from 'styled-components'
import {
	StatusBar,
	BoxShaddow as BoxShaddowC,
	Icon,
	ContainerEnumType,
	ContainerEnumPosition,
	Container as ContainerC,
} from '../../components'
import { ContainerProps } from '../../components/Container'
import Mobile from '../../layouts/Mobile'
import path from './qrcode.png'
import { Link as LinkR } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const Content: any = styled(ContainerC)`
	max-width: 290px;
	padding: 60px 0;
`

const ImageQRCode: any = styled.img`
	display: inline-block;
	width: 100%;
	padding: 30px 20px;
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

const Container: FC<ContainerProps> = styled(ContainerC)`
	justify-content: flex-start;
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
	color: ${({ theme }) => theme.color.purple};
	font-size: 14px;
`

const Success = () => {
	const { t } = useTranslation()

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
					<Link>{t('results.notification.link')}</Link>
				</BoxShaddow>
				<ImageQRCode src={path} />
			</Content>
		</Mobile>
	)
}

export default Success
