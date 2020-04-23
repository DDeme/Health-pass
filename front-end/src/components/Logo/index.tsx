import React from 'react'
import styled from 'styled-components'
import Icon from '../Icon'
import { useTranslation } from 'react-i18next'
import { Link as LinkR } from 'react-router-dom'

const Wrapper = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`

const Link = styled(LinkR)`
	position: absolute;
	left: 0;
	top: 0;
	bottom: 0;
	width: 70px;
	height: 100%;

	&:hover {
		background-color: ${({ theme }) => theme.color.purple};
	}
`

const IconArrow = styled(Icon)`
	display: inline-block;
	width: 100%;
	height: 100%;

	&:before {
		font-size: 22px;
		width: 24px;
		height: 24px;
		color: ${({ theme }) => theme.color.white};
		position: absolute;
		top: 50%;
		left: 50%;
		bottom: 0;
		right: 0;
		transform: translate(-50%, -50%);
	}
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
			<Link to="/home">
				<IconArrow name="arrow" />
			</Link>
			<IconShield name="shield" />
			<Title>{t('logo.title')}</Title>
		</Wrapper>
	)
}
export default Logo
