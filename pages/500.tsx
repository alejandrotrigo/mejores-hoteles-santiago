import { ContentLayout } from '@/components/layouts/ContentLayout'
import { NotFoundContainer, NotFoundText } from '@/components/ui/404/404.styles'
import React from 'react'
import NextLink from 'next/link';

const InternalErrorPage = () => {
	return (
		<ContentLayout title="Webiñas - 500" pageDescription='Error interno' imageFullUrl='webinas.png'>
			<NotFoundContainer>
				<NotFoundText>
					Te lo has cargado...
					<span><NextLink href={'/'}>Sal de aquí antes de que se entere mi jefe</NextLink></span>
				</NotFoundText>
			</NotFoundContainer>
		</ContentLayout>
	)
}

export default InternalErrorPage