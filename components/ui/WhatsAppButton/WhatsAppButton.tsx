import React from 'react'
import { ButtonContainer } from './whatsappbutton.styles'
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

export const WhatsAppButton = () => {

	const handleClick = () => {
		window.open('https://wa.me/34603525816', '_blank')
	}

	return (
		<ButtonContainer onClick={handleClick}>
			<WhatsAppIcon />
		</ButtonContainer>
	)
}
