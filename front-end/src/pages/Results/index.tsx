//@ts-check
import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import styled from 'styled-components'
import {
	Button,
	StatusBar,
	ContainerEnumType,
	Container,
	QRCodeGenerator,
	UserInfoBlog,
	NotificationBlog,
	Icon,
} from '../../components'
import { Mobile } from '../../layouts'
import { useTranslation } from 'react-i18next'

import { Loading, NotFound } from '../../pages'
import { QUERY_RESULTS } from '../../gql/queries'
import { useQuery } from '@apollo/react-hooks'
import { verifyPass } from '../../services'

const Content: any = styled(Container)`
	max-width: 320px;
	text-align: center;
	padding: 50px 20px;
`

const ImageQRCode: any = styled(QRCodeGenerator)`
	display: inline-block;
	width: 100%;
	margin-top: 30px;
	zoom: 1.1;
`

const Title = styled.h2`
	text-transform: uppercase;
	position: relative;
	z-index: 2;
	padding: 30px 15px 15px;
	font-size: 18px;
	font-weight: bold;
	color: ${({ theme }) => theme.color.white};
`

const IconStatus = styled(Icon)`
	height: 60px;
	width: 60px;

	&:before {
		font-size: 60px;
		height: 60px;
		width: 60px;
	}
`

const ButtonPrint = styled(Button)`
	margin-top: 30px;
`

const Results = () => {
	const { t } = useTranslation()
	let location = useLocation()
	const { loading, error, data } = useQuery(QUERY_RESULTS)

	useEffect(() => {
		data && location.pathname === '/app/results-print' && window.print()
	})

	if (loading) return <Loading />
	if (error) return <NotFound />
	if (!data) return <NotFound />

	const userData = data && verifyPass(data.certificate)
	const status = userData.movementAllowed

	const handlePrint = () => {
		window.print()
	}

	return (
		<Mobile>
			<StatusBar state={!status} className={'media-print'}>
				<>
					<IconStatus name={!status ? 'close' : 'check'} />
					<Title>{!status ? t('results.positive.title') : t('results.negative.title')}</Title>
				</>
			</StatusBar>
			<Content type={ContainerEnumType.COL}>
				<NotificationBlog show={!status} className={'media-print'} />
				<ImageQRCode certificateToken={data.certificate} />
				<UserInfoBlog data={userData} />
				<ButtonPrint type="submit" onClick={() => handlePrint()} className={'media-print'}>
					{t('results.button_one')}
				</ButtonPrint>
			</Content>
		</Mobile>
	)
}

export default Results
