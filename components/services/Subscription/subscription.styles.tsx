import styled from "@emotion/styled";

interface Props {
	readonly gradientColor?: string
}

export const SubscriptionContainer = styled.div<Props>`
	display: flex;
	justify-content: space-around;
	flex-wrap: wrap;
	align-items: center;
	padding: 1rem;

 
	background: rgb(34,193,195);
	background: linear-gradient(0deg, rgba(255,255,255,1) 0%, ${props => props.gradientColor || 'rgba(34,193,195,0.25)'} 50%, rgba(255, 255, 255, 1) 100%);

	@media (max-width: 900px){
		flex-direction: column;
	}
`;