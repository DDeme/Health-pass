import React, { FC } from 'react'
import styled from 'styled-components'

enum ContainerEnumPosition {
	LEFT = 'flex-start',
	RIGHT = 'flex-end',
	TOP = 'flex-start',
	BOTTOM = 'flex-end',
	CENTER = 'center',
}

enum ContainerEnumType {
	ROW = 'row',
	COL = 'column',
}

export type ContainerProps = {
	className?: string
	type?: ContainerEnumType
	x?: ContainerEnumPosition
	y?: ContainerEnumPosition
}

const Wrapper = styled.div<ContainerProps>`
	position: relative;
	display: flex;
	flex-direction: ${({ type }): string => type || ContainerEnumType.ROW};
	justify-content: ${({ x }): string => x || ContainerEnumPosition.CENTER};
	align-items: ${({ y }): string => y || ContainerEnumPosition.CENTER};
	flex: 1;
	width: 100%;
`

const Container: FC<ContainerProps> = ({ children, className, type, x, y }): any => (
	<Wrapper className={className} type={type} x={x} y={y}>
		{children}
	</Wrapper>
)

export { ContainerEnumPosition, ContainerEnumType }
export default Container
