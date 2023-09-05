import { SectionTitle } from '@/components/ui/SectionTitle/SectionTitle'
import React from 'react'
import { SubscriptionContainer } from './subscription.styles'
import { PriceCard } from '../PriceCard/PriceCard'

export const Subscription = () => {
	return (
		<div>
			<SectionTitle title='Tu web por suscripción' color='#000'/>
			<SubscriptionContainer>
				<PriceCard title={'Landing Page'} subtitle={'Para empezar'} priceMonth={'20'} features={['Web con diseño 100% propio', 'Adaptable a móviles y tabletas', 'Hosting, Dominio y Servicio técnico']} />
				<PriceCard title={'Web Completa'} subtitle={'Para los que saben lo que quieren'} priceMonth={'30'} features={['Landing Page', 'Hasta 5 pestañas con diseño 100% propio', 'Adaptable a móviles y tabletas', 'Hosting, Dominio y Servicio técnico']} />
				<PriceCard title={'Web con BD'} subtitle={'Posiciona y crea contenido'} priceMonth={'60'} features={['Web completa', 'Panel de administración', 'Gestor de contenido', 'Hosting, Dominio, Base de datos y Servicio técnico']} />
				<PriceCard title={'Tienda electrónica'} subtitle={'Llega a todo el mundo'} priceMonth={'110'} features={['Web con BD', 'Pasarela de pagos', 'Dashboard de seguimiento de ventas y usuarios', 'Hosting, Dominio, Base de datos y Servicio técnico']} />
			</SubscriptionContainer>
		</div>
	)
}
