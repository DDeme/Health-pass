import React from 'react'
import { Link as LinkR } from 'react-router-dom'
import styled from 'styled-components'
import Container, { ContainerEnumPosition, ContainerEnumType } from '../Container'
import BoxShaddow from '../BoxShaddow'
import Icon from '../Icon'
import { useTranslation } from 'react-i18next'

const Wrapper: any = styled(BoxShaddow)`
	display: inline-block;
	padding: 25px;
`

const IconNotification = styled(Icon)`
	&:before {
		color: ${({ theme }) => theme.color.red};
	}
`

const Title = styled.h3`
	color: ${({ theme }) => theme.color.red};
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

const NotificationBlog: any = ({ show }) => {
	const { t } = useTranslation()

	return (
		show && (
			<Wrapper type={ContainerEnumType.COL}>
				<Container x={ContainerEnumPosition.LEFT}>
					<IconNotification name="notification" />
					<Title>{t('results.positive.notification.title')}</Title>
				</Container>
				<Description>{t('results.positive.notification.description')}</Description>
				<Container x={ContainerEnumPosition.RIGHT}>
					<Link to="/mystatus">{t('results.positive.notification.link')}</Link>
				</Container>
			</Wrapper>
		)
	)
}
export default NotificationBlog
