import styled from "@emotion/styled";
import Image from "next/image";

export const HotelDescriptionSection = styled.section`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	background-color: #fff;
	padding: 4rem 0;
	max-width: 1440px;
	margin: 0 auto;
`;

export const HotelDescriptionSubtitle = styled.h2`
	font-size: 1.5rem;
	font-weight: 400;
	letter-spacing: 0.75rem;
	margin-bottom: 2rem;
	text-align: center;
`;

export const HotelDescriptionContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
`;

export const HotelDescriptionText = styled.p`
	font-size: 1.5rem;
	font-weight: 400;
	letter-spacing: 0.75rem;
	margin-bottom: 2rem;
	text-align: center;
`;

export const HotelDescriptionImage = styled(Image)`
	width: 100%;
	height: 100%;
	object-fit: cover;
`;