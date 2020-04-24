//@ts-check
import React, { FC } from 'react'
import styled from 'styled-components'

// styles ./style.css from icomoon
import './style.css'

const Icon: any = ({ name, className }): any => (
	<i className={`icon icon-${name} ${className} rotate`} />
)

const ListIcons: FC = styled.ul`
	color: ${({ theme }) => theme.color.white};
	text-align: center;
	overflow: hidden;
	overflow: auto;
	width: 100%;
	padding: 30px 0;
`

const Item: FC = styled.li`
	display: flex;
	align-items: center;
	flex-direction: column;
	flex-wrap: wrap;
	justify-content: center;
	flex: 1;
	padding: 15px;
	font-size: 30px;
`

const WrapperIconsTitle: any = styled.button`
	margin-top: 10px;
	font-size: 16px;
	padding: 5px 12px;
	background: ${({ theme }) => theme.color.white};
	border: 1px solid ${({ theme }) => theme.color.white};
	color: ${({ theme }) => theme.color.black};
	border-radius: 3px;

	&:hover {
		background: ${({ theme }) => theme.color.black};
		border: 1px solid ${({ theme }) => theme.color.black};
		color: ${({ theme }) => theme.color.white};
		transition: all 0.5s;
	}
`

const SettingsIconLayout: any = (): any => {
	const { icons } = require('./selection.json')

	return (
		<ListIcons>
			<h1>Copy your icon by click on one item:</h1>
			{icons.map((icon, i): any => {
				const text = `Click me and copy this text: ${icon.properties.name}`
				return (
					<Item key={i}>
						<Icon name={icon.properties.name} />
						<WrapperIconsTitle
							variant="secondary"
							onClick={() => navigator.clipboard.writeText(text)}>
							{text}
						</WrapperIconsTitle>
					</Item>
				)
			})}
		</ListIcons>
	)
}

export default Icon
export { SettingsIconLayout }
