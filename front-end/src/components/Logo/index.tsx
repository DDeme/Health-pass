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
`

const IconShield = styled(Icon)`
	display: inline-block;
	height: 175px;
	width: 175px;
	color: ${({ theme }) => theme.color.white};
	margin-top: 40px;

	&:before {
		color: ${({ theme }) => theme.color.white};
		font-size: 180px;
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
			{props.children}
			<IconShield name="shield" />
			<Title>{t('logo.title')}</Title>
		</Wrapper>
	)
}
export default Logo
