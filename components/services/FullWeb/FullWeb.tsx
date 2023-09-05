import { SectionTitle } from '@/components/ui/SectionTitle/SectionTitle'
import React from 'react'
import { SubscriptionContainer } from '../Subscription/subscription.styles'
import { PriceCard } from '../PriceCard/PriceCard'

export const FullWeb = () => {
	return (
		<div>
			<SectionTitle title='Web sin mantenimiento' color='#000'/>
			<SubscriptionContainer gradientColor='rgba(230, 224, 43, 0.25)'>
			<PriceCard title={'Landing Page'} subtitle={'Para empezar'} price={'200'} features={['Web con diseño 100% propio', 'Adaptable a móviles y tabletas']} />
				<PriceCard title={'Web Completa'} subtitle={'Para los que saben lo que quieren'} price={'500'} features={['Landing Page', 'Hasta 5 pestañas con diseño 100% propio', 'Adaptable a móviles y tabletas']} />
				<PriceCard title={'Web con BD'} subtitle={'Posiciona y crea contenido'} price={'1000'} features={['Web completa', 'Panel de administración', 'Gestor de contenido']} />
				<PriceCard title={'Tienda electrónica'} subtitle={'Llega a todo el mundo'} price={'1500'} features={['Web con BD', 'Pasarela de pagos', 'Dashboard de seguimiento de ventas y usuarios']} />
			</SubscriptionContainer>
		</div>
	)
}
