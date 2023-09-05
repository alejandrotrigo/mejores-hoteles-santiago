import { PostLayout } from '@/components/blog/Post/PostLayout';
import { MainLayout } from '@/components/layouts';
import { ContentLayout } from '@/components/layouts/ContentLayout';
import { initialData } from '@/database/entries';
import { GetServerSideProps, NextPage } from 'next';
import React from 'react'

interface Props {
	slug: string
}

const BlogPost: NextPage<Props> = ({ slug }) => {

	return (
		<ContentLayout title={`Webiñas - Blog`} pageDescription={``}>
			<PostLayout params={{slug}}/>

	</ContentLayout>
	)
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
	
	const { slug } = params as { slug: string };
	return {
		props: {
			slug
		}
	}
}

export default BlogPost;