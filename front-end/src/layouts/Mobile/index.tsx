import React from 'react'
import styled from 'styled-components'
import { Container, ContainerEnumType, Menu } from '../../components'

const Wrapper = styled(Container)`
	overflow: auto;
	display: flex;
`

const Mobile: any = props => (
	<Wrapper className={props.className} type={ContainerEnumType.COL}>
		<Menu />
		<Container type={ContainerEnumType.COL}>{props.children}</Container>
	</Wrapper>
)

export default Mobile
