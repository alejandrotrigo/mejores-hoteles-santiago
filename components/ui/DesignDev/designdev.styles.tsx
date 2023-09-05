import styled from "@emotion/styled";
import NextLink from 'next/link';

export const DesignDevContainer = styled('section')`
	display: flex;
	align-items: center;
	justify-content: space-around;

	width: 100%;
	min-height: 60vh;

	margin: 3rem 0 0 0;

	background: rgb(34,193,195);
	background: linear-gradient(0deg, rgba(34,193,195,0.25) 0%, rgba(255,255,255,1) 100%);

	@media (max-width: 768px) {
		flex-direction: column;
		height: 100%;
	}
`;

export const DesignDevModule = styled('div')`
	display: flex;
	flex-direction: column;
	align-items: center;

	margin: 0 5rem;

	width: 50%;
	height: 100%;

	@media (max-width: 768px) {
		width: 100%;
		padding: 0 3rem;
		& img {
			display: none;
		}
	}
`;

interface Props {
	color?: string;
}

export const DesignDevTitle = styled('h3')<Props>`
	font-weight: 600;
	font-size: 4rem;
	color: ${(props) => props.color || '#000'};
`;

export const DesignDevText = styled('p')`
	font-size: 1.25rem;
	wheight: 400;

	margin: 1rem 0;
`;

export const DesignDevBulletsWrapper = styled('div')`
	display: flex;
	flex-direction: column;

	width: 100%;
	height: 100%;
`;

export const DesignDevLink = styled('button')`
	font-size: 1.5rem;
	font-weight: 600;
	color: #000;
	text-decoration: underline;

	background: none;
	border: none;

	display: flex;
	align-items: center;
	justify-content: center;

	cursor: pointer;
`;