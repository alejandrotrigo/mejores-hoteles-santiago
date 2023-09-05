import styled from '@emotion/styled';

export const PostArticle = styled.article`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	width: 100%;
	height: 100%;

	margin-top: 3rem;
`;

export const PostContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	margin: 3rem;

	width: 100%;
	height: 100%;

	text-align: center;
`;

export const PostBody = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;

	max-width: 780px;
	height: 100%;
	margin: 2rem;

	@media (max-width: 768px) {
		margin: 1rem;
		max-width: 100%;

		& > p > img {
			max-width: 100%;
		}
	}
`;

export const PostFooter = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;

	max-width: 780px;
	height: 100%;
	margin: 2rem;

	@media (max-width: 768px) {
		margin: 1rem;
		max-width: 100%;
	}
`;