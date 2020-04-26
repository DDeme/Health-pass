//@ts-check
import React from 'react'
import styled from 'styled-components'
import Icon from '../Icon'
import { useTranslation } from 'react-i18next'
import Container, { ContainerEnumType } from '../Container'

const Wrapper: any = styled(Container)`
	padding-top: 30px;
`

const IconShield = styled(Icon)`
	height: 100px;
	width: 100px;

	&:before {
		font-size: 100px;
		height: 100px;
		width: 100px;
	}
`

const Title = styled.h1`
	text-transform: uppercase;
	color: ${({ theme }) => theme.color.white};
	margin-top: 30px;
	font-size: 24px;
	padding: 0 10px;
	position: relative;
	z-index: 2;
`
const Logo: any = props => {
	const { t } = useTranslation()

	return (
		<Wrapper className={props.className} type={props.type || ContainerEnumType.COL}>
			<IconShield name="shield" />
			<Title>{t('logo.title')}</Title>
			{props.children}
		</Wrapper>
	)
}

export default Logo
