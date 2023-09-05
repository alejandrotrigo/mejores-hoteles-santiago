import { SectionTitle } from '@/components/ui/SectionTitle/SectionTitle'
import React from 'react'
import { SubscriptionContainer } from '../Subscription/subscription.styles'
import { PriceCard } from '../PriceCard/PriceCard'

export const CommunityManager = () => {
	return (
		<div>
			<SectionTitle title='Te llevamos las redes' color='#000'/>
			<SubscriptionContainer gradientColor='rgba(108, 230, 43, 0.25)'>
			<PriceCard title={'Comunidad Peuqueña'} subtitle={'Para empezar'} price={'0'} priceMonth={'20'} features={[]} />
				<PriceCard title={'Comunidad Mediana'} subtitle={'Para los que saben lo que quieren'} price={'200'} priceMonth={'20'} features={[]} />
				<PriceCard title={'Comunidad Grande'} subtitle={'Posiciona y crea contenido'} price={'700'} priceMonth={'40'} features={[]} />
				<PriceCard title={'Comunidad Personalizada'} subtitle={'Llega a todo el mundo'} price={'1200'} priceMonth={'40'} features={[]} />
			</SubscriptionContainer>
		</div>
	)
}
