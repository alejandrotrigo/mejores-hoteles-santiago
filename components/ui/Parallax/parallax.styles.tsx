import styled from "@emotion/styled";

interface SectionProps {
	size?: string;
}

export const ParallaxSection = styled.section<SectionProps>`
	position: relative;
	top: 0;
	display: flex;
	justify-content: space-around;
	align-items: center;
	flex-direction: column;
	
	background-color: #cccccc;
	background-size: ${(props) => props.size || 'cover'};
	background-position: 50% 50%;
	background-repeat: no-repeat;
	width: 100%;
	height: 65vh;
	padding: 0;
	margin: 0 !important;
	transition: 0.1s linear;
`;

export const ParallaxWrapper = styled.div`
	display: flex;
	justify-content: space-around;
	align-items: center;

	width: 100%;
	gap: 3rem;
	padding: 0 3rem;
`;