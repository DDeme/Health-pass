import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Container from '../Container'
import { useTranslation } from 'react-i18next'

const Wrapper: any = styled(Container)`
	background-color: ${({ theme }) => theme.color.lightblack};
	flex: initial;
	padding: 20px;
	color: ${({ theme }) => theme.color.white};
	font-size: 16px;
`

const OfflineBar: any = ({ className }) => {
	const [isOnline, seTisOnline] = useState(true)
	const { t } = useTranslation()

	useEffect(() => {
		setTimeout(() => {
			!navigator.onLine && seTisOnline(navigator.onLine)
		}, 1000)
	}, [isOnline])

	// TODO get time and show this bar when I am offline
	const time = '12:00:10'

	return !isOnline && <Wrapper className={className}>{t('offline.title', { time })}</Wrapper>
}
export default OfflineBar
