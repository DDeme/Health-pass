//@ts-check
import React from 'react'
import styled from 'styled-components'

const Title = styled.h2`
	max-width: 320px;
	padding: 0 20px;
	width: 100%;
	text-align: left;
	color: ${({ theme }) => theme.color.black};
	font-size: 14px;
`

const TitleMain: any = ({ className, children }) => {
	return <Title className={className}>{children}</Title>
}
export default TitleMain
