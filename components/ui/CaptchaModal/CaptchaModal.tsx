import { Box, Modal } from '@mui/material'
import React, { FC } from 'react'

interface Props {
	readonly open: boolean;
	setOpen: (arg: boolean) => void;
}

export const CaptchaModal: FC<Props> = ({ open=false, setOpen }) => {
	return (
		<Modal
			open={open}
			onClose={() => setOpen(false)}
			aria-labelledby="parent-modal-title"
			aria-describedby="parent-modal-description"
		>
			<Box sx={{ width: 400 }}>
				
			</Box>
		</Modal>
	)
}
