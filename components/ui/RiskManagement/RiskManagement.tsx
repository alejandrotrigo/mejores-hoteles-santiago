import React, { FC } from 'react'
import { RiskManagementButton, RiskManagementContent, RiskManagementSection, RiskManagementTitle } from './riskmanagement.styles'

interface Props {
	readonly onClick: () => void;
}

export const RiskManagement: FC<Props> = ({ onClick }) => {
	return (
		<RiskManagementSection>
			<RiskManagementTitle>
				Orientamos el desarrollo a los resultados
			</RiskManagementTitle>
			<RiskManagementContent>
				<p>
					En <strong>Webiñas</strong> nos enfocamos en el desarrollo de páginas web orientadas al SEO, con el fin de que tu negocio sea visible en los buscadores y así puedas llegar a más clientes potenciales. 
					Así mismo tenemos planes de mantenimiento y actualización de contenido para que <strong>tu página web siempre esté actualizada</strong> y no pierda posicionamiento. Si no ves los resultados que esperabas, te devolvemos tu dinero.
				</p>
				<RiskManagementButton onClick={onClick}>
					Solicitar presupuesto
				</RiskManagementButton>
			</RiskManagementContent>
		</RiskManagementSection>
	)
}
