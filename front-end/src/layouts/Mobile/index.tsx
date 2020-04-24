import React from 'react'
import {
	Container,
	ContainerEnumType,
	ContainerEnumPosition,
	Menu,
} from '../../components'

const Mobile: any = props => (
	<Container
		className={props.className}
		type={ContainerEnumType.COL}
		y={ContainerEnumPosition.TOP}>
		<Menu />
		<Container type={ContainerEnumType.COL}>{props.children}</Container>
	</Container>
)

export default Mobile
