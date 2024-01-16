import { Collage } from '@/components/hotel/Collage';
import { HotelDescription } from '@/components/hotel/HotelDescription';
import { MainLayout } from '@/components/layouts';
import { MainTitle } from '@/components/ui';
import { GetServerSideProps } from 'next';
import React, { FC, useEffect } from 'react'

interface Props {
	readonly data: any;
}

const HotelPage: FC<Props> = ({ data }) => {
		
		return (
		<MainLayout title={'Mejores hoteles de Santiago de Compostela'} pageDescription={'Ven a conocer Santiago de Compostela de la mano de los mejores hoteles, el lujo y experiencias auténticas '} imageFullUrl="webinas.png">
			<MainTitle title={data.title} subtitle={data.subtitle} />
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
  
  const res = await fetch(`http://localhost:3000/api/data/${slug}`);
  const data = await res.json();

  return {
    props: {
      data: data || null,
    }
  }
}

export default HotelPage