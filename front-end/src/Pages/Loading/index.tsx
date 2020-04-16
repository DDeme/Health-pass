//@ts-check
import React, { FC } from 'react'
import styled from 'styled-components'
import { Box, Typography, TypographyProps } from '@material-ui/core'
import { useTranslation } from 'react-i18next'

const Title: FC<TypographyProps> = styled(Typography)`
	text-transform: uppercase;
	color: ${props => props.theme.palette.primary[50]};
`

const Laoding: FC = (): JSX.Element => {
	const { t } = useTranslation()

	return (
		<Box
			height="100%"
			display="flex"
			alignItems="center"
			justifyContent="center"
			fontWeight={'fontWeightBold'}>
			<Title variant="h5">{t('welcome.title')}</Title>
		</Box>
	)
}

export default Laoding
