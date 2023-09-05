import React, { FC } from 'react'
import { CardHeaderPrice, CardHeaderTitle, CardHeaderWrapper, CardHeaderTime } from './card.styles'

interface Props {
	readonly title: string;
	readonly price?: number;
	readonly color?: string;
}

export const CardHeader: FC<Props> = ({ title, price, color}) => {
	return (
		<CardHeaderWrapper>
			<CardHeaderTitle color={color}>{ title }</CardHeaderTitle>
			{ price && (
				<>
					<CardHeaderPrice>{price}€</CardHeaderPrice>
					<CardHeaderTime>per month</CardHeaderTime>
				</>
			)}
		</CardHeaderWrapper>
	)
}
