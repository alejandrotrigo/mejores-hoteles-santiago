import { PostLayout } from '@/components/blog/Post/PostLayout';
import { MainLayout } from '@/components/layouts';
import { ContentLayout } from '@/components/layouts/ContentLayout';
import { initialData } from '@/database/entries';
import { allPosts } from 'contentlayer/generated'
import { GetServerSideProps, NextPage } from 'next';
import React from 'react'

interface Props {
	slug: string
}

const BlogPost: NextPage<Props> = ({ slug }) => {
	const post = allPosts.find((post) => post._raw.flattenedPath === slug)
  if (!post) throw new Error(`Post not found for slug: ${slug}`)
	return (
		<ContentLayout title={`Webiñas - Blog - ${post.title}`} pageDescription={`${post.body.raw.slice(post.body.raw.indexOf('#'),120)}`}>
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