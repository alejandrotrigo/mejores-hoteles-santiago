import React, { FC } from 'react'
import { EntryContent, EntryDate, EntryDescription, EntryFooter, EntryLink, EntryTitle, EntryWrapper } from './entry.styles'
import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';
import Image from 'next/image'
import { IEntry } from '@/interfaces/IEntry';

interface Props {
	entry: any;
}

export const Entry: FC<Props> = ({ entry }) => {

	return (
		<EntryWrapper>
			<Image src={`/posts/thumbnails/${entry._raw.flattenedPath}.webp`} alt='entry' width="300" height="200"/>
			<EntryContent>
				<EntryTitle>{entry.title}</EntryTitle>
				<EntryDescription>
					{entry.description}
				</EntryDescription>
				<EntryFooter>
					<EntryDate>{ entry.date }</EntryDate>
					<EntryLink href={`${entry.url}`} passHref prefetch={false}>Leer más <KeyboardArrowRightOutlinedIcon /></EntryLink>
				</EntryFooter>
			</EntryContent>
		</EntryWrapper>
	)
}
