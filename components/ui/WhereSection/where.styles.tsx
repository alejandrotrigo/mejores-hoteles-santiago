import styled from "@emotion/styled";

export const WhereSection = styled.section`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin: 0 1rem 3rem 1rem;
	padding-top: 5rem;
	border-bottom-left-radius: 100px;
	border-bottom-right-radius: 100px;

	@media (max-width: 768px) {
		height: 120vh;
	}
`;

export const ContentWrapper = styled.div`
	display: flex;
	justify-content: space-around;
	width: 1200px;

	@media (max-width: 768px) {
		flex-direction: column;

		& img {
			display: none;
		}
	}
`;

const mapFrame = styled.div``
// .map-frame {
// 	width: 100%;
// 	height: 100%;
// 	position: relative;
// }

// .map-content {
// 	z-index: 10;
// 	position: absolute;
// 	top: 50px;
// 	left: 50px;
// 	width: 390px;
// 	background-color: black;
// 	color: #FFF;
// }