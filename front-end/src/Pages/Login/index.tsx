import React, { FC } from 'react'
import styled from 'styled-components'
import { LogoWrapper, Button } from '../../components'
import { Link as LinkR } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const List: FC = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background-color: ${({ theme }) => theme.color.white};
	flex: 1;
	padding-top: 25px;
`
const Link = styled(LinkR)`
	display: inline-block;
	max-width: 280px;
	width: 100%;
`
const Item: FC = styled(Button)`
	margin-top: 30px;
`

const Login = () => {
	const { t } = useTranslation()

	return (
		<LogoWrapper>
			<List>
				<Link to="/2fa">
					<Item>{t('login.button_one')}</Item>
				</Link>
			</List>
		</LogoWrapper>
	)
}
export default Login
