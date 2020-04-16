//@ts-check
import React, { FC } from 'react'
import styled from 'styled-components'
import { Container } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'

const Title: FC = styled.h1`
	text-transform: uppercase;
	color: ${({ theme }) => theme.color.white};
`

const Laoding: FC = (): JSX.Element => {
	const { t } = useTranslation()

	return (
		<Container>
			<Title>{t('welcome.title')}</Title>
		</Container>
	)
}

export default Laoding
