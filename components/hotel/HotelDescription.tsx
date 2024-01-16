import React, { FC } from 'react'
import { HotelDescriptionSection, HotelDescriptionSubtitle, HotelDescriptionContainer, HotelDescriptionText, HotelDescriptionImage } from './hotel-description.styles';

interface Props {
	readonly data: any;
}

export const HotelDescription: FC<Props> = ({ data }) => {
	return (
		<HotelDescriptionSection>
			<HotelDescriptionSubtitle>{data.header1}</HotelDescriptionSubtitle>
			<HotelDescriptionContainer>
				<HotelDescriptionText>{data.text1}</HotelDescriptionText>
				<HotelDescriptionImage 
					src={`/hoteles/${data.slug}/images/image7.jpg`}
					alt="Image 7"
					width='400'
					height='300'
				/>
			</HotelDescriptionContainer>
			<HotelDescriptionSubtitle>{data.header2}</HotelDescriptionSubtitle>
			<HotelDescriptionContainer>
				<HotelDescriptionImage 
					src={`/hoteles/${data.slug}/images/image8.jpg`}
					alt="Image 7"
					width='400'
					height='300'
				/>
				<HotelDescriptionText>{data.text2}</HotelDescriptionText>
			</HotelDescriptionContainer>
			<HotelDescriptionSubtitle>{data.header3}</HotelDescriptionSubtitle>
			<HotelDescriptionContainer>
				<HotelDescriptionText>{data.text3}</HotelDescriptionText>
				<HotelDescriptionImage 
					src={`/hoteles/${data.slug}/images/image9.jpg`}
					alt="Image 7"
					width='400'
					height='300'
				/>
			</HotelDescriptionContainer>
			<HotelDescriptionSubtitle>{data.header4}</HotelDescriptionSubtitle>
			<HotelDescriptionContainer>
				<HotelDescriptionImage 
					src={`/hoteles/${data.slug}/images/image10.jpg`}
					alt="Image 7"
					width='400'
					height='300'
				/>
				<HotelDescriptionText>{data.text4}</HotelDescriptionText>
			</HotelDescriptionContainer>
		</HotelDescriptionSection>
	)
}
