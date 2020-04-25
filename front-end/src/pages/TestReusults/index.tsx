import React, { FC } from 'react'
import styled from 'styled-components'
import { ContainerEnumType, ContainerEnumPosition, Container } from '../../components'
import { Mobile } from '../../layouts'
import { useTranslation } from 'react-i18next'

const Content: any = styled(Container)`
	max-width: 350px;
	text-align: center;
	padding: 60px 0;
`

const Label: FC = styled.label`
	max-width: 350px;
	width: 100%;
	font-size: 14px;
	color: ${({ theme }) => theme.color.black};
	font-size: 14px;
	padding: 25px 0;
	margin: 0 30px;
`

const Date: FC = styled.p`
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

const TestReusults = () => {
	const { t } = useTranslation()

	const data = {
		positive: true,
		date: '25. 4. 2020, 13:22:02',
		finishQarantineDay: 6,
	}

	return (
		<Mobile>
			<Content type={ContainerEnumType.COL} x={ContainerEnumPosition.TOP}>
				<Label>{data.positive ? t('my_status.positive.label') : t('my_status.negative.label')}</Label>
				<Date>{data.date}</Date>
				<Description>
					{data.positive
						? t('my_status.positive.description')
						: t('my_status.negative.description', { count: data.finishQarantineDay })}
				</Description>
			</Content>
		</Mobile>
	)
}

export default TestReusults
