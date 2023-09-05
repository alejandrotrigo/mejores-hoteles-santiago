import styled from '@emotion/styled';

export const HotelListContainer = styled('div')`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 100%;
`;

export const HotelListWrapper = styled('div')`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: flex-start;
	max-width: 1200px;
	height: 100%;
	gap: 1rem;
`;

export const HotelListItemContainer = styled('div')`
	display: flex;
	align-items: flex-start;
	justify-content: space-between;
	width: 100%;
	height: 250px;
	padding: 1rem 0.5rem;

	border: 1px solid #e7e7e7;
	border-radius: 3px;

	&:hover {
		cursor: pointer;
	}
`;

export const HotelListItemImage = styled.img`
	width: 200px;
	height: 200px;
	background-size: cover;
	background-repeat: none;

	border-radius: 8px;
`;

export const HotelListItemContent = styled('div')`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: flex-start;
	width: 100%;
	height: 100%;

	padding: 1rem;
`;

export const HotelListItemTitle = styled('h3')`
	font-size: 1.5rem;
	font-weight: 600;
	margin: 0;
`;

export const HotelListItemDescription = styled('p')`
	font-size: 1rem;
	font-weight: 400;
`;

export const HotelListItemPriceContainer = styled('div')`
	display: flex;
	align-items: center;
	justify-content: flex-start;
	width: 100%;

`;

export const HotelListItemPrice = styled('p')`
	font-size: 1.5rem;
	font-weight: 600;
	margin: 0;
	margin-left: auto;
`;

export const HotelListItemButton = styled('button')`
	width: 12rem;
	height: 2.5rem;
	margin: 0;
	border: 1px solid #ddd;
	background-color: #006ce4;
	color: white;

	font-weight: 400;
	font-family: Bebas Neue, serif;
	letter-spacing: 0.15rem;
	font-size: 1.05rem;
	padding: 0.5rem 0.5rem;

	cursor: pointer;

	transition: all 0.3s ease-in-out;

	&:hover {
		background-color: #035fdf;
		color: #fff;
	}

	&:hover:disabled {
		background-color: rgb(34, 193, 195, 0.35);
		box-shadow: none;
		cursor: not-allowed;
	}
`;