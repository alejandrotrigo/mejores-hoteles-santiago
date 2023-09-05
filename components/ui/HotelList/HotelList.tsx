import React from 'react'
import { HotelListContainer, HotelListItemButton, HotelListItemContainer, HotelListItemContent, HotelListItemDescription, HotelListItemImage, HotelListItemPrice, HotelListItemPriceContainer, HotelListItemTitle, HotelListWrapper } from './hotellist.styles'

export const HotelList = () => {
	return (
		<HotelListContainer>
			<HotelListWrapper>
				<HotelListItemContainer>
					<HotelListItemImage src='/hoteles/casa-beatnik.jpg'/>
					<HotelListItemContent>
						<HotelListItemTitle>Casa Beatnik</HotelListItemTitle>
						<HotelListItemDescription>
							Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae at consequuntur animi distinctio ab soluta tempora natus culpa aperiam cumque, vitae ipsa hic molestias suscipit? Numquam necessitatibus excepturi quod. Doloribus.
						</HotelListItemDescription>
						<HotelListItemPriceContainer>
							<HotelListItemButton>Reservar</HotelListItemButton>
							<HotelListItemPrice>20€</HotelListItemPrice>
						</HotelListItemPriceContainer>
					</HotelListItemContent>
				</HotelListItemContainer>
				<HotelListItemContainer>
					<HotelListItemImage src='/hoteles/nh-collection.webp'/>
					<HotelListItemContent>
						<HotelListItemTitle>NH Collection Santiago de Compostela</HotelListItemTitle>
						<HotelListItemDescription>
							Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae at consequuntur animi distinctio ab soluta tempora natus culpa aperiam cumque, vitae ipsa hic molestias suscipit? Numquam necessitatibus excepturi quod. Doloribus.
						</HotelListItemDescription>
						<HotelListItemPriceContainer>
							<HotelListItemButton>Reservar</HotelListItemButton>
							<HotelListItemPrice>20€</HotelListItemPrice>
						</HotelListItemPriceContainer>
					</HotelListItemContent>
	
				</HotelListItemContainer>
				<HotelListItemContainer>
					<HotelListItemImage src='/hoteles/reis-catolicos.jpg'/>
					<HotelListItemContent>
						<HotelListItemTitle>Parador de Santiago - Hostal Reis Católicos</HotelListItemTitle>
						<HotelListItemDescription>
							Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae at consequuntur animi distinctio ab soluta tempora natus culpa aperiam cumque, vitae ipsa hic molestias suscipit? Numquam necessitatibus excepturi quod. Doloribus.
						</HotelListItemDescription>
						<HotelListItemPriceContainer>
							<HotelListItemButton>Reservar</HotelListItemButton>
							<HotelListItemPrice>20€</HotelListItemPrice>
						</HotelListItemPriceContainer>
					</HotelListItemContent>
				</HotelListItemContainer>
				<HotelListItemContainer>
					<HotelListItemImage src='/hoteles/quinta-auga.webp'/>
					<HotelListItemContent>
						<HotelListItemTitle>A Quinta da Auga </HotelListItemTitle>
						<HotelListItemDescription>
							Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae at consequuntur animi distinctio ab soluta tempora natus culpa aperiam cumque, vitae ipsa hic molestias suscipit? Numquam necessitatibus excepturi quod. Doloribus.
						</HotelListItemDescription>
						<HotelListItemPriceContainer>
							<HotelListItemButton>Reservar</HotelListItemButton>
							<HotelListItemPrice>20€</HotelListItemPrice>
						</HotelListItemPriceContainer>
					</HotelListItemContent>
	
				</HotelListItemContainer>
				<HotelListItemContainer>
					<HotelListItemImage src='/hoteles/palacio-carmen.webp'/>
					<HotelListItemContent>
						<HotelListItemTitle>Hotel Palacio del Carmen, Autograph Collection</HotelListItemTitle>
						<HotelListItemDescription>
							Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae at consequuntur animi distinctio ab soluta tempora natus culpa aperiam cumque, vitae ipsa hic molestias suscipit? Numquam necessitatibus excepturi quod. Doloribus.
						</HotelListItemDescription>
						<HotelListItemPriceContainer>
							<HotelListItemButton>Reservar</HotelListItemButton>
							<HotelListItemPrice>20€</HotelListItemPrice>
						</HotelListItemPriceContainer>
					</HotelListItemContent>
				</HotelListItemContainer>
				<HotelListItemContainer>
					<HotelListItemImage src='/hoteles/araguaney.webp'/>
					<HotelListItemContent>
						<HotelListItemTitle>Eurostars Araguaney</HotelListItemTitle>
						<HotelListItemDescription>
							Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae at consequuntur animi distinctio ab soluta tempora natus culpa aperiam cumque, vitae ipsa hic molestias suscipit? Numquam necessitatibus excepturi quod. Doloribus.
						</HotelListItemDescription>
						<HotelListItemPriceContainer>
							<HotelListItemButton>Reservar</HotelListItemButton>
							<HotelListItemPrice>20€</HotelListItemPrice>
						</HotelListItemPriceContainer>
					</HotelListItemContent>
	
				</HotelListItemContainer>
				<HotelListItemContainer>
					<HotelListItemImage src='/hoteles/san-lazaro.jpg'/>
					<HotelListItemContent>
						<HotelListItemTitle>Eurostarts San Lázaro</HotelListItemTitle>
						<HotelListItemDescription>
							Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae at consequuntur animi distinctio ab soluta tempora natus culpa aperiam cumque, vitae ipsa hic molestias suscipit? Numquam necessitatibus excepturi quod. Doloribus.
						</HotelListItemDescription>
						<HotelListItemPriceContainer>
							<HotelListItemButton>Reservar</HotelListItemButton>
							<HotelListItemPrice>20€</HotelListItemPrice>
						</HotelListItemPriceContainer>
					</HotelListItemContent>
				</HotelListItemContainer>
			</HotelListWrapper>
		</HotelListContainer>
	)
}
