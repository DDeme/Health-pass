//@ts-check
import React from 'react'
import { Container, ContainerEnumType, ContainerEnumPosition, Menu, OfflineBar } from '../../components'

const Mobile: any = ({ className, x, y, children }) => (
	<Container
		className={className}
		type={ContainerEnumType.COL}
		y={y || ContainerEnumPosition.TOP}
		x={x || ContainerEnumPosition.LEFT}>
		<Menu className={'media-print'} />
		<OfflineBar className={'media-print'} />
		<Container type={ContainerEnumType.COL}>{children}</Container>
	</Container>
)

export default Mobile
