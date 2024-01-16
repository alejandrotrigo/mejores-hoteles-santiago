import styled from "@emotion/styled";
import Image from "next/image";

export const CollageGrid = styled.div`
	display: grid;
	grid-template-columns: repeat(8, 1fr);
	grid-template-rows: repeat(8, 5vw);
	grid-gap: 5px;
	max-width: 1440px;
	margin: 0 auto;
`;

export const GridImage = styled(Image)`
	width: 100%;
	height: 100%;
	object-fit: cover;
`;

export const Image1 = styled.figure`
	grid-column-start: 1;
	grid-column-end: 3;
	grid-row-start: 1;
	grid-row-end: 3;
	margin: 0;
`;

export const Image2 = styled.figure`
	grid-column-start: 3;
	grid-column-end: 5;
	grid-row-start: 1;
	grid-row-end: 3;
	margin: 0;
`;

export const Image3 = styled.figure`
	grid-column-start: 5;
	grid-column-end: 9;
	grid-row-start: 1;
	grid-row-end: 6;
	margin: 0;
`;

export const Image4 = styled.figure`
	grid-column-start: 1;
	grid-column-end: 5;
	grid-row-start: 3;
	grid-row-end: 6;
	margin: 0;
`;

export const Image5 = styled.figure`
	grid-column-start: 1;
	grid-column-end: 5;
	grid-row-start: 6;
	grid-row-end: 9;
	margin: 0;
`;

export const Image6 = styled.figure`
	grid-column-start: 5;
	grid-column-end: 9;
	grid-row-start: 6;
	grid-row-end: 9;
	margin: 0;
`;