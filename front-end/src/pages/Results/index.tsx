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

import { Query } from 'react-apollo'
import GQL from '../../gql'

import { gql } from 'apollo-boost'
import { Loading, NotFound } from '../../pages'
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

const REASON_QUERY = gql`
	{
		certificate
		reason {
			title
			type
			message
			published
			end
		}
	}
`

const Success = () => {
	const { t } = useTranslation()

	return (
		<GQL query={REASON_QUERY}>
			{({ data }: any): any => {
				const { certificate, reason } = data
				const userData = verifyPass(certificate)
				console.log(userData, reason)

				return <div>asdfgasg</div>

				// return (
				// 	<Mobile>
				// 		<StatusBar state={data.movementAllowed}>
				// 			<>
				// 				<IconStatus name={data.movementAllowed ? 'close' : 'check'} />
				// 				<Title>{data.movementAllowed ? t('results.positive.title') : t('results.negative.title')}</Title>
				// 			</>
				// 		</StatusBar>
				// 		<Content type={ContainerEnumType.COL}>
				// 			<NotificationBlog show={data.movementAllowed} />
				// 			<ImageQRCode certificateToken={'test'} />
				// 			<UserInfoBlog data={data} />
				// 		</Content>
				// 	</Mobile>
				// )
			}}
		</GQL>
	)
}

export default Success
