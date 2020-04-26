//@ts-check
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

import { Loading, NotFound } from '../../pages'
import { QUERY_MYSTATUS } from '../../gql/queries'
import { useQuery } from '@apollo/react-hooks'

const InfoStatusBar: any = styled(StatusBar)`
	padding: 20px;
	flex: initial;

	&:after {
		display: none;
	}
`

const Status: any = styled(Container)`
	max-width: 320px;
	width: 100%;
	padding: 0 20px;
`

const Label: FC = styled.label`
	font-size: 14px;
	color: ${({ theme }) => theme.color.black};
	font-size: 14px;
	max-width: 320px;
	width: 100%;
	padding: 25px 20px;
`

const Title: FC = styled.h3`
	text-transform: capitalize;
	color: ${({ theme }) => theme.color.white};
	font-size: 24px;
	padding-left: 15px;
`

const Date: FC = styled.p`
	text-transform: uppercase;
	color: ${({ theme }) => theme.color.black};
	font-size: 16px;
	max-width: 320px;
	width: 100%;
	padding: 25px 20px 0;
`

const Description: FC = styled.p`
	position: relative;
	color: ${({ theme }) => theme.color.black};
	font-size: 14px;
	line-height: 20px;
	opacity: 0.6;
	text-align: left;
	max-width: 320px;
	width: 100%;
	padding: 15px 20px 25px;
	margin-bottom: 15px;

	&:after {
		position: absolute;
		content: '';
		border-bottom: 1px solid ${({ theme }) => theme.color.black};
		left: 20px;
		bottom: 0;
		width: calc(100% - 40px);
	}
`

const Button: any = styled(ButtonC)`
	margin: 30px 0;
	width: 100%;
`

const Home = () => {
	const history = useHistory()
	const { t } = useTranslation()

	const { loading, error, data } = useQuery(QUERY_MYSTATUS)
	if (loading) return <Loading />
	if (error) return <NotFound />
	if (!data) return <NotFound />

	console.log(data)

	const reason = data.reason
	const testResults = data.test_results[0]

	// TODO reason && testResults = undefined dorobit stranku no date avalaible...

	return (
		<Mobile>
			<Container type={ContainerEnumType.COL} x={ContainerEnumPosition.TOP}>
				{reason && (
					<>
						<Label>{t('my_status.positive.label')}</Label>
						<InfoStatusBar state={true}>
							<Status x={ContainerEnumPosition.LEFT}>
								<Icon name="notification" />
								<Title>{reason.title}</Title>
							</Status>
						</InfoStatusBar>
						<Date>{reason.published}</Date>
						<Description>{reason.message}</Description>
					</>
				)}
				{!!data.test_results.length && (
					<>
						<Label>{t('my_status.negative.label')}</Label>
						<InfoStatusBar state={testResults.title.toUpperCase().includes('POSITIVE')}>
							<Status x={ContainerEnumPosition.LEFT}>
								<Icon name={testResults.title.toUpperCase().includes('POSITIVE') ? 'notification' : 'check'} />
								<Title>{testResults.title}</Title>
							</Status>
						</InfoStatusBar>
						<Date>{testResults.published}</Date>
						<Description>{testResults.message}</Description>
					</>
				)}
				<Button onClick={() => history.push('/test-reusults')}>{t('my_status.button_one')}</Button>
			</Container>
		</Mobile>
	)
}
export default Home
