import React, { FC } from 'react'
import styled from 'styled-components'
import { ContainerEnumType, ContainerEnumPosition, Container } from '../../components'
import { Mobile } from '../../layouts'
import { useTranslation } from 'react-i18next'

const Content: any = styled(Container)`
	max-width: 320px;
	width: 100%;
	padding: 30px 20px;
`

const Item: any = styled(Container)`
	text-align: left;
	padding-top: 30px;
	flex: initial;
`

const Label: FC = styled.label`
	width: 100%;
	font-size: 14px;
	color: ${({ theme }) => theme.color.black};
`

const Date: FC = styled.p`
	text-transform: uppercase;
	color: ${({ theme }) => theme.color.black};
	font-size: 16px;
	width: 100%;
`

const Description: FC = styled.p`
	color: ${({ theme }) => theme.color.black};
	font-size: 14px;
	padding: 15px 0;
	line-height: 20px;
	opacity: 0.6;
	text-align: left;
	border-bottom: 1px solid ${({ theme }) => theme.color.black};
`

const Notifications = () => {
	const { t } = useTranslation()

	const data = [
		{
			positive: false,
			date: '25. 4. 2020, 13:22:02',
			finishQarantineDay: 4,
		},
		{
			positive: false,
			date: '28. 2. 2020, 13:22:02',
			finishQarantineDay: 6,
		},
	]

	return (
		<Mobile>
			<Content type={ContainerEnumType.COL} x={ContainerEnumPosition.TOP}>
				<Label>{t('notification.label')}</Label>
				{data &&
					data.map(info => (
						<Item type={ContainerEnumType.COL} x={ContainerEnumPosition.TOP}>
							<Date>
								{info.date} - {info.positive ? t('notification.positive.title') : t('notification.negative.title')}
							</Date>
							<Description>
								{info.positive
									? t('notification.positive.description')
									: t('notification.negative.description', { count: info.finishQarantineDay })}
							</Description>
						</Item>
					))}
			</Content>
		</Mobile>
	)
}

export default Notifications
