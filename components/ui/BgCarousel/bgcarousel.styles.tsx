import styled from '@emotion/styled';
import { Carousel } from "react-responsive-carousel";


export const CarouselDiv = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	height: 80vh;
	max-width: 100%;
`;

export const CarouselContainer = styled.div`
	display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 7rem 0;
	max-width: 100%;
	height: 80vh;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;

	@media (max-width: 768px) {
		height: 100vh;
	}
`;

export const StyledCarousel = styled(Carousel)`
  width: 100%;
  height: 80vh;

  @media (max-width: 768px) {
    height: 100vh;
  }
`;

export const CarouselSwipItem = styled.div`
	text-align: center;
  font-size: 18px;
  margin: 7rem auto;
  padding: 5px 50px;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;

	@media (max-width: 768px) {
		margin: 0 auto;
	}
`;

export const CarouselImgBox = styled.div`
	 width: 80%;
  height: 80%;
  margin: 0 auto;
  padding: 5px;
  border: 1px solid #ddd;
  border-radius: 50%;
  margin-top: 10px;

	& > img {
		 width: 100%;
		height: 100%;
		display: block;
		border-radius: 50%;
	}
`;

export const CarouselDetails = styled.div`
	margin: 1rem 0;
`;