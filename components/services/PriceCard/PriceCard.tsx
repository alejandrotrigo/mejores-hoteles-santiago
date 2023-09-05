import React, { FC } from 'react'
import { PriceCardButton, PriceCardContainer, PriceCardFeature, PriceCardFeatures, PriceCardHeader, PriceCardPrice, PriceCardSubtitle, PriceCardTitle } from './pricecard.styles'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { useRouter } from 'next/router';

interface  Props {
	readonly title: string
	readonly subtitle: string
	readonly price?: string
	readonly priceMonth?: string
	readonly features: string[]
}

export const PriceCard: FC<Props> = ({ title, subtitle, price, priceMonth, features}) => {
	const router = useRouter();
	const handleClick = () => {
		console.log('click')
		router.push(`/?goto=contacto&title=${title}`);
	}

	return (
		<PriceCardContainer>
			<PriceCardHeader>
				<PriceCardTitle>{title}</PriceCardTitle>
				<PriceCardSubtitle>{subtitle}</PriceCardSubtitle>
				<PriceCardPrice><span>Desde</span>{price && `${price}€`} {priceMonth && `${priceMonth}€/mes`}</PriceCardPrice>
			</PriceCardHeader>
			<PriceCardFeatures>
				{
					features.map((feature, index) => (
						<PriceCardFeature key={index}><CheckCircleOutlineIcon />{feature}</PriceCardFeature>
					))
				}
			</PriceCardFeatures>
			<PriceCardButton onClick={handleClick}>Me interesa</PriceCardButton>
		</PriceCardContainer>
	)
}
