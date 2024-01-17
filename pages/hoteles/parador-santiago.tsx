import { Collage } from '@/components/hotel/Collage';
import { HotelDescription } from '@/components/hotel/HotelDescription';
import { MainLayout } from '@/components/layouts';
import { MainTitle } from '@/components/ui';
import { useRouter } from 'next/router';
import React from 'react'

const data = {
	"booking": "https://www.booking.com/hotel/es/hostal-reis-catolicos.es.html?aid=8082293",
	"slug": "parador-santiago",
	"title": "Parador de Santiago - Hostal Reis Catolicos",
	"subtitle": "Adéntrate en la historia viva en el Parador de Santiago de Compostela, un tesoro arquitectónico que ha sido testigo de siglos de acontecimientos. Este majestuoso parador, ubicado frente a la Catedral, es mucho más que un alojamiento de lujo; es un viaje en el tiempo donde cada piedra cuenta una historia. Sumérgete en la autenticidad de la tradición española y disfruta de una experiencia única en este enclave histórico.",
	"header1": "Elegancia centenaria frente a la Catedral:",
	"text1": "El Parador de Santiago de Compostela es más que un lugar para alojarse; es una conexión con el pasado. Su arquitectura centenaria, con vistas a la imponente Catedral, te transportará a una época de esplendor histórico. Cada rincón del parador emana elegancia y autenticidad, creando una experiencia única en el corazón de la ciudad.",
	"header2": "Gastronomía gallega en el Restaurante dos Reis:",
	"text2": "En el Restaurante dos Reis, la cocina gallega cobra vida con un toque de sofisticación. Los ingredientes locales de alta calidad se convierten en platos excepcionales que celebran la riqueza gastronómica de Galicia. Disfruta de una experiencia culinaria inigualable en un entorno que combina tradición y elegancia.",
	"header3": "Bienestar en los jardines históricos:",
	"text3": "Los jardines del Parador son un oasis de tranquilidad en el bullicio de Santiago de Compostela. Pasea entre árboles centenarios y flores fragantes, disfrutando de la serenidad de un entorno que ha sido testigo de siglos de historia. Un lugar perfecto para relajarse y desconectar.",
	"header4": "Eventos inolvidables en espacios históricos:",
	"text4": "Los salones históricos del Parador son el marco ideal para eventos inolvidables. Ya sea una boda romántica o una conferencia distinguida, nuestros espacios llenos de encanto y carácter ofrecen un escenario único que realza la importancia de cada ocasión."
}

const ParadorSantiago = () => {

		return (
		<MainLayout title={'Mejores hoteles de Santiago de Compostela'} pageDescription={'Ven a conocer Santiago de Compostela de la mano de los mejores hoteles, el lujo y experiencias auténticas '} imageFullUrl="webinas.png">
			<MainTitle title={data.title} subtitle={data.subtitle} button="ver en booking" link={data.booking}/>
			<Collage 
				url1={`/hoteles/${data.slug}/images/image1.jpg`}
				url2={`/hoteles/${data.slug}/images/image2.jpg`}
				url3={`/hoteles/${data.slug}/images/image3.jpg`}
				url4={`/hoteles/${data.slug}/images/image4.jpg`}
				url5={`/hoteles/${data.slug}/images/image5.jpg`}
				url6={`/hoteles/${data.slug}/images/image6.jpg`}
			/>
			<HotelDescription	data={data} />
		</MainLayout>
	)
}

export default ParadorSantiago