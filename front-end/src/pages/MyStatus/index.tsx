import React, { FC } from 'react'
import styled from 'styled-components'
import { Link as LinkR } from 'react-router-dom'
import { Button, StatusBar, Icon, ContainerEnumType, ContainerEnumPosition, Container } from '../../components'
import { Mobile } from '../../layouts'
import { useTranslation } from 'react-i18next'

const Content: any = styled(Container)`
	justify-content: flex-start;
`

const Link = styled(LinkR)`
	display: inline-block;
	width: 100%;
`

const InfoStatusBar: any = styled(StatusBar)`
	padding: 20px;
	flex: initial;

	&:after {
		display: none;
	}
`

const Label: FC = styled.label`
	color: ${({ theme }) => theme.color.white};
	font-size: 24px;
`

const Title: FC = styled.h3`
	color: ${({ theme }) => theme.color.white};
	font-size: 24px;
	padding-left: 20px;
`

const Item: FC = styled(Button)`
	margin-top: 30px;
`

const Home = () => {
	const { t } = useTranslation()

	const data = {
		positive: true,
	}

	return (
		<Mobile>
			<Content type={ContainerEnumType.COL} y={ContainerEnumPosition.TOP}>
				<InfoStatusBar state={data.positive}>
					<Container x={ContainerEnumPosition.LEFT}>
						<Icon name={data.positive ? 'notification' : 'check'} />
						<Title>{t('mystatus.positive.title')}</Title>
					</Container>
				</InfoStatusBar>
				<Label>{t('mystatus.positive.label')}</Label>
				<Link to="/">
					<Item>{t('mystatus.button_one')}</Item>
				</Link>
			</Content>
		</Mobile>
	)
}
export default Home
