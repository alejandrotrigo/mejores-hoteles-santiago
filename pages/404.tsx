import { MainLayout } from '@/components/layouts'
import { NotFoundContainer, NotFoundText } from '@/components/ui/404/404.styles'
import NextLink from 'next/link';
import React from 'react'

const NotFoundPage = () => {
	return (
		<MainLayout title='Webiñas - 404' pageDescription='Página no encontrada' imageFullUrl='webinas.png'>
			<NotFoundContainer>
				<NotFoundText>
					No tengo ni idea de cómo he llegado hasta aquí... <br />
					<span>
						<NextLink href={'/'} passHref> 
							Llévame a un lugar seguro porfa
						</NextLink>
					</span>
				</NotFoundText>
			</NotFoundContainer>
		</MainLayout>
	)
}

export default NotFoundPage