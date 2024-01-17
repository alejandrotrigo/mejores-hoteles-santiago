import React, { FC, MouseEvent } from 'react'
import { HeadingPrimary, HeadingPrimaryMain, HeadingPrimarySub } from './maintitle.styles'
import { CTAButton } from '../CTAButton/CTAButton';
import Link from 'next/link';

interface Props {
	readonly title: string;
	readonly subtitle: string;
	readonly button?: string;
	readonly link?: string;
}

export const MainTitle: FC<Props> = ({ title, subtitle, button, link}) => {
  return (
	<HeadingPrimary>
		<HeadingPrimaryMain>{title}</HeadingPrimaryMain>
		<HeadingPrimarySub>{ subtitle }</HeadingPrimarySub>
		{ button && 
			<Link href={link || ''} target='_blank'>
				<CTAButton >{button}</CTAButton> 
			</Link>
		}
	</HeadingPrimary>
  )
}
