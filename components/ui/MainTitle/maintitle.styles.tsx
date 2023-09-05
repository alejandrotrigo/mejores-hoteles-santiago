import styled from '@emotion/styled';

export const HeadingPrimary = styled('div')`
	color: #000;
	text-transform: uppercase;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	min-height: 80vh;
	width: 100%;

	z-index: 1;

	@media (max-width: 748px) {
		min-height: 100vh;
	}
`;

export const HeadingPrimaryMain = styled('h1')`
	font-size: 2rem;
	font-weight: 400;
	letter-spacing: 0.75rem;
	margin-bottom: 0;
	margin-top: 0;
	padding-top: 0;
	padding-bottom: 0;
	text-align: center;

	@media (min-width: 1024px) {
		font-size: 3rem;
		font-weight: 600;
		letter-spacing: 1rem;
	}

	animation-name: moveInLeft;
	animation-duration: 2s;
`;

export const HeadingPrimarySub = styled('h2')`

	font-family: Old Standard TT, 'Montserrat', sans-serif;

	font-size: 1.25rem;
	font-weight: 400;
	letter-spacing: .75rem;
	margin-bottom: 2rem;
	text-align: center;


	@media (min-width: 1024px) {
		font-size: 1.25rem;
		font-weight: 600;
		letter-spacing: 0.5rem;
		width: 50%;
	}

	animation-name: moveInBottom;
	animation-duration: 2s;
`;