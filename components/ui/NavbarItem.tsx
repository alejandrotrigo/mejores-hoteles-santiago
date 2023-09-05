import React from 'react';
import NextLink from 'next/link';
import { Button, Link } from '@mui/material';

interface Props {
	href: string;
	name: string;
	scrollToSection?: Function;
}

export const NavbarItem: React.FC<Props> = ({ href, name, scrollToSection }) => {
  return (
	<NextLink href={href} style={{ textDecoration: 'none' }}>
		<Link component='span'>
			<Button sx={{ textTransform: 'capitalize', backgroundColor:'transparent'}}>{ name }</Button>
		</Link>
	</NextLink>
  )
}
