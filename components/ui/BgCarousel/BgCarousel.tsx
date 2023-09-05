import { items } from "./Items.json";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { CarouselContainer, CarouselDetails, CarouselImgBox, CarouselSwipItem, StyledCarousel } from "./bgcarousel.styles";
import { BgImage } from "../BgImage/BgImage";
import { MainTitle } from "../MainTitle/MainTitle";
import mobilePicture from 'public/services/services-mobile.webp';
import desktopPicture from 'public/services/services-desktop.webp';

export function BgCarousel() {
  const { responsive } = items;
  return (
    <CarouselContainer>
      <StyledCarousel
        showIndicators={true}
        infiniteLoop={true}
        dynamicHeight={false}
        autoPlay={true}
      >
        {responsive.map((item) => (
          <CarouselSwipItem key={item.id}>
            {/*
            <CarouselImgBox>
              <img src={item.imageUrl} alt="slides" />
            </CarouselImgBox>
            <CarouselDetails>
              <h2>{item.title}</h2>
              <p>{item.text}</p>
            </CarouselDetails>
            */}
            <BgImage images={[{src: desktopPicture.src, alt: 'webiñas'}, {src: mobilePicture.src, alt: 'webiñas'}]}/>
            <MainTitle title='Servicios' subtitle='Déjate asesorar' />
          </CarouselSwipItem>
        ))}
      </StyledCarousel>
    </CarouselContainer>
  );
}
