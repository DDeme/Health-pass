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
// import { useQuery } from '@apollo/react-hooks'
// import { gql } from 'apollo-boost'

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

const Success = () => {
	const { t } = useTranslation()
	const data = {
		age: '28',
		country: 'Slovakia',
		exp: 1587766108,
		iat: 1587679708,
		movementAllowed: true,
		name: 'John Doe',
		region: 'Poprad',
	}

	return (
		<Mobile>
			<StatusBar state={data.movementAllowed}>
				<>
					<IconStatus name={data.movementAllowed ? 'close' : 'check'} />
					<Title>{data.movementAllowed ? t('results.positive.title') : t('results.negative.title')}</Title>
				</>
			</StatusBar>
			<Content type={ContainerEnumType.COL}>
				<NotificationBlog show={data.movementAllowed} />
				<ImageQRCode certificateToken={'test'} />
				<UserInfoBlog data={data} />
			</Content>
		</Mobile>
	)
}

export default Success
