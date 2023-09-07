import NextLink from 'next/link';
import {AppBar, Box, Toolbar, Link } from "@mui/material";

import { INavbarItem } from '@/interfaces/ui/Items';
import { NavbarItem } from './NavbarItem';
import { useContext, useEffect, useState } from 'react';
import { UiContext } from '@/context/ui';
import Image from 'next/image';
import logo from '@/public/title.png';

interface Props {
	isAnimated?: boolean;
	items: INavbarItem[];
}

export const Navbar: React.FC<Props> = ({ items, isAnimated=true }) => {

	const [scroll, setScroll] = useState(!isAnimated);
	const { toggleSideMenu, isMenuOpen } = useContext(UiContext);

	useEffect(() => {
		if (!isAnimated) return;
		const handleScroll = () => {
			if (window.scrollY > 0) {
				setScroll(true);
			} else {
				setScroll(false);
			}
		}
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);


  return (
	<AppBar className='fadeIn' sx={{ 
		margin: '0' ,
		right:  '0', 
		left:  '0', 
		width:  '100%',
		borderRadius: '0',
		transition: 'all 0.3s ease-in-out',

		bakcgroundColor: '#003580'
	}}>
		<Toolbar >
			<NextLink href='/' passHref style={{ textDecoration: 'none' }} title='Webiñas home'>
				<Link  component='span' display='flex' alignItems='center'>
					<Image src={logo} alt='title' width={220} height={60} /> 
				</Link>
			</NextLink>

			<Box flex={1}>
			</Box>
			<Box>
				{
					items.map(item => 
						<NavbarItem href={item.href} name={item.name} key={`${item.name}-${item.href}`} />
					)
				}
			</Box>

		</Toolbar>
	</AppBar>
  )
}
