import { Collage } from '@/components/hotel/Collage';
import { HotelDescription } from '@/components/hotel/HotelDescription';
import { MainLayout } from '@/components/layouts';
import { MainTitle } from '@/components/ui';
import { useRouter } from 'next/router';
import React from 'react'

const data = {
	"booking": "https://www.booking.com/hotel/es/eurostarssanlazaro.es.html?aid=8082293",
	"slug": "san-lazaro",
	"title": "Eurostars San Lázaro",
	"subtitle": "¿Buscas un hotel moderno, cómodo y bien comunicado en Santiago de Compostela? El hotel Eurostars San Lázaro es tu opción ideal, ya que se encuentra en una zona tranquila, junto al Palacio de Congresos y Exposiciones de Galicia, y a solo 2 km del casco histórico de la ciudad. Disfruta de sus 132 habitaciones equipadas con aire acondicionado, wifi gratis, TV, minibar y baño privado. Además, el hotel cuenta con un restaurante que ofrece un delicioso desayuno buffet y una cena a la carta, un bar cafetería, un gimnasio, un aparcamiento exterior gratuito y tres salones para eventos. El hotel Eurostars San Lázaro te ofrece todo lo que necesitas para una estancia perfecta en Santiago de Compostela, ya sea por negocios o por placer.",
	"header1": "Descansa en habitaciones amplias y confortables",
	"text1": "Descansa en habitaciones amplias y confortables: El hotel Eurostars San Lázaro te ofrece 132 habitaciones de diferentes tipos, todas ellas con una decoración moderna y funcional, y equipadas con todo lo necesario para tu comodidad. Podrás elegir entre habitaciones dobles, triples o familiares, con cama de matrimonio o dos camas individuales, y algunas de ellas adaptadas para personas con movilidad reducida. Todas las habitaciones cuentan con aire acondicionado, wifi gratis, TV, minibar, caja fuerte, escritorio y baño privado con secador de pelo y amenities. Además, algunas habitaciones tienen vistas al jardín del hotel, donde podrás relajarte y disfrutar de la naturaleza.",
	"header2": "Saborea la gastronomía gallega en el restaurante del hotel",
	"text2": "Saborea la gastronomía gallega en el restaurante del hotel: El hotel Eurostars San Lázaro te invita a degustar los platos típicos de la cocina gallega, elaborados con productos frescos y de calidad, en su restaurante. Podrás empezar el día con un completo y variado desayuno buffet, que incluye fruta, zumos, bollería, embutidos, huevos, tortilla, café y té. Por la noche, podrás elegir entre las opciones de la carta, que van desde ensaladas, cremas y entrantes, hasta carnes, pescados y postres. También podrás tomar una copa o un aperitivo en el bar cafetería del hotel, que ofrece un ambiente acogedor y tranquilo.",
	"header3": "Celebra tus reuniones y eventos con éxito",
	"text3": "Celebra tus reuniones y eventos con éxito: El hotel Eurostars San Lázaro es el lugar ideal para organizar tus reuniones de trabajo, conferencias, seminarios, exposiciones o celebraciones familiares, ya que cuenta con tres salones con capacidad de hasta 300 personas. Los salones están equipados con wifi gratis, proyector, pantalla, micrófono, altavoces y material de escritura. Además, el hotel te ofrece un servicio de catering personalizado, con menús adaptados a tus necesidades y preferencias. Y si necesitas alojar a tus invitados, el hotel te ofrece tarifas especiales para grupos. El hotel Eurostars San Lázaro te garantiza el éxito de tus eventos.",
	"header4": "Conecta con el centro histórico y el aeropuerto en pocos minutos",
	"text4": "Conecta con el centro histórico y el aeropuerto en pocos minutos: El hotel Eurostars San Lázaro tiene una ubicación privilegiada, ya que está muy cerca de la carretera de Coruña a Tui y de la Autopista del Atlántico, que comunica Coruña, Santiago, Pontevedra y Vigo. Además, a 500 metros del hotel hay una parada de autobús que te lleva directamente al centro de la ciudad (cada 20 minutos) y al aeropuerto de Santiago (cada 30 minutos). Así podrás visitar los lugares más emblemáticos de la ciudad, como la catedral, el mercado de Abastos o el parque de la Alameda, y llegar a tiempo a tu vuelo sin complicaciones."
}

const SanLazaro = () => {
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

export default SanLazaro;
