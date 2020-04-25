import React, { FC } from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'
import {
	Button as ButtonC,
	StatusBar,
	Icon,
	ContainerEnumType,
	ContainerEnumPosition,
	Container,
} from '../../components'
import { Mobile } from '../../layouts'
import { useTranslation } from 'react-i18next'

const Content = styled(Container)`
	max-width: 350px;
	margin: 30px;
`

const InfoStatusBar: any = styled(StatusBar)`
	padding: 25px;
	flex: initial;

	&:after {
		display: none;
	}
`

const Status: any = styled(Container)`
	max-width: 350px;

	width: 100%;
	margin: 0 30px;
`

const Label: FC = styled.label`
	max-width: 350px;
	width: 100%;
	font-size: 14px;
	color: ${({ theme }) => theme.color.black};
	font-size: 24px;
	padding: 25px 0;
	margin: 0 30px;
`

const Title: FC = styled.h3`
	color: ${({ theme }) => theme.color.white};
	font-size: 24px;
	padding-left: 15px;
`

const Date: FC = styled.p`
	color: ${({ theme }) => theme.color.black};
	font-size: 16px;
	width: 100%;
	padding-bottom: 10px;
`

const Description: FC = styled.p`
	color: ${({ theme }) => theme.color.black};
	font-size: 14px;
	padding: 10px 0 30px;
	line-height: 20px;
	opacity: 0.6;
	text-align: left;
	border: 1px solid ${({ theme }) => theme.color.black};
	border-width: 1px 0;
`

const Button: any = styled(ButtonC)`
	margin-top: 60px;
	width: 100%;
`
const Home = () => {
	const history = useHistory()
	const { t } = useTranslation()

	const data = {
		positive: true,
		date: '25. 4. 2020, 13:22:02',
		finishQarantineDay: 6,
	}

	return (
		<Mobile>
			<Label>{data.positive ? t('mystatus.positive.label') : t('mystatus.negative.label')}</Label>
			<InfoStatusBar state={data.positive}>
				<Status x={ContainerEnumPosition.LEFT}>
					<Icon name={data.positive ? 'notification' : 'check'} />
					<Title>{t('mystatus.positive.title')}</Title>
				</Status>
			</InfoStatusBar>
			<Content type={ContainerEnumType.COL} x={ContainerEnumPosition.TOP}>
				<Date>{data.date}</Date>
				<Description>
					{data.positive
						? t('mystatus.positive.description')
						: t('mystatus.negative.description', { count: data.finishQarantineDay })}
				</Description>
				<Button onClick={() => history.push('/test-reusults')}>{t('mystatus.button_one')}</Button>
			</Content>
		</Mobile>
	)
}
export default Home
