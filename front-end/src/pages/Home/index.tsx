//@ts-check
import React, { FC } from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'
import { Button, TitleMain } from '../../components'
import { Navigation } from '../../layouts'
import { useTranslation } from 'react-i18next'

const List: FC = styled.div`
	max-width: 320px;
	width: 100%;
	padding: 30px 20px;
`

const ButtonLink: any = styled(Button)`
	margin-top: 30px;
`

const Home = () => {
	const { t } = useTranslation()
	const history = useHistory()

	return (
		<Navigation>
			<TitleMain>{t('home.titleMain')}</TitleMain>
			<List>
				<ButtonLink onClick={() => history.push('/login')}>{t('home.button_one')}</ButtonLink>
				<ButtonLink onClick={() => history.push('/scanning')}>{t('home.button_two')}</ButtonLink>
				<ButtonLink onClick={() => history.push('/verify')}>{t('home.button_three')}</ButtonLink>
			</List>
		</Navigation>
	)
}
export default Home
