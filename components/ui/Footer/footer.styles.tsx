import styled from "@emotion/styled";

export const FooterContainer = styled('section')`
	width: 100%;
	height: 5rem;

	background: white;

	display: flex;
	justify-content: space-between;
	padding: 0 3rem;
	align-items: center;

	@media (max-width: 768px) {
		flex-direction: column;
		height: 6rem;
		padding: 0 1rem;
	}
`;

export const FooterSocial = styled('div')`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

export const FooterCopy = styled('div')`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;