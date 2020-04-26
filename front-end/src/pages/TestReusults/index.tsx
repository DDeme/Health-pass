//@ts-check
import React, { FC } from 'react'
import styled from 'styled-components'
import { ContainerEnumType, ContainerEnumPosition, Container } from '../../components'
import { Mobile } from '../../layouts'
import { useTranslation } from 'react-i18next'

import { Loading, NotFound } from '../../pages'
import { QUERY_TESTRESULTS } from '../../gql/queries'
import { useQuery } from '@apollo/react-hooks'

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

const TestReusults = () => {
	const { t } = useTranslation()

	const { loading, error, data } = useQuery(QUERY_TESTRESULTS)
	if (loading) return <Loading />
	if (error) return <NotFound />
	if (!data) return <NotFound />

	// TODO v back-ende prementovat test_results na testResults
	const testResults = data.test_results

	return (
		<Mobile>
			<Content type={ContainerEnumType.COL} x={ContainerEnumPosition.TOP}>
				<Label>{t('test_results.label')}</Label>
				{testResults &&
					testResults.map((item, i) => (
						<Item key={i} type={ContainerEnumType.COL} x={ContainerEnumPosition.TOP}>
							<Date>
								{item.published} - {item.title}
							</Date>
							<Description>{item.message}</Description>
						</Item>
					))}
			</Content>
		</Mobile>
	)
}

export default TestReusults
