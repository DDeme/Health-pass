//@ts-check
import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Button, Icon, Container } from '../../components'
import { ContainerEnumType } from '../../components/Container'
import { getListIcons } from '../../components/Icon'

const Wrapper: any = styled(Container)`
	background-color: ${({ theme }) => theme.color.purple};
	color: ${({ theme }) => theme.color.white};
	padding: 15px;
`

const List: any = styled(Container)`
	max-width: 320px;
	background-color: ${({ theme }) => theme.color.white};
	padding: 10px;
	border-radius: 5px;
`

const Item: any = styled(Container)`
	padding-top: 10px;

	&:first-child {
		padding: 0;
	}
`

const Title: any = styled.h1`
	display: block;
	font-size: 24px;
	font-weight: bold;
	padding-bottom: 30px;
`

const IconType: any = styled(Icon)`
	position: absolute;
	left: 10px;
	top: 50%;
	transform: translateY(-50%);
`

const ButtonCopy: any = styled(Button)`
	position: relative;
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 16px;
	padding: 15px 15px 15px 60px;

	&:hover {
		${IconType} {
			&:before {
				color: ${({ theme }) => theme.color.purple};
			}
		}
	}
`

const ListIcons: any = (): any => {
	const [data, setData] = useState([{ properties: { name: '' } }])

	useEffect(() => {
		const { icons }: any = getListIcons()
		setData(icons)
	}, [])

	console.log(data)

	return (
		<Wrapper type={ContainerEnumType.COL}>
			<Title>Copy your icon by click on one item:</Title>
			<List type={ContainerEnumType.COL}>
				{data.map((icon, i): any => {
					const name = `${icon.properties.name}`
					return (
						<Item key={i} type={ContainerEnumType.COL}>
							<ButtonCopy
								variant="secondary"
								onClick={() => navigator.clipboard.writeText(name)}>
								<IconType name={name} />
								{name}
							</ButtonCopy>
						</Item>
					)
				})}
			</List>
		</Wrapper>
	)
}

export default ListIcons
