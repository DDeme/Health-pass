//@ts-check
import React, { FC, useEffect } from 'react'
import styled from 'styled-components'
import { Icon, Logo as LogoC, Container as ContainerC } from '../../components'

const Wrapper: FC = styled(ContainerC)`
	background-color: ${({ theme }) => theme.color.purple};
	width: 100%;
`

const Logo: FC = styled(LogoC)`
	position: relative;
	padding: 120px 0;
`

const Loader = styled(Icon)<{ show: boolean }>`
	position: absolute;
	bottom: 0;
	width: 60px;
	height: 60px;
	animation: spin 4s linear infinite;

	@keyframes spin {
		100% {
			transform: rotate(360deg);
		}
	}

	&:before {
		font-size: 60px;
		width: 60px;
		height: 60px;
	}
`

const Laoding = () => {
	return (
		<Wrapper>
			<Logo>
				<Loader name="sync-alt-solid" />
			</Logo>
		</Wrapper>
	)
}

export default Laoding
