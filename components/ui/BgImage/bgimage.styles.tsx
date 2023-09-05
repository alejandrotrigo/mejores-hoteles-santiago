import styled from '@emotion/styled';

export const BgImageContainer = styled('div')`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 65vh;
  min-height: 900px;
  z-index: -1;
  opacity: 0.55;

  @media (max-width: 768px) {
    height: 100vh;
    aspect-ratio: 8/10;
  }
`;

export const BgImageContent = styled('div')`
  width: 100%;
  object-fit: none;
`;
