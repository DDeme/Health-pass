import React from 'react'
import styled from 'styled-components'
import {
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
import { CERTIFICATE_QUERY } from '../../gql/queries'
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

const Success = () => {
	const { t } = useTranslation()
	const { loading, error, data } = useQuery(CERTIFICATE_QUERY)
	if (loading) return <Loading />
	if (error) return <NotFound />
	if (!data) return <NotFound />

	const userDate = data && verifyPass(data.certificate)

	return (
		<Mobile>
			<StatusBar state={userDate.movementAllowed}>
				<>
					<IconStatus name={userDate.movementAllowed ? 'close' : 'check'} />
					<Title>{userDate.movementAllowed ? t('results.positive.title') : t('results.negative.title')}</Title>
				</>
			</StatusBar>
			<Content type={ContainerEnumType.COL}>
				<NotificationBlog show={userDate.movementAllowed} />
				<ImageQRCode certificateToken={'test'} />
				<UserInfoBlog data={userDate} />
			</Content>
		</Mobile>
	)
}

export default Success
