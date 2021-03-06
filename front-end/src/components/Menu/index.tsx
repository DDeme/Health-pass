//@ts-check
import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Icon from '../Icon'
import HamburgerMenu from '../HamburgerMenu'
import Container from '../Container'
import { useTranslation } from 'react-i18next'

const Wrapper = styled(Container)`
	z-index: 1000;
	justify-content: space-between;
	background-color: ${({ theme }) => theme.color.purple};
	padding: 20px;
	flex: initial;
`

const Title = styled.h1`
	position: relative;
	z-index: 2;
	text-transform: uppercase;
	color: ${({ theme }) => theme.color.white};
	font-size: 18px;
	padding: 0 10px;
`

const Menu = props => {
	const { t } = useTranslation()

	return (
		<Wrapper className={props.className}>
			<HamburgerMenu visibleMenu={props.visibleMenu || true} />
			<Container>
				<Link to="/">
					<Container>
						<Icon name="shield" />
						<Title>{t('logo.title')}</Title>
					</Container>
				</Link>
			</Container>
			<Link to="/notifications">
				<Icon name="bell" />
			</Link>
		</Wrapper>
	)
}
export default Menu
