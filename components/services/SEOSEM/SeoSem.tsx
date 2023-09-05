import { SectionTitle } from '@/components/ui/SectionTitle/SectionTitle'
import React from 'react'
import { SubscriptionContainer } from '../Subscription/subscription.styles'
import { PriceCard } from '../PriceCard/PriceCard'

export const SeoSem = () => {
	return (
		<div>
			<SectionTitle title='Tus campañas de marketing' color='#000'/>
			<SubscriptionContainer gradientColor='rgba(173, 43, 230, 0.25)'>
			<PriceCard title={'Landing Page'} subtitle={'Para empezar'} price={'0'} priceMonth={'20'} features={[]} />
				<PriceCard title={'Web Completa'} subtitle={'Para los que saben lo que quieren'} price={'200'} priceMonth={'20'} features={[]} />
				<PriceCard title={'Web con BD'} subtitle={'Posiciona y crea contenido'} price={'700'} priceMonth={'40'} features={[]} />
				<PriceCard title={'Tienda electrónica'} subtitle={'Llega a todo el mundo'} price={'1200'} priceMonth={'40'} features={[]} />
			</SubscriptionContainer>
		</div>
	)
}
