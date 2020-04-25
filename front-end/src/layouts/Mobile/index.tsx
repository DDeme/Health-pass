import React from 'react'
import { Container, ContainerEnumType, ContainerEnumPosition, Menu, OfflineBaner } from '../../components'

const Mobile: any = props => (
	<Container
		className={props.className}
		type={ContainerEnumType.COL}
		y={props.y || ContainerEnumPosition.TOP}
		x={props.x || ContainerEnumPosition.LEFT}>
		<Menu />
		<OfflineBaner />
		<Container type={ContainerEnumType.COL}>{props.children}</Container>
	</Container>
)

export default Mobile
