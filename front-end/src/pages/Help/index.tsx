//@ts-check
import React, { FC } from 'react'
import styled from 'styled-components'
import { Navigation } from '../../layouts'
import { TitleMain } from '../../components'
import { useTranslation } from 'react-i18next'

const Content: FC = styled.div`
	max-width: 320px;
	width: 100%;
	padding: 30px 20px;
`

const Help = () => {
	const { t } = useTranslation()

	return (
		<Navigation>
			<Content>
				<TitleMain>{t('help.titleMain')}</TitleMain>
			</Content>
		</Navigation>
	)
}
export default Help
