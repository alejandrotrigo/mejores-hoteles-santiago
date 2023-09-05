import React, { FC, MouseEvent } from 'react'
import { HeadingPrimary, HeadingPrimaryMain, HeadingPrimarySub } from './maintitle.styles'
import { CTAButton } from '../CTAButton/CTAButton';

interface Props {
	readonly title: string;
	readonly subtitle: string;
	readonly button?: boolean;
	readonly handleClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}

export const MainTitle: FC<Props> = ({ title, subtitle, button=false, handleClick}) => {
  return (
	<HeadingPrimary>
		<HeadingPrimaryMain>{title}</HeadingPrimaryMain>
		<HeadingPrimarySub>{ subtitle }</HeadingPrimarySub>
		{ button && <CTAButton onClick={handleClick}>Pide presupuesto</CTAButton> }
	</HeadingPrimary>
  )
}
