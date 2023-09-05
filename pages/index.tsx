import type { NextPage } from "next";
import { MainLayout } from "@/components/layouts/MainLayout";

import { BgImage, MainTitle } from "@/components/ui";

import mobilePicture from 'public/back-mobile.webp';
import desktopPicture from 'public/back-desktop3.webp'
import { Where } from "@/components/ui/WhereSection/Where";
import { DesignDev } from "@/components/ui/DesignDev/DesignDev";
import { RiskManagement } from "@/components/ui/RiskManagement/RiskManagement";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { HotelList } from "@/components/ui/HotelList/HotelList";

const Home : NextPage = ( ) => {
  const router = useRouter();
  const service = router.query.title;
  
  const handleClick = () => {
    const element = document.getElementById('contact');
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
  
  useEffect(() => {
    if (router.query.goto === 'contacto') handleClick();
  }, []);

  return (
   <MainLayout title={'Webiñas - webs con cariño | Diseños responsive y SEO friendly'} pageDescription={'Webs accesibles, originales y de calidad, SEO, SEM, Redes sociales, RRSS, diseños responsive, '} imageFullUrl="webinas.png">
      <MainTitle title="Los mejores hoteles de Santiago te esperan" subtitle="Descubre cuáles son los mejores hoteles de Santiago de Compostela para hospedarse y pasar unos días inolvidables" button handleClick={handleClick} />
      <HotelList />
      <Where id='contact' service={service as string}/>
   </MainLayout>
  )
}

export default Home;