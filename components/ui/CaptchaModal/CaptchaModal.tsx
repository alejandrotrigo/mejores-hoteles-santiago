import { Box, Modal } from '@mui/material'
import React, { FC } from 'react'
import ReCAPTCHA from 'react-google-recaptcha';

interface Props {
	readonly open: boolean;
	setOpen: (arg: boolean) => void;
	readonly captchaRef: React.MutableRefObject<ReCAPTCHA>;
}

export const CaptchaModal: FC<Props> = ({ open=false, setOpen, captchaRef }) => {
	return (
		<Modal
			open={open}
			onClose={() => setOpen(false)}
			aria-labelledby="parent-modal-title"
			aria-describedby="parent-modal-description"
		>
			<Box sx={{ width: 400 }}>
				<ReCAPTCHA
					sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ''}
					ref={captchaRef}
				/>
			</Box>
		</Modal>
	)
}
