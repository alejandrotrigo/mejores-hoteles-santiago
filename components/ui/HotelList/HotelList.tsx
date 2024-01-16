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
						Sumérgete en la esencia del encanto bohemio en el Hotel Casa Beatnik, un rincón mágico en el corazón de Santiago de Compostela. Con una fusión perfecta de elegancia contemporánea y nostalgia artística, este hotel boutique te invita a descubrir la ciudad desde una perspectiva única. Cada rincón cuenta una historia, cada detalle evoca inspiración, convirtiendo tu estancia en una experiencia única e inolvidable.
						</HotelListItemDescription>
						<HotelListItemPriceContainer>
							<Link href='/hoteles/casa-beatnik'>
								<HotelListItemButton>Saber más</HotelListItemButton>
							</Link>
						</HotelListItemPriceContainer>
					</HotelListItemContent>
				</HotelListItemContainer>
				<HotelListItemContainer>
					<HotelListItemImage src='/hoteles/nh-collection.webp' alt='Mejores hoteles de santiago de compostela - NH Collection Santiago de Compostela'/>
					<HotelListItemContent>
						<HotelListItemTitle>NH Collection Santiago de Compostela</HotelListItemTitle>
						<HotelListItemDescription>
						Bienvenido a una experiencia de lujo contemporáneo en pleno corazón de Santiago de Compostela. NH Collection Santiago de Compostela te invita a descubrir un mundo de comodidades modernas, diseño elegante y hospitalidad excepcional. Con una ubicación privilegiada, nuestro hotel se convierte en el punto de partida perfecto para explorar la riqueza cultural y arquitectónica de esta encantadora ciudad.
						</HotelListItemDescription>
						<HotelListItemPriceContainer>
							<Link href='/hoteles/nh-collection'>
							<HotelListItemButton>Saber más</HotelListItemButton>
							</Link>
						</HotelListItemPriceContainer>
					</HotelListItemContent>
	
				</HotelListItemContainer>
				<HotelListItemContainer>
					<HotelListItemImage src='/hoteles/reis-catolicos.jpg' alt='Mejores hoteles de santiago de compostela - Parador de Santiago - Hostal Reis Católicos'/>
					<HotelListItemContent>
						<HotelListItemTitle>Parador de Santiago - Hostal Reis Católicos</HotelListItemTitle>
						<HotelListItemDescription>
						Adéntrate en la historia viva en el Parador de Santiago de Compostela, un tesoro arquitectónico que ha sido testigo de siglos de acontecimientos. Este majestuoso parador, ubicado frente a la Catedral, es mucho más que un alojamiento de lujo; es un viaje en el tiempo donde cada piedra cuenta una historia. Sumérgete en la autenticidad de la tradición española y disfruta de una experiencia única en este enclave histórico.
						</HotelListItemDescription>
						<HotelListItemPriceContainer>
							<Link href='/hoteles/parador-santiago'>
								<HotelListItemButton>Saber más</HotelListItemButton>
							</Link>
						</HotelListItemPriceContainer>
					</HotelListItemContent>
				</HotelListItemContainer>
				<HotelListItemContainer>
					<HotelListItemImage src='/hoteles/quinta-auga.webp' alt='Mejores hoteles de santiago de compostela - A Quinta da Auga'/>
					<HotelListItemContent>
						<HotelListItemTitle>A Quinta da Auga </HotelListItemTitle>
						<HotelListItemDescription>
						Bienvenido a A Quinta da Auga, un refugio de serenidad y lujo en las orillas del río Sar, a las afueras de Santiago de Compostela. Este hotel boutique se erige como un edén gallego, donde la naturaleza se fusiona con la arquitectura histórica para ofrecer una experiencia única. Descubre la tranquilidad en medio de jardines exuberantes, sumérgete en la elegancia contemporánea y déjate llevar por la hospitalidad única de este destino exclusivo.
						</HotelListItemDescription>
						<HotelListItemPriceContainer>
							<Link href='/hoteles/quinta-da-auga'>
								<HotelListItemButton>Saber más</HotelListItemButton>
							</Link>
						</HotelListItemPriceContainer>
					</HotelListItemContent>
	
				</HotelListItemContainer>
				<HotelListItemContainer>
					<HotelListItemImage src='/hoteles/palacio-carmen.webp' alt='Mejores hoteles de santiago de compostela - Hotel Palacio del Carmen, Autograph Collection'/>
					<HotelListItemContent>
						<HotelListItemTitle>Hotel Palacio del Carmen, Autograph Collection</HotelListItemTitle>
						<HotelListItemDescription>
						Bienvenido a la majestuosidad histórica y la elegancia contemporánea en el Hotel Palacio del Carmen, Autograph Collection. Situado en pleno corazón de Santiago de Compostela, nuestro hotel es una obra maestra arquitectónica que combina la rica historia del Palacio del Carmen con comodidades modernas. Sumérgete en un mundo de lujo atemporal, donde cada detalle cuenta una historia y cada momento se convierte en un recuerdo imborrable.
						</HotelListItemDescription>
						<HotelListItemPriceContainer>
							<Link href='/hoteles/palacio-carmen'>
								<HotelListItemButton>Saber más</HotelListItemButton>
							</Link>
						</HotelListItemPriceContainer>
					</HotelListItemContent>
				</HotelListItemContainer>
				<HotelListItemContainer>
					<HotelListItemImage src='/hoteles/araguaney.webp' alt='Mejores hoteles de santiago de compostela - Eurostars Araguaney'/>
					<HotelListItemContent>
						<HotelListItemTitle>Eurostars Araguaney</HotelListItemTitle>
						<HotelListItemDescription>
						Bienvenido a la elegancia atemporal del Hotel Araguaney en Santiago de Compostela, donde la sofisticación y la hospitalidad se encuentran en armonía. Este icónico hotel combina la tradición gallega con un toque contemporáneo, ofreciendo una experiencia única en el corazón de la ciudad. Sumérgete en el lujo discreto, descubre la riqueza cultural y deja que cada momento se convierta en un recuerdo inolvidable.
						</HotelListItemDescription>
						<HotelListItemPriceContainer>
							<Link href='/hoteles/araguaney'>
								<HotelListItemButton>Saber más</HotelListItemButton>
							</Link>
						</HotelListItemPriceContainer>
					</HotelListItemContent>
	
				</HotelListItemContainer>
				<HotelListItemContainer>
					<HotelListItemImage src='/hoteles/san-lazaro.jpg' alt='Mejores hoteles de santiago de compostela - Eurostars San Lázaro'/>
					<HotelListItemContent>
						<HotelListItemTitle>Eurostarts San Lázaro</HotelListItemTitle>
						<HotelListItemDescription>
						¿Buscas un hotel moderno, cómodo y bien comunicado en Santiago de Compostela? El hotel Eurostars San Lázaro es tu opción ideal, ya que se encuentra en una zona tranquila, junto al Palacio de Congresos y Exposiciones de Galicia, y a solo 2 km del casco histórico de la ciudad. Disfruta de sus 132 habitaciones equipadas con aire acondicionado, wifi gratis, TV, minibar y baño privado. Además, el hotel cuenta con un restaurante que ofrece un delicioso desayuno buffet y una cena a la carta, un bar cafetería, un gimnasio, un aparcamiento exterior gratuito y tres salones para eventos. El hotel Eurostars San Lázaro te ofrece todo lo que necesitas para una estancia perfecta en Santiago de Compostela, ya sea por negocios o por placer.
						</HotelListItemDescription>
						<HotelListItemPriceContainer>
							<Link href='/hoteles/san-lazaro'>
								<HotelListItemButton>Saber más</HotelListItemButton>
							</Link>
						</HotelListItemPriceContainer>
					</HotelListItemContent>
				</HotelListItemContainer>
			</HotelListWrapper>
		</HotelListContainer>
	)
}
