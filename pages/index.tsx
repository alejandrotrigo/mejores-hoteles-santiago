import type { NextPage } from "next";
import { MainLayout } from "@/components/layouts/MainLayout";

import { MainTitle } from "@/components/ui";

import { Where } from "@/components/ui/WhereSection/Where";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { HotelList } from "@/components/ui/HotelList/HotelList";

const Home : NextPage = ( ) => {
  const router = useRouter();
  const service = router.query.title;

  return (
   <MainLayout title={'Webiñas - webs con cariño | Diseños responsive y SEO friendly'} pageDescription={'Webs accesibles, originales y de calidad, SEO, SEM, Redes sociales, RRSS, diseños responsive, '} imageFullUrl="webinas.png">
      <MainTitle title="Los mejores hoteles de Santiago te esperan" subtitle="Descubre cuáles son los mejores hoteles de Santiago de Compostela para hospedarse y pasar unos días inolvidables" />
      <HotelList />
      <Where id='contact' service={service as string}/>
   </MainLayout>
  )
}

export default Home;