import React, { FC } from 'react'
import { CardWrapper } from './card.styles'

interface Props {
	readonly children: React.ReactNode;
}

export const Card: FC<Props> = ({ children }) => {
	return (
		<CardWrapper>
        { children }
        <ul>
            <li><b>10GB</b> Disk Space</li>
            <li><b>100GB</b> Monthly Bandwidth</li>
            <li><b>20</b> Email Accounts</li>
      <li><b>Unlimited</b> subdomains</li>      
        </ul>
        <a className="signup" href="">Sign up</a>         
    </CardWrapper >
	)
}
