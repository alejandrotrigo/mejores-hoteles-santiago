import React from 'react'
import NextLink from 'next/link';
import { Box, Typography } from '@mui/material'
import InstagramIcon from '@mui/icons-material/Instagram';
import { FooterContainer, FooterCopy, FooterSocial } from './footer.styles';

export const Footer = () => {
	return (
		<FooterContainer>
			<FooterCopy>
				<Typography fontFamily='DIN Condensed Bold' color='#111' fontSize='1rem' fontWeight={600}> Feito con cariño por © 2023 Webiñas </Typography>
			</FooterCopy>
			<FooterSocial>
				<Typography fontFamily='DIN Condensed Bold' color='#111' fontSize='1rem'> Síguenos en las redes: </Typography>
				<NextLink href='https://www.instagram.com/webinas_/' target='_blank' title='instagram de webiñas'>
					<InstagramIcon sx={{ color: '#111', fontSize: '2rem'}} />
				</NextLink>
			</FooterSocial>
		</FooterContainer>
	)
}