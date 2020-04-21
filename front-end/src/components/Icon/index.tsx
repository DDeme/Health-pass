//@ts-check
import React, { FC } from 'react'
import './style.css'

import styled from 'styled-components'

const WrapperIcon: FC<StyledProps> = styled.i``

interface StyledProps {
	className?: string
}

interface IconProps {
	name: string
}

const Icon: FC<IconProps> = ({ name }): JSX.Element => (
	<WrapperIcon className={`icon icon-${name}`} />
)

const WrapperIcons: FC = styled.ul`
	color: ${({ theme }) => theme.color.white};
	display: flex;
	align-items: center;
	flex-direction: column;
	justify-content: center;
	overflow: hidden;
`

const WrapperIconsItem: FC = styled.li`
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

const Icons: any = (): any => {
	const { icons } = require('./selection.json')

	return (
		<WrapperIcons>
			<h1>Copy your icon by click on one item:</h1>
			{icons.map((icon, i): any => {
				const text = `<Icon {name: '${icon.properties.name}'} />`
				return (
					<WrapperIconsItem key={i}>
						<Icon name={icon.properties.name} />
						<WrapperIconsTitle
							variant="secondary"
							onClick={() => navigator.clipboard.writeText(text)}>
							{text}
						</WrapperIconsTitle>
					</WrapperIconsItem>
				)
			})}
		</WrapperIcons>
	)
}

export default Icon
export { Icons }
