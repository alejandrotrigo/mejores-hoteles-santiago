import { MainLayout } from '@/components/layouts';
import { BgImage, MainTitle } from '@/components/ui';
import { NextPage } from 'next';
import React from 'react'

import mobilePicture from 'public/services/services-mobile.webp';
import desktopPicture from 'public/services/services-desktop.webp'
import { Subscription } from '@/components/services/Subscription/Subscription';
import { FullWeb } from '@/components/services/FullWeb/FullWeb';
import { CommunityManager } from '@/components/services/CommunityManager/CommunityManager';
import { SeoSem } from '@/components/services/SEOSEM/SeoSem';
import { TabbedCard } from '@/components/services/TabbedCard/TabbedCard';
import { ContentLayout } from '@/components/layouts/ContentLayout';

const ServicesPage: NextPage = () => {
	return (
		<ContentLayout title="Webiñas - Servicios. Tu web por suscripción desde 20€ al mes sin riesgo" pageDescription='Ofrecemos una amplia variedad de servicios, desde webs por suscripción hasta SEO y SEM, pide tu web completa o asesoramiento sobre como llevar tu marca al siguiente nivel dejando el riesgo de lado' imageFullUrl='webinas.png'>
			<BgImage images={[{src: desktopPicture.src, alt: 'webiñas'}, {src: mobilePicture.src, alt: 'webiñas'}]}/>
			<MainTitle title='Servicios' subtitle='Déjate asesorar' />
			<TabbedCard />
		</ContentLayout>
	)
}

export default ServicesPage;