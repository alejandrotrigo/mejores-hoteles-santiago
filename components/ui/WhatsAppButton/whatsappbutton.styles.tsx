import styled from '@emotion/styled';

export const ButtonContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;

	position: fixed;
	bottom: 4rem;
	right: 4rem;

	border-radius: 50%;
	background-color: #25D366;
	width: 4rem;
	height: 4rem;

	cursor: pointer;
	transition: all 0.3s ease-in-out;

	& > svg {
		height: 2rem;
		width: 2rem;
		fill: #fff;
		color: #fff;
	}

	&:hover {
		transform: scale(1.1);
		box-shadow: 0 0 0.5rem #25D366;
	}
`;
