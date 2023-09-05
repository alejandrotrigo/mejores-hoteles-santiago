import styled from "@emotion/styled";

export const BlogContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding: 2rem 0;
	min-width: 100%;
	margin-top: 3rem;

	@media (min-width: 768px) {
		margin-top: 0;
		padding: 2rem;
		max-width: 768px;
	}
`;

export const BlogTitle = styled.h1`
	font-size: 2rem;
	font-weight: 600;
	margin-bottom: 1rem;
`;

export const BlogSubtitle = styled.p`
	font-size: 1rem;
	font-weight: 400;
	margin-bottom: 1rem;
`;

export const BlogList = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding: 2rem 0;
	max-width: 1024px;

	@media (min-width: 768px) {
		width: 100%;
	}
`;