//@ts-check
import React, { FC, useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'
import { Spinner } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import { Icon } from '../../components'

const Navigation = () => {
	return <div>See My certificate</div>
}

const Wrapper: FC = styled.div`
	display: flex;
	align-items: center;
	flex-direction: column;
	justify-content: center;
	height: 100%;
`

const Logo = styled(Icon)`
	text-transform: uppercase;
	color: ${({ theme }) => theme.color.white};
	font-size: 180px;
`

const Title = styled.h1`
	text-transform: uppercase;
	color: ${({ theme }) => theme.color.white};
	margin-top: 30px;
	font-size: 24px;
`

const Loader = styled(Spinner)`
	color: ${({ theme }) => theme.color.white};
	margin-top: 30px;
	width: 60px;
	height: 60px;
	border-width: 8px;
	border-right-color: transparent;
`

const Laoding = () => {
	let history = useHistory()
	const [loading, setLoading] = useState(true)
	const { t } = useTranslation()

	console.log(history)

	useEffect(() => {
		// TODO start page
		const timer = setTimeout(() => {
			setLoading(false)
			// TODO redirect to home
			// return history.push('/home')
		}, 500)

		return () => clearTimeout(timer)
	}, [])

	return (
		<Wrapper>
			<Logo name="shield" />
			<Title>{t('welcome.title')}</Title>
			{loading && <Loader animation="border" />}
			<Navigation />
		</Wrapper>
	)
}

export default Laoding
