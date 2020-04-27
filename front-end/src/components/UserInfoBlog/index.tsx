import React from 'react'
import styled from 'styled-components'
import { useTranslation } from 'react-i18next'
import Container, { ContainerEnumType, ContainerEnumPosition } from '../Container'

const Wrapper = styled(Container)`
	font-size: 14px;
	margin-top: 30px;
	flex: initial;
`

const TitleName = styled.h4`
	font-size: 24px;
	font-weight: bold;
`

const Label = styled.label`
	text-transform: uppercase;
	font-size: 14px;
	opacity: 0.6;
	margin: 20px 0 5px;
`

//@ts-check
const Text = styled.p`
	font-weight: bold;
	font-size: 18px;
`

const Logo: any = props => {
	const { t } = useTranslation()

	return (
		<Wrapper className={props.className} type={ContainerEnumType.COL} y={ContainerEnumPosition.LEFT}>
			<Label>{t('results.info.label_one')}</Label>
			<TitleName>{props.data.name}</TitleName>
			<Label>{t('results.info.label_two')}</Label>
			<Text>{props.data.age}</Text>
			<Label>{t('results.info.label_three')}</Label>
			<Text>{props.data.region}</Text>
			<Label>{t('results.info.label_four')}</Label>
			<Text>{props.data.country}</Text>
		</Wrapper>
	)
}

export default Logo
