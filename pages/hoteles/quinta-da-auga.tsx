import { Collage } from '@/components/hotel/Collage';
import { HotelDescription } from '@/components/hotel/HotelDescription';
import { MainLayout } from '@/components/layouts';
import { MainTitle } from '@/components/ui';
import { useRouter } from 'next/router';
import React from 'react'

const data = {
	"booking": "https://www.booking.com/hotel/es/a-quinta-da-auga.es.html?aid=8082293",
	"slug": "quinta-da-auga",
	"title": "A Quinta Da Auga Hotel Spa Relais & Chateaux",
	"subtitle": "Bienvenido a A Quinta da Auga, un refugio de serenidad y lujo en las orillas del río Sar, a las afueras de Santiago de Compostela. Este hotel boutique se erige como un edén gallego, donde la naturaleza se fusiona con la arquitectura histórica para ofrecer una experiencia única. Descubre la tranquilidad en medio de jardines exuberantes, sumérgete en la elegancia contemporánea y déjate llevar por la hospitalidad única de este destino exclusivo.",
	"header1": "Elegancia en un entorno natural:",
	"text1": "A Quinta da Auga es mucho más que un hotel; es un rincón donde la elegancia se encuentra con la naturaleza. Rodeado de jardines exuberantes y bañado por las aguas del río Sar, este hotel boutique te ofrece un escape exclusivo donde cada detalle refleja un equilibrio perfecto entre el lujo contemporáneo y la serenidad de la naturaleza circundante.",
	"header2": "Cocina gallega en el Restaurante Filigrana:",
	"text2": "En el Restaurante Filigrana, la cocina gallega cobra vida de una manera única. Cada plato es una obra maestra que resalta los sabores auténticos de la región. Con ingredientes frescos de la zona, nuestro chef crea experiencias culinarias que te sumergen en la riqueza gastronómica de Galicia, en un entorno encantador que refleja la esencia de A Quinta da Auga.",
	"header3": "Bienestar en el spa junto al río:",
	"text3": "En nuestro spa junto al río, el bienestar es una experiencia completa. Disfruta de tratamientos que combinan técnicas relajantes con ingredientes naturales, todo mientras te sumerges en vistas serenas del río Sar. Cada momento en el spa de A Quinta da Auga está diseñado para rejuvenecer cuerpo y mente, ofreciéndote un escape tranquilo y revitalizante.",
	"header4": "Eventos exclusivos en entornos históricos:",
	"text4": "Nuestros espacios históricos son el escenario perfecto para eventos exclusivos. Ya sea una boda romántica o una reunión corporativa importante, en A Quinta da Auga creamos experiencias únicas en entornos llenos de historia y encanto. Cada evento se convierte en un capítulo especial en la historia de este refugio gallego."
}

const QuintaDaAuga = () => {
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

export default QuintaDaAuga