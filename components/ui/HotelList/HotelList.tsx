import React from 'react'
import { HotelListContainer, HotelListItemButton, HotelListItemContainer, HotelListItemContent, HotelListItemDescription, HotelListItemImage, HotelListItemPrice, HotelListItemPriceContainer, HotelListItemTitle, HotelListWrapper } from './hotellist.styles'
import Link from 'next/link'

export const HotelList = () => {
	return (
		<HotelListContainer>
			<HotelListWrapper>
				<HotelListItemContainer>
					<HotelListItemImage src='/hoteles/casa-beatnik.jpg' alt='Mejores hoteles de santiago de compostela - Casa Beatnik'/>
					<HotelListItemContent>
						<HotelListItemTitle>Casa Beatnik</HotelListItemTitle>
						<HotelListItemDescription>
							Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae at consequuntur animi distinctio ab soluta tempora natus culpa aperiam cumque, vitae ipsa hic molestias suscipit? Numquam necessitatibus excepturi quod. Doloribus.
						</HotelListItemDescription>
						<HotelListItemPriceContainer>
							<Link href='/hoteles/casa-beatnik'>
								<HotelListItemButton>Saber más</HotelListItemButton>
							</Link>
							<HotelListItemPrice>20€</HotelListItemPrice>
						</HotelListItemPriceContainer>
					</HotelListItemContent>
				</HotelListItemContainer>
				<HotelListItemContainer>
					<HotelListItemImage src='/hoteles/nh-collection.webp' alt='Mejores hoteles de santiago de compostela - NH Collection Santiago de Compostela'/>
					<HotelListItemContent>
						<HotelListItemTitle>NH Collection Santiago de Compostela</HotelListItemTitle>
						<HotelListItemDescription>
							Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae at consequuntur animi distinctio ab soluta tempora natus culpa aperiam cumque, vitae ipsa hic molestias suscipit? Numquam necessitatibus excepturi quod. Doloribus.
						</HotelListItemDescription>
						<HotelListItemPriceContainer>
							<Link href='/hoteles/nh-collection'>
							<HotelListItemButton>Saber más</HotelListItemButton>
							</Link>
							<HotelListItemPrice>20€</HotelListItemPrice>
						</HotelListItemPriceContainer>
					</HotelListItemContent>
	
				</HotelListItemContainer>
				<HotelListItemContainer>
					<HotelListItemImage src='/hoteles/reis-catolicos.jpg' alt='Mejores hoteles de santiago de compostela - Parador de Santiago - Hostal Reis Católicos'/>
					<HotelListItemContent>
						<HotelListItemTitle>Parador de Santiago - Hostal Reis Católicos</HotelListItemTitle>
						<HotelListItemDescription>
							Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae at consequuntur animi distinctio ab soluta tempora natus culpa aperiam cumque, vitae ipsa hic molestias suscipit? Numquam necessitatibus excepturi quod. Doloribus.
						</HotelListItemDescription>
						<HotelListItemPriceContainer>
							<Link href='/hoteles/parador-santiago'>
								<HotelListItemButton>Saber más</HotelListItemButton>
							</Link>
							<HotelListItemPrice>20€</HotelListItemPrice>
						</HotelListItemPriceContainer>
					</HotelListItemContent>
				</HotelListItemContainer>
				<HotelListItemContainer>
					<HotelListItemImage src='/hoteles/quinta-auga.webp' alt='Mejores hoteles de santiago de compostela - A Quinta da Auga'/>
					<HotelListItemContent>
						<HotelListItemTitle>A Quinta da Auga </HotelListItemTitle>
						<HotelListItemDescription>
							Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae at consequuntur animi distinctio ab soluta tempora natus culpa aperiam cumque, vitae ipsa hic molestias suscipit? Numquam necessitatibus excepturi quod. Doloribus.
						</HotelListItemDescription>
						<HotelListItemPriceContainer>
							<Link href='/hoteles/quinta-da-auga'>
								<HotelListItemButton>Saber más</HotelListItemButton>
							</Link>
							<HotelListItemPrice>20€</HotelListItemPrice>
						</HotelListItemPriceContainer>
					</HotelListItemContent>
	
				</HotelListItemContainer>
				<HotelListItemContainer>
					<HotelListItemImage src='/hoteles/palacio-carmen.webp' alt='Mejores hoteles de santiago de compostela - Hotel Palacio del Carmen, Autograph Collection'/>
					<HotelListItemContent>
						<HotelListItemTitle>Hotel Palacio del Carmen, Autograph Collection</HotelListItemTitle>
						<HotelListItemDescription>
							Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae at consequuntur animi distinctio ab soluta tempora natus culpa aperiam cumque, vitae ipsa hic molestias suscipit? Numquam necessitatibus excepturi quod. Doloribus.
						</HotelListItemDescription>
						<HotelListItemPriceContainer>
							<Link href='/hoteles/palacio-carmen'>
								<HotelListItemButton>Saber más</HotelListItemButton>
							</Link>
							<HotelListItemPrice>20€</HotelListItemPrice>
						</HotelListItemPriceContainer>
					</HotelListItemContent>
				</HotelListItemContainer>
				<HotelListItemContainer>
					<HotelListItemImage src='/hoteles/araguaney.webp' alt='Mejores hoteles de santiago de compostela - Eurostars Araguaney'/>
					<HotelListItemContent>
						<HotelListItemTitle>Eurostars Araguaney</HotelListItemTitle>
						<HotelListItemDescription>
							Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae at consequuntur animi distinctio ab soluta tempora natus culpa aperiam cumque, vitae ipsa hic molestias suscipit? Numquam necessitatibus excepturi quod. Doloribus.
						</HotelListItemDescription>
						<HotelListItemPriceContainer>
							<Link href='/hoteles/araguaney'>
								<HotelListItemButton>Saber más</HotelListItemButton>
							</Link>
							<HotelListItemPrice>20€</HotelListItemPrice>
						</HotelListItemPriceContainer>
					</HotelListItemContent>
	
				</HotelListItemContainer>
				<HotelListItemContainer>
					<HotelListItemImage src='/hoteles/san-lazaro.jpg' alt='Mejores hoteles de santiago de compostela - Eurostars San Lázaro'/>
					<HotelListItemContent>
						<HotelListItemTitle>Eurostarts San Lázaro</HotelListItemTitle>
						<HotelListItemDescription>
							Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae at consequuntur animi distinctio ab soluta tempora natus culpa aperiam cumque, vitae ipsa hic molestias suscipit? Numquam necessitatibus excepturi quod. Doloribus.
						</HotelListItemDescription>
						<HotelListItemPriceContainer>
							<Link href='/hoteles/san-lazaro'>
								<HotelListItemButton>Saber más</HotelListItemButton>
							</Link>
							<HotelListItemPrice>20€</HotelListItemPrice>
						</HotelListItemPriceContainer>
					</HotelListItemContent>
				</HotelListItemContainer>
			</HotelListWrapper>
		</HotelListContainer>
	)
}
