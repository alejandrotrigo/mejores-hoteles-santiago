import React from 'react'
import { BlogContainer, BlogList, BlogSubtitle, BlogTitle } from './entrieslist.styles'
import { Entry } from '../Entry/Entry'
import { initialData } from '@/database/entries'
import Link from 'next/link'
import { compareDesc, format, parseISO } from 'date-fns'
import { allPosts, Post } from 'contentlayer/generated'

export const EntriesList = () => {

	const posts = allPosts.sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)))

	return (
		<BlogContainer>
			<BlogTitle>Blog</BlogTitle>
			<BlogSubtitle>Últimas entradas</BlogSubtitle>
			<BlogList>
				{
					posts.map((entry, index) => (
						<Entry key={index} entry={entry} />
					))
				}
			</BlogList>
		</BlogContainer>
	)
}
