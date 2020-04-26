//@ts-check
import React, { FC } from 'react'
import { Link as LinkR } from 'react-router-dom'
import styled from 'styled-components'
import { Button } from '../../components'
import { Navigation } from '../../layouts'
import { useTranslation } from 'react-i18next'

const List: FC = styled.div`
	max-width: 320px;
	width: 100%;
	padding: 30px 20px;
`

const Link = styled(LinkR)`
	display: inline-block;
	width: 100%;
`

const Item: FC = styled(Button)`
	margin-top: 30px;
`

const TitleMain: FC = styled.h2`
	max-width: 320px;
	padding: 0 20px;
	width: 100%;
	text-align: left;
	color: ${({ theme }) => theme.color.black};
	font-size: 14px;
`

const Home = () => {
	const { t } = useTranslation()

	return (
		<Navigation>
			<TitleMain>{t('home.title')}</TitleMain>
			<List>
				<Link to="/login">
					<Item>{t('home.button_one')}</Item>
				</Link>
				<Link to="/scanning">
					<Item>{t('home.button_two')}</Item>
				</Link>
				<Link to="/verifyphonenumber">
					<Item>{t('home.button_three')}</Item>
				</Link>
			</List>
		</Navigation>
	)
}
export default Home
