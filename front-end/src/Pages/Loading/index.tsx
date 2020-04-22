//@ts-check
import React, { FC, useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'
import { Icon, Logo } from '../../components'

const Wrapper: FC = styled.div`
	position: relative;
	z-index: 2;
	text-align: center;
	padding-top: 60px;
`

const WrapperLoader: FC = styled.div`
	flex: 1;
`

const Loader = styled(Icon)<{ show: boolean }>`
	position: relative;
	display: ${({ show }) => (show ? 'inline-block' : 'none')};
	color: ${({ theme }) => theme.color.white};
	margin-top: 60px;
	width: 60px;
	height: 60px;
	border-width: 8px;
	border-right-color: transparent;

	@keyframes spin {
		100% {
			transform: rotate(360deg);
		}
	}

	&:before {
		animation: spin 4s linear infinite;
		font-size: 60px;
		position: absolute;
		left: 0;
		top: 0;
	}
`

const Laoding = () => {
	let history = useHistory()
	const [loading, setLoading] = useState(true)

	const lazyLoad = () => {
		const timer = setTimeout(() => {
			setLoading(false)
			return history.push('/navigation')
		}, 1000)

		return () => clearTimeout(timer)
	}

	useEffect(() => {
		lazyLoad()
	})

	return (
		<Wrapper>
			<Logo />
			<WrapperLoader>
				<Loader name="sync-alt-solid" show={loading} />
			</WrapperLoader>
		</Wrapper>
	)
}

export default Laoding
