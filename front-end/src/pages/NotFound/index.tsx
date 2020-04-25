import React from 'react'
import { Link as LinkR } from 'react-router-dom'
import styled from 'styled-components'
import { Container, Button, Icon, ContainerEnumType } from '../../components'
import { Mobile } from '../../layouts'
import { useTranslation } from 'react-i18next'

const Content = styled(Container)`
	max-width: 320px;
	text-align: center;
	width: 100%;
	padding: 30px 20px;
`

const IconNotification = styled(Icon)`
	position: absolute;
	left: 0;
	top: 50%;
	transform: translateY(-50%);

	&:before {
		color: ${({ theme }) => theme.color.red};
	}
`

const Title = styled.h1`
	position: relative;
	padding-left: 50px;
	width: 100%;
	text-align: left;
	font-size: 14px;
	font-weight: bold;
	color: ${({ theme }) => theme.color.red};
`

const Description = styled.p`
	width: 100%;
	text-align: left;
	margin-top: 60px;
	font-size: 14px;
	font-weight: bold;
	color: ${({ theme }) => theme.color.red};
`

const Link = styled(LinkR)`
	display: inline-block;
	width: 100%;
`

const Item: any = styled(Button)`
	margin-top: 30px;
`

const NotFound = () => {
	const { t } = useTranslation()

	return (
		<Mobile>
			<Content type={ContainerEnumType.COL}>
				<Container type={ContainerEnumType.COL}>
					<Title>
						<IconNotification name="notification" />
						{t('error.title')}
					</Title>
					<Description>{t('error.description')}</Description>
				</Container>
				<Link to="/">
					<Item>{t('error.button_one')}</Item>
				</Link>
			</Content>
		</Mobile>
	)
}

export default NotFound
