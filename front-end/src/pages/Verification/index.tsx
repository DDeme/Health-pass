import React from 'react'
import { useHistory } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import styled from 'styled-components'
import { Button as ButtonC, Input as InputC } from '../../components'
import { Navigation } from '../../layouts'
import { useTranslation } from 'react-i18next'

const List: any = styled.form`
	max-width: 320px;
	width: 100%;
	padding: 30px 20px;
`

const Input: any = styled(InputC)`
	margin-top: 30px;
`

const Button: any = styled(ButtonC)`
	margin-top: 60px;
`

type FormData = {
	verification: string
}

const Verification = () => {
	const history = useHistory()
	const { t } = useTranslation()
	const { register, handleSubmit, watch, errors } = useForm<FormData>()
	const onSubmit = data => {
		// TODO send data to server and add verify for push history
		console.log(data)

		if (!Object.keys(errors).length) {
			history.push('/results')
		}
	}
	return (
		<Navigation>
			<List onSubmit={handleSubmit(onSubmit)}>
				<Input
					type="string"
					name="verification"
					register={register({ required: true })}
					value={watch('verification') || ''}
					label={t('verification.label_one')}
					placeholder={t('verification.placeholder_one')}
					errors={errors.verification && t('verification.error_one')}
					info={t('verification.info_one')}
				/>
				<Button type="submit">{t('verification.button_one')}</Button>
			</List>
		</Navigation>
	)
}
export default Verification
