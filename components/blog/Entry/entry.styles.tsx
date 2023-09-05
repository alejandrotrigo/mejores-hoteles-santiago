import styled from "@emotion/styled";
import Image from 'next/image'
import NextLink from 'next/link';


export const EntryWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-around;

	width: 100%;
	
	margin-bottom: 2rem;
	padding: 1rem 0;

	
	&:not(:last-child) {
		border-bottom: 1px solid #ccc;
	}

	@media (max-width: 768px) {
		flex-direction: column;
		justify-content: center;
		padding: 1rem;
	}
`;

export const EntryImage = styled(Image)`	
	aspect-ratio: 1/1;

	@media (max-width: 768px) {
		width: 75%;
		height: 75%;
	}
`;

export const EntryContent = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: center;

	width: 70%;
	height: 100%;
	margin-left: 1rem;

	@media (max-width: 768px) {
		width: 100%;
		align-items: center;
	}
`;

export const EntryTitle = styled.h2`
	font-size: 1.5rem;
	font-weight: 600;
	margin-bottom: 1rem;
`;

export const EntryDescription = styled.p`
	font-size: 1rem;
	font-weight: 400;
	margin-bottom: 1rem;
`;

export const EntryFooter = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;

	width: 50%;

	@media (max-width: 768px) {
		width: 100%;
		justify-content: flex-end;
	}
`;

export const EntryDate = styled.p`
	font-size: 0.8rem;
	font-weight: 400;
	margin-bottom: 1rem;

	width: 100%;
`;

export const EntryLink = styled(NextLink)`
	display: flex;
	align-items: center;
	justify-content: center;

	width: 100%;
	height: 2rem;

	border: none;
	border-radius: 0.5rem;

	cursor: pointer;
	transition: all 0.3s ease-in-out;

	&:hover {
		color: rgb(34,193,195);
	}
`;
