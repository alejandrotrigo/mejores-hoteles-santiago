import React, { FC } from 'react'
import { Box, Typography } from '@mui/material'
import { SectionTitle } from '../SectionTitle/SectionTitle';
import { ContactForm } from '../ContactForm/ContactForm';
import ContactImage from '@/public/illustrations/Welcome.png';
import Image from 'next/image';
import { ContentWrapper, WhereSection } from './where.styles';

interface Props {
	readonly id: string;
	readonly service?: string;
}

export const Where: FC<Props> = ({ id, service }) => {
	return (
		<WhereSection id={id}>
			<SectionTitle title='Te gustaría formar parte de esta lista?' color='#000'/>
			<ContentWrapper>
				<ContactForm service={service}/>
				<Image src={ContactImage} alt='Contacto' width={500} height={500} />
			</ContentWrapper>
		</WhereSection>
	)
}
