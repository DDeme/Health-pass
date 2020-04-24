//@ts-check
import React, { FC, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'
import { Icon, Logo as LogoC } from '../../components'

const Wrapper: FC = styled.div`
	position: relative;
	z-index: 2;
	text-align: center;
`

const Logo: FC = styled(LogoC)`
	padding-bottom: 60px;
`

const Loader = styled(Icon)<{ show: boolean }>`
	flex: 1;
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
	let history = useHistory()

	const lazyLoad = () => {
		const timer = setTimeout(() => {
			return history.push('/home')
		}, 1000)

		return () => clearTimeout(timer)
	}

	useEffect(() => {
		lazyLoad()
	})

	return (
		<Wrapper>
			<Logo />
			<Loader name="sync-alt-solid" />
		</Wrapper>
	)
}

export default Laoding
