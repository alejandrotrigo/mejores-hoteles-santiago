import styled from "@emotion/styled";

export const RiskManagementSection = styled.section`
	display: flex;
	align-items: center;
	justify-content: space-between;

	width: 100%;
	height: 40vh;

	background-color: #f5f5f5;

	@media (max-width: 768px) {
		flex-direction: column;
		height: 100%;
		justify-content: center;
	}
`;

export const RiskManagementTitle = styled.h3`
	font-size: 2.5rem;
	font-weight: 600;
	color: #000;
	padding: 2rem;

	@media (max-width: 768px) {
		text-align: center;
	}
`;

export const RiskManagementContent = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: flex-start;
	width: 50%;

	padding: 2rem;
	text-align: justify;

	> p {
		font-size: 1.5rem;
		font-weight: 400;
		color: #000;
	}

	@media (max-width: 768px) {
		width: 100%;
		align-items: center;
		justify-content: center;
	}
`;

export const RiskManagementButton = styled('button')`
	font-size: 1.5rem;
	font-weight: 600;
	color: #000;
	text-decoration: underline;

	background: none;
	border: none;

	display: flex;
	align-items: center;
	justify-content: center;

	cursor: pointer;
`;