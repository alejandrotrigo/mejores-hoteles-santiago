import React, { FC } from 'react'
import { DesignDevContainer, DesignDevLink, DesignDevModule, DesignDevText, DesignDevTitle } from './designdev.styles'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import Image from 'next/image'

interface Props {
	readonly onClick: () => void;
}

export const DesignDev:FC<Props> = ({ onClick }) => {
	return (
		<DesignDevContainer>
			<DesignDevModule>
				<DesignDevTitle>
					Diseño
				</DesignDevTitle>
				<DesignDevText>
					El diseño es la base de todo proyecto, es la primera impresión que se lleva el usuario y es la que determina si se queda o se va.
					Todos <strong>nuestros diseños se realizan a medida para ti</strong>, escuchando cuáles son las necesidades de tu proyecto, inspirándonos en el sector en que se encuadra y centrándonos en los objetivos a los que deseas llegar.
				</DesignDevText>
				<Image src='/illustrations/Under_construction.png' alt='El diseño es una parte imprescindible para tus clientes' width={400} height={400}/>
			</DesignDevModule>
			<DesignDevModule>
				<DesignDevTitle>
					SEO
				</DesignDevTitle>
				<DesignDevText>
					El <strong>SEO</strong> se encarga de hacer tu <strong>web visible</strong> a los ojos de los buscadores como Google. Para ello, realizamos un estudio de <strong>palabras clave, optimizamos el contenido de tu web y la velocidad de carga</strong>, y nos encargamos de que tu web sea accesible para todos los usuarios.
				</DesignDevText>
				<DesignDevLink onClick={onClick}>
					Quiero tener una web <ArrowRightAltIcon />
				</DesignDevLink>
			</DesignDevModule>
			<DesignDevModule>
				<DesignDevTitle>
					Desarrollo
				</DesignDevTitle>
				<DesignDevText>
					El desarrollo es esa parte que, aunque es imperceptible a simple vista, juega un papel fundamental para que todo funcione correctamente
					 y el usuario se quede. Con más de 20 años de trayectoria en el sector de la programación, utilizamos las <strong>últimas tecnologías para que tu
					  proyecto sea rápido, seguro y accesible</strong>.
				</DesignDevText>
				<Image src='/illustrations/no_new_notification.png' alt='El desarrollo hace de visitar una página web, una experiencia inmersiva' width={400} height={400}/>
			</DesignDevModule>
		</DesignDevContainer>
	)
}
