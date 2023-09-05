import styled from "@emotion/styled";

export const PriceCardContainer = styled.div`
	width: 23%;
	height: 560px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding: 1rem;
	border-radius: 5px;
	background-color: #fff;
	box-shadow: 0 0 10px rgba(0,0,0,0.2);
	transition: all 0.3s ease-in-out;

	&:hover {
		transform: scale(1.05);
		box-shadow: 0 0 20px rgba(0,0,0,0.2);
	}

	@media (max-width: 768px) {
		width: 100%;
		margin-bottom: 1rem;
	}
`;

export const PriceCardHeader = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding: 1rem;
`;

export const PriceCardTitle = styled.h3`
	font-size: 1.5rem;
	font-weight: 600;
	margin-bottom: 0.5rem;
`;

export const PriceCardSubtitle = styled.p`
	font-size: 1rem;
	font-weight: 400;
	margin-bottom: 0.5rem;
`;

export const PriceCardPrice = styled.span`
	font-size: 2rem;
	font-weight: 600;
	margin-bottom: 0.5rem;

	& > span {
		font-size: 0.75rem;
		font-weight: 400;
		margin-right: 0rem;
	}
`;

export const PriceCardFeatures = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	padding: 1rem;
	margin-bottom: 1.5rem;
`;

export const PriceCardFeature = styled.p`
	display: flex;
	align-items: center;
	font-size: 1rem;
	font-weight: 400;
	margin-bottom: 0.5rem;

	& > svg {
		fill: #0d7377;
		color: #0d7377;
		margin-right: 0.5rem;
	}
`;

export const PriceCardButton = styled.button`
	padding: 1rem 2rem;
	border: none;
	border-radius: 5px;
	background-color: #0d7377;
	color: #fff;
	font-size: 1rem;
	font-weight: 600;
	margin-bottom: 0.5rem;
	cursor: pointer;
	transition: all 0.3s ease-in-out;

	&:hover {
		background-color: #0d7377;
		opacity: 0.8;
	}
`;
