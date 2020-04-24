import React from 'react'
import styled from 'styled-components'
import Icon from '../Icon'
import { useTranslation } from 'react-i18next'

const Wrapper = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
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
const Logo = props => {
	const { t } = useTranslation()

	return (
		<Wrapper className={props.className}>
			<IconShield name="shield" />
			<Title>{t('logo.title')}</Title>
			{props.children}
		</Wrapper>
	)
}

export default Logo
