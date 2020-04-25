import React from 'react'
import { Container, ContainerEnumType, ContainerEnumPosition, Menu } from '../../components'

const Mobile: any = props => (
	<Container
		className={props.className}
		type={ContainerEnumType.COL}
		y={props.y || ContainerEnumPosition.TOP}
		x={props.x || ContainerEnumPosition.LEFT}>
		<Menu />
		<Container type={ContainerEnumType.COL}>{props.children}</Container>
	</Container>
)

export default Mobile
