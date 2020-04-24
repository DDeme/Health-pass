import React, { FC } from 'react'
import styled from 'styled-components'
import {
	StatusBar,
	BoxShaddow as BoxShaddowC,
	Container,
	Icon,
} from '../../components'
import Mobile from '../../layouts/Mobile'
import path from './qrcode.png'
// import { Link as LinkR } from 'react-router-dom'
// import { useTranslation } from 'react-i18next'

const Content: FC = styled(Container)`
	width: 100%;
	height: 100%;
	max-width: 290px;
	padding: 60px 0;
`

const ImageQRCode: any = styled.img`
	display: inline-block;
	width: 100%;
	padding: 30px 20px;
`

const BoxShaddow = styled(BoxShaddowC)`
	padding: 25px;
`

const Success = () => {
	// const { t } = useTranslation()

	return (
		<Mobile>
			<StatusBar state={true} />
			<Content>
				<BoxShaddow>
					<Icon name="notification" />
				</BoxShaddow>
				<ImageQRCode src={path} />
			</Content>
		</Mobile>
	)
}
export default Success
