import { FC } from 'react';
import styled from 'styled-components';
import ImageComponent from '../../atoms/ImageComponent/ImageComponent';

const Image = styled(ImageComponent)`
  object-fit: cover;
  object-position: center 20%;
  height: 230px;
  width: 100%;

  ${({ theme }) => theme.mediaQueries.mobileM} {
    height: 310px;
  }
  ${({ theme }) => theme.mediaQueries.tablet} {
    height: 594px;
  }
`;

const HeroImage: FC<{ src: string; alt: string }> = ({ src, alt }) => <Image src={src} alt={alt} />;

export default HeroImage;
