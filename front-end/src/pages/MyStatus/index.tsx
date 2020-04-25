import React, { FC } from 'react'
import styled from 'styled-components'
import { Button } from '../../components'
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
			<List>
				<Link to="/">
					<Item>{t('mystatus.button_one')}</Item>
				</Link>
			</List>
		</Mobile>
	)
}
export default Home
