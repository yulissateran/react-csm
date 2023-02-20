import styled from 'styled-components';

const StyledImage = styled.img<{ $isRounded?: boolean }>`
  border-radius: ${({ $isRounded }) => ($isRounded ? '50%' : 'initial')};
`;

const ImageComponent: React.FC<{ src: string; alt: string; isRounded?: boolean; className?: string }> = ({
  src,
  alt,
  isRounded,
  className,
}) => <StyledImage src={src} alt={alt} $isRounded={isRounded} className={className} />;
export default ImageComponent;
