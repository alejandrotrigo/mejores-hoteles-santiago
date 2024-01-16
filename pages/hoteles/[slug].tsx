import { Collage } from '@/components/hotel/Collage';
import { HotelDescription } from '@/components/hotel/HotelDescription';
import { MainLayout } from '@/components/layouts';
import { MainTitle } from '@/components/ui';
import axios from 'axios';
import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import React, { FC } from 'react'

interface Props {
	readonly data: any;
}

const HotelPage: FC<Props> = ({ data }) => {
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

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { slug } = params as { slug: string };
  
  /*const { data } = await axios.get(`${process.env.SITE_URL}/api/data/${slug}`);*/

  return {
    props: {
      data: {} || null,
    }
  }
}

export default HotelPage