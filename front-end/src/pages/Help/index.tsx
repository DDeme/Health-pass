//@ts-check
import React, { FC } from 'react'
import styled from 'styled-components'
import { Navigation } from '../../layouts'

const Content: FC = styled.div`
	max-width: 320px;
	width: 100%;
	padding: 30px 20px;
`

const Help = () => {
	return (
		<Navigation>
			<Content>Help page in progress...</Content>
		</Navigation>
	)
}
export default Help
