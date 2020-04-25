import React from 'react'
import styled from 'styled-components'
import Container from '../Container'

const Wrapper: any = styled(Container)`
	box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 3px -2px,
		rgba(0, 0, 0, 0.14) 0px 3px 4px 0px, rgba(0, 0, 0, 0.12) 0px 1px 8px 0px;
	padding: 30px;
	flex: initial;
`

const BoxShaddow: any = ({ className, children }) => {
	return <Wrapper className={className}>{children}</Wrapper>
}
export default BoxShaddow
