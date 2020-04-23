import React from 'react'
import { useForm } from 'react-hook-form'
import styled from 'styled-components'
import {
	LogoWrapper,
	Button as ButtonC,
	Input as InputC,
} from '../../components'
import { Link as LinkR } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const List: any = styled.form`
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

const Input: any = styled(InputC)`
	margin-top: 30px;
`

const Button: any = styled(ButtonC)`
	margin-top: 30px;
`

type FormData = {
	citizen: string
	phone: string
}

const Login = () => {
	const { t } = useTranslation()
	const { register, handleSubmit, watch, errors } = useForm()

	const onSubmit: any = handleSubmit(({ citizen, phone }) => {
		console.log(citizen, phone)
	})
	console.log(watch('example'))

	return (
		<LogoWrapper>
			<List onSubmit={handleSubmit(onSubmit)}>
				<Input
					name="citizen"
					ref={register({ required: true, maxLength: 20 })}
					label={t('login.label_one')}
					placeholder={t('login.placeholder_one')}
				/>
				{errors.exampleRequired && <span>{t('login.error_one')}</span>}
				<Input
					type="tel"
					name="phone"
					ref={register({
						pattern: /^(\()?\d{3}(\))?(-|\s)?\d{3}(-|\s)\d{4}$/,
					})}
					label={t('login.label_two')}
					placeholder={t('login.placeholder_two')}
				/>
				{errors.exampleRequired && <span>{t('login.error_two')}</span>}
				<Link to="/verification">
					<Button type="submit">{t('login.button_one')}</Button>
				</Link>
			</List>
		</LogoWrapper>
	)
}
export default Login
