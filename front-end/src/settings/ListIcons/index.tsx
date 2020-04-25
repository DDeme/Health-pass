//@ts-check
import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Button, Icon, Container } from '../../components'
import { ContainerEnumType } from '../../components/Container'
import { getListIcons } from '../../components/Icon'
import { Mobile } from '../../layouts'

const List: any = styled(Container)`
	max-width: 320px;
	padding: 30px 20px;
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
	padding: 30px 20px;
	color: ${({ theme }) => theme.color.purple};
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
		<Mobile type={ContainerEnumType.COL}>
			<Title>Copy your icon by click on one item:</Title>
			<List type={ContainerEnumType.COL}>
				{data.map((icon, i): any => {
					const name = `${icon.properties.name}`
					return (
						<Item key={i} type={ContainerEnumType.COL}>
							<ButtonCopy variant="secondary" onClick={() => navigator.clipboard.writeText(name)}>
								<IconType name={name} />
								{name}
							</ButtonCopy>
						</Item>
					)
				})}
			</List>
		</Mobile>
	)
}

export default ListIcons
