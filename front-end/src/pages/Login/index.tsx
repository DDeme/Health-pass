import React from 'react'
import { useHistory } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import styled from 'styled-components'
import { Button as ButtonC, Input as InputC } from '../../components'
import LayoutNavigation from '../../layouts/Navigation'
import { useTranslation } from 'react-i18next'

const List: any = styled.form`
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
	phone: number
}

const Login = () => {
	let history = useHistory()
	const { t } = useTranslation()
	const { register, handleSubmit, watch, errors } = useForm<FormData>()
	const onSubmit = data => {
		// TODO send data to server and add verify for push history
		console.log(data)

		if (!Object.keys(errors).length) {
			history.push('/verification')
		}
	}

	return (
		<LayoutNavigation>
			<List onSubmit={handleSubmit(onSubmit)}>
				<Input
					type="string"
					name="citizen"
					register={register({ required: true })}
					value={watch('citizen')}
					label={t('login.label_one')}
					placeholder={t('login.placeholder_one')}
					error={errors.citizen && t('login.error_one')}
					info={t('login.info_one')}
				/>
				<Input
					type="tel"
					name="phone"
					register={register({
						required: true,
						// eslint-disable-next-line
						pattern: /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im,
					})}
					value={watch('phone')}
					label={t('login.label_two')}
					placeholder={t('login.placeholder_two')}
					error={errors.phone && t('login.error_two')}
					info={t('login.info_two')}
				/>
				<Button type="submit">{t('login.button_one')}</Button>
			</List>
		</LayoutNavigation>
	)
}
export default Login
