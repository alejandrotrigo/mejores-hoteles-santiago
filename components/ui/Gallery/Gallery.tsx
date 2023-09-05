import React from 'react'
import NextLink from 'next/link';
import { GridContainer, GridImage, GridItem } from './gallery.styles'

const images = [
	{
		src: '/webs/kurnot2.webp',
		alt: 'Kurnot',
		name: 'Kurnot',
		web: 'https://kurnot.com'
	},
	{
		src: '/webs/sabroso.webp',
		alt: 'Sabroso',
		name: 'Sabroso',
		web: 'https://sabroso.netlify.app'
	}
];

export const Gallery = () => {
	return (
		<GridContainer>
			{
				images.map((image) => (
					<GridItem key={image.src}>
						<NextLink href={image.web} target='_blank' title={image.name}>
							<GridImage src={image.src} alt={image.alt} key={image.name} width={300} height={300}/>
						</NextLink>
					</GridItem>
				))
			}
		</GridContainer>
	)
}
