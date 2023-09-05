import Image from 'next/image';
import React from 'react';
import { BgImageContainer, BgImageContent } from './bgimage.styles';

type Image = {
  src: string;
  alt: string;
  media?: string;
};

interface Props {
  images: Image[];
}

export const BgImage: React.FC<Props> = ({ images }) => {
  return (
    <BgImageContainer>
      <BgImageContent>
        <picture>
          <source srcSet={images[0].src} media="(min-width: 768px)" />
          <Image src={images[1]?.src} alt={images[1]?.alt} fill loading='eager'/>

        </picture>
      </BgImageContent>
    </BgImageContainer>
  );
};
