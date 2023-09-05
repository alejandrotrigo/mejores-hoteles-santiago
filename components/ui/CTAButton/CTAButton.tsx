import React, { MouseEvent} from 'react'
import NextLink from 'next/link';

import { CTAButtonStytled } from './ctabutton.styles'
import { Button, Link } from '@mui/material';

interface Props {
	onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
	children: React.ReactNode;
}

export const CTAButton: React.FC<Props> = ({ onClick, children }) => {
  return (
	<div>
		<Link component='span'>
			<CTAButtonStytled onClick={onClick}>{ children }</CTAButtonStytled>
		</Link>
	</div>
  )
}
