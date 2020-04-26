//@ts-check
import React from 'react'
import styled from 'styled-components'
import { Container, ContainerEnumType, StatusBar, UserInfoBlog, Icon, ContainerEnumPosition } from '../../components'
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

const IconStatus = styled(Icon)`
	height: 60px;
	width: 60px;

	&:before {
		font-size: 60px;
		height: 60px;
		width: 60px;
	}
`

const ScanResult: any = () => {
	const { t } = useTranslation()

	const conditionisNegative = false

	const data = {
		name: 'Ďuri Traktorista',
		age: 20,
		region: 'Michalovce',
		country: 'Slovakia',
	}

	return (
		<Mobile>
			<Container type={ContainerEnumType.COL}>
				<StatusBar state={conditionisNegative}>
					<>
						<IconStatus name="check" />
						<Title>{t('results.negative.title')}</Title>
					</>
				</StatusBar>
				<Content type={ContainerEnumType.COL} x={ContainerEnumPosition.TOP}>
					<UserInfoBlog data={data} />
					{/* <Button onClick={}>{t('scanning.button_one')}</Button> */}
				</Content>
			</Container>
		</Mobile>
	)
}

export default ScanResult
