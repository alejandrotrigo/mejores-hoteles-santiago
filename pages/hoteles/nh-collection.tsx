import { Collage } from '@/components/hotel/Collage';
import { HotelDescription } from '@/components/hotel/HotelDescription';
import { MainLayout } from '@/components/layouts';
import { MainTitle } from '@/components/ui';
import { useRouter } from 'next/router';
import React from 'react'

const data = {
	"booking": "https://www.booking.com/hotel/es/nh-collection-santiago.es.html?aid=8082293",
	"slug": "nh-collection",
	"title": "NH Collection Santiago de Compostela",
	"subtitle": "El lujo y el buen gusto se unen en el llamativo hotel rosa a escasos kilometros de Santiago de Compostela",
	"header1": "Hospitalidad NH Collection:",
	"text1": "En NH Collection Santiago de Compostela, la hospitalidad va más allá de las expectativas. Desde la cálida bienvenida hasta los servicios personalizados, cada detalle está cuidadosamente diseñado para que tu estancia sea excepcional. Nuestro compromiso con la excelencia se refleja en cada rincón, creando un ambiente acogedor y sofisticado.",
	"header2": "Cocina gallega en nuestro restaurante DeCompostela:",
	"text2": "En DeCompostela, te invitamos a un viaje culinario que celebra los sabores auténticos de Galicia. Con ingredientes locales frescos y la creatividad de nuestros chefs, cada plato es una obra maestra gastronómica. Disfruta de una experiencia culinaria única que refleja la riqueza de la cocina gallega.",
	"header3": "Bienestar en nuestro gimnasio y spa:",
	"text3": "En NH Collection Santiago de Compostela, tu bienestar es nuestra prioridad. Ya sea que prefieras mantenerte activo en nuestro gimnasio o relajarte con tratamientos rejuvenecedores en nuestro spa, ofrecemos un oasis de tranquilidad y cuidado personal para que te sientas renovado durante tu estancia.",
	"header4": "Espacios versátiles para eventos:",
	"text4": "Ya sea una reunión de negocios o una celebración especial, nuestros espacios versátiles están diseñados para adaptarse a tus necesidades. Con tecnología de vanguardia y un equipo profesional, NH Collection Santiago de Compostela es el lugar ideal para organizar eventos inolvidables con estilo y eficiencia."
}

const NHCollection = () => {
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

export default NHCollection