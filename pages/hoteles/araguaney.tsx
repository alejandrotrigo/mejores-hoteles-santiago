import { Collage } from '@/components/hotel/Collage';
import { HotelDescription } from '@/components/hotel/HotelDescription';
import { MainLayout } from '@/components/layouts';
import { MainTitle } from '@/components/ui';
import { useRouter } from 'next/router';
import React from 'react'

const data = {
	"booking": "https://www.booking.com/hotel/es/eurostarsaraguaney.es.html?aid=8082293",
	"slug": "araguaney",
	"title": "Eurostars Araguaney",
	"subtitle": "Bienvenido a la elegancia atemporal del Hotel Araguaney en Santiago de Compostela, donde la sofisticación y la hospitalidad se encuentran en armonía. Este icónico hotel combina la tradición gallega con un toque contemporáneo, ofreciendo una experiencia única en el corazón de la ciudad. Sumérgete en el lujo discreto, descubre la riqueza cultural y deja que cada momento se convierta en un recuerdo inolvidable.",
	"header1": "Lujo gallego en cada detalle:",
	"text1": "Cada detalle en el Hotel Araguaney refleja la esencia del lujo gallego. Desde la decoración inspirada en la rica tradición local hasta los servicios de primera clase, tu estancia será una experiencia de lujo auténtico, donde la elegancia y la hospitalidad se combinan para crear un ambiente acogedor y refinado.",
	"header2": "Gastronomía de autor en nuestro restaurante Baluarte:",
	"text2": "En Baluarte, la alta cocina se encuentra con la tradición gallega de una manera única. Nuestro chef utiliza ingredientes locales de alta calidad para crear platos que son verdaderas obras de arte culinarias. Disfruta de una experiencia gastronómica excepcional donde cada bocado es una celebración de la riqueza de la cocina gallega.",
	"header3": "Bienestar en nuestro spa exclusivo:",
	"text3": "En nuestro spa exclusivo, te sumergirás en un oasis de bienestar y tranquilidad. Desde masajes rejuvenecedores hasta tratamientos faciales personalizados, cada experiencia está diseñada para renovar tus sentidos y ofrecerte un momento de relajación incomparable.",
	"header4": "Eventos memorables en espacios únicos:",
	"text4": "Ya sea una boda de ensueño o una conferencia corporativa importante, en el Hotel Araguaney creamos eventos que superan las expectativas. Nuestros espacios elegantes y versátiles se adaptan a cualquier ocasión, ofreciendo un entorno exclusivo y sofisticado para celebrar momentos inolvidables con estilo y distinción."
}

const Araguaney = () => {
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

export default Araguaney