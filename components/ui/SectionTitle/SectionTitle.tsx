import React, { FC } from 'react'
import { SectionTitleMain, SectionTitleWrapper } from './sectiontitle.styles'

interface Props {
	readonly title: string;
	readonly color?: string;
}

export const SectionTitle: FC<Props> = ({ title, color }) => {
	return (
		<SectionTitleWrapper>
			<SectionTitleMain color={color}>
				{ title }
			</SectionTitleMain>
		</SectionTitleWrapper>
	)
}
