import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'
import { verifyPass } from '../../services'
import {
	Container,
	ContainerEnumType,
	StatusBar,
	UserInfoBlog,
	Button as ButtonC,
	Icon,
	ContainerEnumPosition,
	QRCodeScanner,
} from '../../components'
import { Mobile } from '../../layouts'
import { useTranslation } from 'react-i18next'

const Content: any = styled(Container)`
	max-width: 320px;
	width: 100%;
	padding: 30px 20px;
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

const Info = styled.h2`
	margin-top: 30px;
	font-size: 18px;
	font-weight: bold;
	color: ${({ theme }) => theme.color.purple};
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

const Button: any = styled(ButtonC)`
	margin-top: 30px;
`
interface Data {
	name?: string
	age?: string
	region?: string
	country?: string
	movementAllowed?: boolean
	iat?: number
	exp?: number
}

const Scanning: any = () => {
	const { t } = useTranslation()
	const history = useHistory()
	const [scan, setScan] = useState('')
	const results: Data = {}
	const [data, setData] = useState(results)

	useEffect(() => {
		// TODO vypnuť cameru po redirecte
		try {
			const certificate = verifyPass(scan)
			if (certificate !== null) {
				setData(certificate)
			}
		} catch {
			setData({})
			history.push('/notfound')
		}
	}, [history, scan])

	return (
		<Mobile>
			{false ? (
				<Content type={ContainerEnumType.COL} x={ContainerEnumPosition.TOP}>
					<QRCodeScanner onScan={res => setScan(res)} onError={() => setScan('')} />
					<Info>{t('scanning.title')}</Info>
				</Content>
			) : (
				<Container type={ContainerEnumType.COL}>
					<StatusBar state={data.movementAllowed}>
						<>
							<IconStatus name={data.movementAllowed ? 'close' : 'check'} />
							<Title>{data.movementAllowed ? t('results.positive.title') : t('results.negative.title')}</Title>
						</>
					</StatusBar>
					<Content type={ContainerEnumType.COL} x={ContainerEnumPosition.TOP}>
						<UserInfoBlog data={data} />
						<Button onClick={() => setData({})}>{t('scanning.button_one')}</Button>
					</Content>
				</Container>
			)}
		</Mobile>
	)
}

export default Scanning
