import React, { FC, useEffect } from 'react'
import { ContactFormButton, ContactFormContainer, ContactFormData, ContactFormInput, ContactFormLabel, ContactFormTextArea, FormData } from './contactform.styles'
import { SubmitHandler, useForm } from 'react-hook-form'
import axios from 'axios';
import { CaptchaModal } from '../CaptchaModal/CaptchaModal';

interface Props {
	readonly service?: string
}

interface Inputs {
	name: string;
	email: string;
	phone: string;
	company: string;
	message: string;
}

export const ContactForm: FC<Props> = ({ service }) => {
	const [open, setOpen] = React.useState<boolean>(false);
	const [isDisabled, setIsDisabled] = React.useState<boolean>(true);
	const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting, isDirty, isValid },
		getValues,
  } = useForm<Inputs>({
		defaultValues: {
			name: '',
			email: '',
			phone: '',
			company: '',
			message: `Hola, me gustaría solicitar un presupuesto de ${service ?? 'web'} para mi proyecto.`
		}
	});

	const onSubmit: SubmitHandler<Inputs> = async (data) => {
		setIsDisabled(true);
		//setOpen(true);
		//const token = captchaRef.current?.getValue();
		//captchaRef.current?.reset();
		//const captchaStatus = await axios.post('/api/captcha', { token });
		//if (captchaStatus.data.status === 'success') {
			const message = await axios.post('/api/mail', data);
			message.status === 200 ? alert('Mensaje enviado') : alert('Error al enviar el mensaje');
			setIsDisabled(true);
			return;
		//}
		alert('Error al enviar el mensaje');
		setIsDisabled(true);
		return false
	}

	return (
		<ContactFormContainer>
			<form onSubmit={handleSubmit(onSubmit)}>
			<ContactFormData>
				<FormData>
					<ContactFormLabel htmlFor="name">Nombre: <span>*</span></ContactFormLabel>
					<ContactFormInput 
						type="text" 
						id="name" 
						{ ...register('name', {
							required: 'Este campo es requerido',
							minLength: { value: 2, message: 'Mínimo 2 caracteres' }
						})}
					/>
				</FormData>
				<FormData>
					<ContactFormLabel htmlFor="email">Email: <span>*</span></ContactFormLabel>
					<ContactFormInput 
						type="email" 
						id="email"
						{ ...register('email', {
							required: 'Este campo es requerido',
							minLength: { value: 2, message: 'Mínimo 2 caracteres' }
						})} 
					/>
				</FormData>
			</ContactFormData>
			<ContactFormData>
				<FormData>
					<ContactFormLabel htmlFor="phone">Teléfono: <span>*</span></ContactFormLabel>
					<ContactFormInput 
						type="tel" 
						id="phone"
						{ ...register('phone', {
							required: 'Este campo es requerido',
							minLength: { value: 2, message: 'Mínimo 2 caracteres' }
						})}
					/>
				</FormData>
				<FormData>
					<ContactFormLabel htmlFor="company">Empresa: <span>*</span></ContactFormLabel>
					<ContactFormInput 
						type="text" 
						id="company" 
						{ ...register('company', {
							required: 'Este campo es requerido',
							minLength: { value: 2, message: 'Mínimo 2 caracteres' }
						})}
					/>
				</FormData>
			</ContactFormData>
			<ContactFormData>
				<FormData>
					<ContactFormLabel htmlFor="message">Mensaje: <span>*</span></ContactFormLabel>
					<ContactFormTextArea 
						id="message" 
						{ ...register('message', {
							required: 'Este campo es requerido',
							minLength: { value: 2, message: 'Mínimo 2 caracteres' }
						})}
					/>
				</FormData>
			</ContactFormData>
			<FormData>
				<ContactFormButton type="submit" disabled={!isDirty || !isValid}/>
			</FormData>
			</form>
		</ContactFormContainer>
	)
}
