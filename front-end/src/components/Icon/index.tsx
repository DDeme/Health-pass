//@ts-check
import React, { FC } from 'react'
import './style.css'

import styled from 'styled-components'

const Wrapper: FC<StyledProps> = styled.i``

interface StyledProps {
	className?: string
}

interface IconProps {
	name: string
}

const Icon: FC<IconProps> = ({ name }): JSX.Element => (
	<Wrapper className={`icon icon-${name}`} />
)

export default Icon
