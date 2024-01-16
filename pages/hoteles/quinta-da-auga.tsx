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
	"subtitle": "El lujo y el buen gusto se unen en el llamativo hotel rosa a escasos kilometros de Santiago de Compostela",
	"header1": "Viñedos y bodegas",
	"text1": "La Ruta del Vino de Ribeiro es una de las más antiguas de España. En ella se pueden visitar bodegas centenarias y viñedos de gran belleza.",
	"header2": "Paz y tranquilidad",
	"text2": "La Ribeira Sacra es un lugar de paz y tranquilidad. Un lugar donde perderse y disfrutar de la naturaleza.",
	"header3": "Turismo activo",
	"text3": "La Ribeira Sacra es un lugar de paz y tranquilidad. Un lugar donde perderse y disfrutar de la naturaleza.",
	"header4": "Turismo activo",
	"text4": "La Ribeira Sacra es un lugar de paz y tranquilidad. Un lugar donde perderse y disfrutar de la naturaleza."
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