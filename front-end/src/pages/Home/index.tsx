import React, { FC } from 'react'
import styled from 'styled-components'
import { Button } from '../../components'
import { Navigation } from '../../layouts'
import { Link as LinkR } from 'react-router-dom'
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

const Home = () => {
	const { t } = useTranslation()

	return (
		<Navigation>
			<List>
				<Link to="/login">
					<Item>{t('home.button_one')}</Item>
				</Link>
				<Link to="/">
					<Item>{t('home.button_two')}</Item>
				</Link>
				<Link to="/">
					<Item>{t('home.button_three')}</Item>
				</Link>
			</List>
		</Navigation>
	)
}
export default Home
