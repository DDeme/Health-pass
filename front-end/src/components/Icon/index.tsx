//@ts-check
import React from 'react'
import styled from 'styled-components'

// STYLES FROM ICOMOON
import './style.css'

const Wrapper = styled.i`
	display: inline-block;
	position: relative;
	z-index: 1;
	width: 30px;
	height: 30px;

	&:before {
		color: ${({ theme }) => theme.color.white};
		font-size: 22px;
		width: 20px;
		height: 20px;
		position: absolute;
		top: 50%;
		left: 50%;
		bottom: 0;
		right: 0;
		transform: translate(-50%, -50%);
	}
`

const Icon: any = ({ name, className }): any => <Wrapper className={`icon icon-${name} ${className} rotate`} />

export default Icon
export const getListIcons = () => require('./selection.json')
