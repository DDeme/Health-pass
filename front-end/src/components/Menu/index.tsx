import React from 'react'
import styled from 'styled-components'
import Icon from '../Icon'
import HamburgerMenu from '../HamburgerMenu'
import { useTranslation } from 'react-i18next'

const Wrapper = styled.div`
	position: relative;
	z-index: 1;
	display: flex;
	align-items: center;
	justify-content: space-between;
	background-color: ${({ theme }) => theme.color.purple};
`

const Shield = styled(Icon)`
	position: relative;
	z-index: 2;
	display: inline-block;
	height: 30px;
	width: 30px;
	color: ${({ theme }) => theme.color.white};

	&:before {
		font-size: 22px;
		color: ${({ theme }) => theme.color.white};
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}
`

const Title = styled.h1`
	position: relative;
	z-index: 2;
	text-transform: uppercase;
	color: ${({ theme }) => theme.color.white};
	font-size: 18px;
	padding: 0 10px;
`

const Box = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex: 1;
`

const Menu = props => {
	const { t } = useTranslation()

	return (
		<Wrapper className={props.className}>
			<HamburgerMenu visibleMenu />
			<Box>
				<Shield name="shield" />
				<Title>{t('logo.title')}</Title>
			</Box>
			<Shield name="bell" />
		</Wrapper>
	)
}
export default Menu
