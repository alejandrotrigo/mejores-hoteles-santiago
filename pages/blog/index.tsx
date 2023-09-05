import { EntriesList } from '@/components/blog/EntriesList/EntriesList';
import { ContentLayout } from '@/components/layouts/ContentLayout';
import React from 'react'

const BlogPage = () => {

	return (
		<ContentLayout title={'Webiñas - Blog | Te explicamos como ganar dinero con tu página web'} pageDescription={'Listado de entradas al blog sobre emprendimiento, crecimiento de marca personal, monetización de páginas webs, SEO, SEM, asesoramiento digital, growth partner, diseño adaptable y user friendly de Webiñas'}>
			<EntriesList />
		</ContentLayout>
	)
}

export default BlogPage;