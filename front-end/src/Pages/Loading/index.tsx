//@ts-check
import React, { FC } from 'react'
import styled from 'styled-components'
// import { Container } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import { Icon } from '../../components'

const Wrapper: FC = styled.div`
	display: flex;
	align-items: center;
	flex-direction: column;
	justify-content: center;
	height: 100%;
`

const Title: FC = styled.h1`
	text-transform: uppercase;
	color: ${({ theme }) => theme.color.white};
`

const Laoding: FC = (props): JSX.Element => {
	const { t } = useTranslation()
	console.log(props)

	return (
		<Wrapper>
			<Icon name="shield" />
			<Title>{t('welcome.title')}</Title>
		</Wrapper>
	)
}

export default Laoding
