import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	flex: 1;
	padding-top: 25px;
	background-color: ${({ theme }) => theme.color.white};
`

const Container = props => (
	<Wrapper className={props.className}>{props.children}</Wrapper>
)

export default Container
