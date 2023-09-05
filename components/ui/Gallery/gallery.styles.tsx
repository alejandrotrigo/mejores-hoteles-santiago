import styled from '@emotion/styled';
import Image from 'next/image';

export const GridContainer = styled('div')`	
	padding: 1rem 3rem;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	align-items: center;
	gap: 1rem;

`;

export const GridItem = styled('div')`
	width: 300px;
	height: 300px;
	overflow: hidden;
	border-radius: 10px;
	box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
	transition: 0.3s ease-in-out;

	&:hover {
		transform: scale(1.1);
	}

	@media (max-width: 768px) {
		width: 100%;
		margin-bottom: 1.5rem;
	}
`;


export const GridImage = styled(Image)`
	height: 100%;
	object-fit: cover;
	transition: 0.3s ease-in-out;

	&:hover {
		transform: scale(1.1);
	}
`;