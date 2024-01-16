import React, { FC } from 'react'
import { CollageGrid, GridImage, Image1, Image2, Image3, Image4, Image5, Image6 } from './collage.styles'

interface Props {
	url1: string;
	url2: string;
	url3: string;
	url4: string;
	url5: string;
	url6: string;
}

export const Collage: FC<Props> = ({ url1, url2, url3, url4, url5, url6}) => {
	return (
		<CollageGrid>
			<Image1 className="gallery__item gallery__item--1">
			<GridImage 
				src={url1}
				className="gallery__img" 
				alt="Image 1"
				width='200'
				height='200'
			/>
		</Image1>
		<Image2 className="gallery__item gallery__item--2">
			<GridImage 
				src={url2}
				className="gallery__img" 
				alt="Image 2"
				width='200'
				height='200'
			/>
		</Image2>
		<Image3 className="gallery__item gallery__item--3">
			<GridImage 
				src={url3}
				className="gallery__img" 
				alt="Image 3"
				width='400'
				height='300'
			/>
		</Image3>
		<Image4 className="gallery__item gallery__item--4">
			<GridImage 
				src={url4}
				className="gallery__img" 
				alt="Image 4"
				width='300'
				height='300'
			/>
		</Image4>
		<Image5 className="gallery__item gallery__item--5">
			<GridImage 
				src={url5}
				className="gallery__img" 
				alt="Image 5" 
				width='300'
				height='300'
				/>
		</Image5>
		<Image6 className="gallery__item gallery__item--6">
			<GridImage 
				src={url6}
				className="gallery__img" 
				alt="Image 6"
				width='300'
				height='300'
			/>
		</Image6>
		</CollageGrid>
	)
}
