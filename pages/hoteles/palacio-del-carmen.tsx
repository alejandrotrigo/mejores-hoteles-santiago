import { Collage } from '@/components/hotel/Collage';
import { HotelDescription } from '@/components/hotel/HotelDescription';
import { MainLayout } from '@/components/layouts';
import { MainTitle } from '@/components/ui';
import { useRouter } from 'next/router';
import React from 'react'

const data = {
	"booking": "https://www.booking.com/hotel/es/palaciodelcarmen.es.html?aid=8082293",
	"slug": "palacio-del-carmen",
	"title": "Hotel Palacio del Carmen, Autograph Collection",
	"subtitle": "Bienvenido a la majestuosidad histórica y la elegancia contemporánea en el Hotel Palacio del Carmen, Autograph Collection. Situado en pleno corazón de Santiago de Compostela, nuestro hotel es una obra maestra arquitectónica que combina la rica historia del Palacio del Carmen con comodidades modernas. Sumérgete en un mundo de lujo atemporal, donde cada detalle cuenta una historia y cada momento se convierte en un recuerdo imborrable.",
	"header1": "Historia y lujo entrelazados:",
	"text1": "En el Hotel Palacio del Carmen, cada paso te lleva a través de siglos de historia. La majestuosidad del palacio original se fusiona con las comodidades modernas, creando un ambiente que te transporta a otra época. Descubre el lujo entrelazado con la rica historia de Santiago de Compostela en cada rincón de nuestro hotel.",
	"header2": "Gastronomía de autor en el restaurante Lume:",
	"text2": "En Lume, cada plato es una obra maestra culinaria que celebra la riqueza de los ingredientes locales. Nuestros chefs fusionan la tradición culinaria gallega con técnicas innovadoras, ofreciéndote una experiencia gastronómica única. Descubre la excelencia en cada bocado en el restaurante insignia del Palacio del Carmen.",
	"header3": "Bienestar en nuestro spa exclusivo:",
	"text3": "En nuestro spa exclusivo, el bienestar es una experiencia completa. Desde masajes relajantes hasta tratamientos faciales rejuvenecedores, cada detalle está pensado para tu confort. Sumérgete en un oasis de serenidad y déjate mimar por nuestros terapeutas expertos en el Palacio del Carmen.",
	"header4": "Eventos memorables en espacios históricos:",
	"text4": "En el Hotel Palacio del Carmen, tus eventos se convierten en experiencias inolvidables. Nuestros espacios históricos proporcionan el escenario perfecto para bodas románticas, reuniones ejecutivas y celebraciones exclusivas. Con un toque de distinción y encanto, hacemos que cada ocasión sea extraordinaria en nuestro hotel Autograph Collection."
}

const PalacioDelCarmen = () => {
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

export default PalacioDelCarmen