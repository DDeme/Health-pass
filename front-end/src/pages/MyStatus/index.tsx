import React, { FC } from 'react'
import styled from 'styled-components'
import { Button, Container } from '../../components'
import { Mobile } from '../../layouts'
import { Link as LinkR } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const List: FC = styled.div`
	max-width: 280px;
	width: 100%;
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
		<Mobile>
			<Container>
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
			</Container>
		</Mobile>
	)
}
export default Home
