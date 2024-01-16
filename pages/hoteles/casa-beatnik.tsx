import { Collage } from '@/components/hotel/Collage';
import { HotelDescription } from '@/components/hotel/HotelDescription';
import { MainLayout } from '@/components/layouts';
import { MainTitle } from '@/components/ui';
import { useRouter } from 'next/router';
import React, { FC } from 'react'

interface Props {
	readonly data: any;
}

const data = {
	"booking": "https://www.booking.com/hotel/es/casa-beatnik.es.html",
	"slug": "casa-beatnik",
	"title": "Casa Beatnik Hotel",
	"subtitle": "Sumérgete en la esencia del encanto bohemio en el Hotel Casa Beatnik, un rincón mágico en el corazón de Santiago de Compostela. Con una fusión perfecta de elegancia contemporánea y nostalgia artística, este hotel boutique te invita a descubrir la ciudad desde una perspectiva única. Cada rincón cuenta una historia, cada detalle evoca inspiración, convirtiendo tu estancia en una experiencia única e inolvidable.",
	"header1": "Armonía cultural en cada habitación:",
	"text1": "Cada habitación en Casa Beatnik es una oda a la creatividad y la cultura. Desde las paredes adornadas con obras de artistas locales hasta la cuidadosa selección de mobiliario, te encontrarás inmerso en un mundo donde el arte y la comodidad se fusionan para ofrecerte una experiencia única.",
	"header2": "Gastronomía con acento local:",
	"text2": "En nuestro restaurante, te invitamos a un viaje gastronómico que rinde homenaje a los sabores locales. Desde los productos frescos de la región hasta las recetas tradicionales reinterpretadas con un toque contemporáneo, cada bocado es una celebración de la riqueza culinaria de Santiago de Compostela.",
	"header3": "Descanso y relajación en nuestro oasis urbano:",
	"text3": "En nuestro spa, experimentarás un mundo de relajación y bienestar. Desde masajes rejuvenecedores hasta tratamientos de belleza personalizados, cada momento se centra en tu bienestar. Después de un día explorando la ciudad, déjate envolver por la calma y el lujo de nuestro oasis urbano.",
	"header4": "Eventos memorables en espacios únicos:",
	"text4": "Ya sea una boda romántica o una reunión de negocios importante, en Casa Beatnik creamos eventos que perduran en la memoria. Nuestros espacios versátiles y llenos de encanto se adaptan a cualquier ocasión, ofreciendo un escenario perfecto para celebrar momentos especiales con estilo y distinción."
}

const CasaBeatnik: FC<Props> = () => {
	const router = useRouter();
	const handleClick = () => {
		router.replace(data.booking);
	}

		return (
		<MainLayout title={'Mejores hoteles de Santiago de Compostela'} pageDescription={'Ven a conocer Santiago de Compostela de la mano de los mejores hoteles, el lujo y experiencias auténticas '} imageFullUrl="webinas.png">
			<MainTitle title={data.title} subtitle={data.subtitle} button="ver en booking" handleClick={handleClick}/>
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

export default CasaBeatnik